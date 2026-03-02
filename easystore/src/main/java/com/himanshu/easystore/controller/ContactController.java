package com.himanshu.easystore.controller;

import com.himanshu.easystore.dto.ContactDTO;
import com.himanshu.easystore.service.IContactService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/v1/contacts")
public class ContactController {
    private final IContactService contactService;

    public ContactController(@Autowired IContactService contactService) {
        this.contactService = contactService;
    }

    @PostMapping
    public ResponseEntity<String> saveContact(@RequestBody ContactDTO contactDTO) {
        contactService.saveContact(contactDTO);
        return ResponseEntity.ok("Contact saved successfully");
    }
}
