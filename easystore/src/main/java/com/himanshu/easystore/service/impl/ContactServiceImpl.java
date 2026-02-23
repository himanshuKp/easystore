package com.himanshu.easystore.service.impl;

import com.himanshu.easystore.dto.ContactDTO;
import com.himanshu.easystore.entity.Contact;
import com.himanshu.easystore.repository.ContactRepository;
import com.himanshu.easystore.service.IContactService;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.Instant;

@Service
public class ContactServiceImpl implements IContactService {

    private ContactRepository contactRepository;

    @Autowired
    public void setContactRepository(ContactRepository contactRepository) {
        this.contactRepository = contactRepository;
    }

    @Override
    public boolean saveContact(ContactDTO contactDTO) {
        try {
            Contact contact = mapDTOToContact(contactDTO);
            contact.setCreatedAt(Instant.now());
            contact.setCreatedBy(contactDTO.getName());
            contactRepository.save(contact);
            return true;
        }  catch (Exception e) {
            return false;
        }
    }

    private Contact mapDTOToContact(ContactDTO contactDTO) {
        Contact contact = new Contact();
        BeanUtils.copyProperties(contactDTO, contact);
        return contact;
    }
}
