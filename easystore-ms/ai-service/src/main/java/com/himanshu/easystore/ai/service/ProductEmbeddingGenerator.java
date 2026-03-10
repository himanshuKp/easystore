package com.himanshu.easystore.ai.service;

import com.himanshu.easystore.ai.domain.ProductEmbeddingRequestDTO;
import lombok.extern.slf4j.Slf4j;
import org.springframework.scheduling.annotation.Async;
import org.springframework.stereotype.Service;

@Service
@Slf4j
public class ProductEmbeddingGenerator {

    @Async
    public void generateEmbeddings(ProductEmbeddingRequestDTO request) {
        log.info("Received request for Product ID: {}. Triggering AI Embedding Generation...", request.getProductId());
        
        // In a real application, you would call your IAiService or VectorStore here to 
        // generate text embeddings for semantic search and persist them.
        try {
            // Mock delay for AI processing
            Thread.sleep(1000);
            log.info("Successfully generated and stored embeddings for Product: {}", request.getName());
        } catch (InterruptedException e) {
            Thread.currentThread().interrupt();
            log.error("Embedding generation interrupted", e);
        }
    }
}
