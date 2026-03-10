package com.himanshu.easystore.ai.api;

import com.himanshu.easystore.ai.service.IAiService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/v1/ai")
@RequiredArgsConstructor
public class AiChatController {

    private final IAiService aiService;

    @GetMapping("/chat")
    public ResponseEntity<String> chat(@RequestParam String message) {
        String response = aiService.generateResponse(message);
        return ResponseEntity.ok(response);
    }
}
