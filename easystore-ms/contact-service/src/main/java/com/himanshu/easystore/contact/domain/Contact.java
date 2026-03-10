package com.himanshu.easystore.contact.domain;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;
import com.himanshu.easystore.core.domain.BasicEntity;

@Getter
@Setter
@Entity
@Table(name = "contacts")
public class Contact extends BasicEntity{
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "contact_id", nullable = false)
    private Long id;

    @Column(name = "name", nullable = false, length = 100)
    private String name;

    @Column(name = "email", nullable = false, length = 100)
    private String email;

    @Column(name = "mobile_number", nullable = false, length = 15)
    private String mobileNumber;

    @Column(name = "message", nullable = false, length = 500)
    private String message;
}