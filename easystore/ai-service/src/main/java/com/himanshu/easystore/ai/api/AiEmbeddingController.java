package com.himanshu.easystore.ai.api;

import com.himanshu.easystore.ai.domain.ProductEmbeddingRequestDTO;
import com.himanshu.easystore.ai.service.ProductEmbeddingGenerator;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/v1/ai/embeddings")
@RequiredArgsConstructor
public class AiEmbeddingController {

    private final ProductEmbeddingGenerator embeddingGenerator;

    @PostMapping("/generate")
    public ResponseEntity<Void> generateProductEmbeddings(@RequestBody ProductEmbeddingRequestDTO request) {
        // Trigger async background generation
        embeddingGenerator.generateEmbeddings(request);
        return ResponseEntity.accepted().build();
    }
}
