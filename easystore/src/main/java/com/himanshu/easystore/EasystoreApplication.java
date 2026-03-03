package com.himanshu.easystore;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.jpa.repository.config.EnableJpaAuditing;

@SpringBootApplication
@EnableJpaAuditing(auditorAwareRef = "auditorAwareImpl")
public class EasystoreApplication {

    static void main(String[] args) {
        SpringApplication.run(EasystoreApplication.class, args);
    }

}
