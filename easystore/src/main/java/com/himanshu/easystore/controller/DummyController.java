package com.himanshu.easystore.controller;

import jakarta.validation.constraints.Size;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@RestController
@RequestMapping("/api/v1")
@Validated
public class DummyController {

    @GetMapping("/search")
    public String searchUser(@Size(min=4, max=20) @RequestParam(required = false, defaultValue = "John") String username) {
        return "Searching for user "+username;
    }

    @GetMapping("/headers")
    public ResponseEntity<String> requestHeader(@RequestBody Map<String, String> headers) {
        return ResponseEntity.ok("Request header response: " + headers.toString());
    }
}
