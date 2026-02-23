package com.himanshu.easystore.service;

import com.himanshu.easystore.dto.ContactDTO;

public interface IContactService {
    boolean saveContact(ContactDTO contactDTO);
}
