package com.himanshu.easystore.contact.service;

import com.himanshu.easystore.contact.domain.ContactDTO;

public interface IContactService {
    boolean saveContact(ContactDTO contactDTO);
}
