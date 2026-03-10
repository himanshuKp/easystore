package com.himanshu.easystore.product.service;

import com.himanshu.easystore.product.domain.ProductDTO;

import java.util.List;

public interface IProductService {

    List<ProductDTO> findAll();
    
    ProductDTO createProduct(ProductDTO productDTO);
}
