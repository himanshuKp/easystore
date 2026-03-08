package com.himanshu.easystore.ai.service;

import org.springframework.ai.chat.client.ChatClient;
import org.springframework.boot.autoconfigure.condition.ConditionalOnProperty;
import org.springframework.stereotype.Service;

@Service
@ConditionalOnProperty(name = "ai.provider", havingValue = "ollama", matchIfMissing = true)
public class OllamaAiService implements IAiService {

    private final ChatClient chatClient;

    public OllamaAiService(ChatClient.Builder chatClientBuilder) {
        this.chatClient = chatClientBuilder.build();
    }

    @Override
    public String generateResponse(String message) {
        return chatClient.prompt()
                .user(message)
                .call()
                .content();
    }
}
