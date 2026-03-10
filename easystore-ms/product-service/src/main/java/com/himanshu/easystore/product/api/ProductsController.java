package com.himanshu.easystore.product.api;

import com.himanshu.easystore.product.domain.ProductDTO;
import com.himanshu.easystore.product.service.IProductService;
import lombok.AllArgsConstructor;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RequiredArgsConstructor
@RestController
@RequestMapping("/api/v1/products")
public class ProductsController {

    private final IProductService productService;

    @GetMapping
    public ResponseEntity<List<ProductDTO>> getProducts(){
        List<ProductDTO> productDTOList = productService.findAll();
        return ResponseEntity.ok(productDTOList);
    }
}
