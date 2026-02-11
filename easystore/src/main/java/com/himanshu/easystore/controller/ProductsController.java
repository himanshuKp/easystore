package com.himanshu.easystore.controller;

import com.himanshu.easystore.dto.ProductDTO;
import com.himanshu.easystore.service.IProductService;
import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@AllArgsConstructor
@RestController
@RequestMapping("/api/v1/products")
public class ProductsController {

    private final IProductService productService;

    @GetMapping
    public List<ProductDTO> getProducts(){
        return productService.findAll();
    }
}
