package com.himanshu.easystore.controller;

import com.himanshu.easystore.dto.ContactDTO;
import com.himanshu.easystore.service.IContactService;
import org.springframework.beans.factory.annotation.Autowired;
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
    public String saveContact(@RequestBody ContactDTO contactDTO) {
        boolean isSaved = contactService.saveContact(contactDTO);
        if (isSaved) {
            return "Request processed successfully";
        } else  {
            return "Failed to save contact. Please try again.";
        }
    }
}
