package com.himanshu.easystore.ai.domain;

import lombok.Data;

@Data
public class ProductEmbeddingRequestDTO {
    private Long productId;
    private String name;
}
