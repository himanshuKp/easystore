package com.himanshu.easystore.service;

import com.himanshu.easystore.dto.ProductDTO;

import java.util.List;

public interface IProductService {

    List<ProductDTO> findAll();
}
