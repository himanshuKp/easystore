CREATE DATABASE IF NOT EXISTS easystore_identity;

-- Grant permissions for root to connect from any host
-- This is necessary when the application runs outside the container network (e.g., from host machine)
ALTER USER 'root'@'%' IDENTIFIED WITH mysql_native_password BY 'root';
GRANT ALL PRIVILEGES ON *.* TO 'root'@'%' WITH GRANT OPTION;
FLUSH PRIVILEGES;

USE easystore_identity;

CREATE TABLE IF NOT EXISTS roles (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(20) NOT NULL UNIQUE
);

CREATE TABLE IF NOT EXISTS users (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(50) NOT NULL UNIQUE,
    password VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL UNIQUE,
    enabled BOOLEAN DEFAULT TRUE
);

CREATE TABLE IF NOT EXISTS user_roles (
    user_id BIGINT NOT NULL,
    role_id BIGINT NOT NULL,
    PRIMARY KEY (user_id, role_id),
    FOREIGN KEY (user_id) REFERENCES users(id),
    FOREIGN KEY (role_id) REFERENCES roles(id)
);

INSERT INTO roles (name) VALUES ('ROLE_USER'), ('ROLE_ADMIN') ON DUPLICATE KEY UPDATE name=name;

-- Standard user: user/password (BCrypt encoded: $2a$10$0RUBzmzz9sOB8RknQmzTP.ZOj4QP4aotL0OmMprT5Tv/4jm7mlJ1C)
INSERT INTO users (username, password, email, enabled) 
VALUES ('user', '$2a$10$0RUBzmzz9sOB8RknQmzTP.ZOj4QP4aotL0OmMprT5Tv/4jm7mlJ1C', 'user@example.com', true)
ON DUPLICATE KEY UPDATE password=VALUES(password), email=VALUES(email), enabled=VALUES(enabled);

-- Admin user: admin/password (BCrypt encoded: $2a$10$0RUBzmzz9sOB8RknQmzTP.ZOj4QP4aotL0OmMprT5Tv/4jm7mlJ1C)
INSERT INTO users (username, password, email, enabled) 
VALUES ('admin', '$2a$10$0RUBzmzz9sOB8RknQmzTP.ZOj4QP4aotL0OmMprT5Tv/4jm7mlJ1C', 'admin@example.com', true)
ON DUPLICATE KEY UPDATE password=VALUES(password), email=VALUES(email), enabled=VALUES(enabled);

-- Robust user-role mapping using subqueries
INSERT INTO user_roles (user_id, role_id) 
SELECT (SELECT id FROM users WHERE username = 'user'), (SELECT id FROM roles WHERE name = 'ROLE_USER')
ON DUPLICATE KEY UPDATE user_id=user_id;

INSERT INTO user_roles (user_id, role_id) 
SELECT (SELECT id FROM users WHERE username = 'admin'), (SELECT id FROM roles WHERE name = 'ROLE_ADMIN')
ON DUPLICATE KEY UPDATE user_id=user_id;
