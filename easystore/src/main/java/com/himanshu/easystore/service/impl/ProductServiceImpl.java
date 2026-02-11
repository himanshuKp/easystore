package com.himanshu.easystore.service.impl;

import com.himanshu.easystore.dto.ProductDTO;
import com.himanshu.easystore.entity.Product;
import com.himanshu.easystore.repository.ProductRepository;
import com.himanshu.easystore.service.IProductService;
import lombok.AllArgsConstructor;
import org.springframework.beans.BeanUtils;
import org.springframework.stereotype.Service;

import java.util.List;

@AllArgsConstructor
@Service
public class ProductServiceImpl implements IProductService {

    private final ProductRepository productRepository;

    @Override
    public List<ProductDTO> findAll() {
        return productRepository.findAll().stream().map(this::transformProductDTO).toList();
    }

    private ProductDTO transformProductDTO(Product product) {
        ProductDTO productDTO = new ProductDTO();
        BeanUtils.copyProperties(product, productDTO);
        productDTO.setProductId(product.getId());
        return productDTO;
    }
}
