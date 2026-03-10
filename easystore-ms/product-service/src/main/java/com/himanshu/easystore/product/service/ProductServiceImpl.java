package com.himanshu.easystore.product.service;

import com.himanshu.easystore.product.domain.ProductDTO;
import com.himanshu.easystore.product.domain.Product;
import com.himanshu.easystore.product.repository.ProductRepository;
import com.himanshu.easystore.product.service.IProductService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.BeanUtils;
import org.springframework.web.client.RestTemplate;
import org.springframework.stereotype.Service;

import java.util.List;

@RequiredArgsConstructor
@Service
public class ProductServiceImpl implements IProductService {

    private final ProductRepository productRepository;
    private final RestTemplate restTemplate;

    @Override
    public List<ProductDTO> findAll() {
        return productRepository.findAll().stream().map(this::transformProductDTO).toList();
    }

    @Override
    public ProductDTO createProduct(ProductDTO productDTO) {
        Product product = new Product();
        BeanUtils.copyProperties(productDTO, product);
        
        // Let DB Generate ID, etc. Since it's a mock method just saving it:
        Product savedProduct = productRepository.save(product);
        
        ProductDTO savedDto = transformProductDTO(savedProduct);
        
        // Async REST call to AI Service via Eureka Load Balancer
        try {
            restTemplate.postForLocation("http://ai-service/api/v1/ai/embeddings/generate", savedDto);
        } catch (Exception e) {
            // Log and ignore to not block the main product creation flow
            System.err.println("Failed to trigger AI embedding generation: " + e.getMessage());
        }
        
        return savedDto;
    }

    private ProductDTO transformProductDTO(Product product) {
        ProductDTO productDTO = new ProductDTO();
        BeanUtils.copyProperties(product, productDTO);
        productDTO.setProductId(product.getId());
        return productDTO;
    }
}
