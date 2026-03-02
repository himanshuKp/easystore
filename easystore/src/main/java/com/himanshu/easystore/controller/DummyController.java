package com.himanshu.easystore.controller;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@RestController
@RequestMapping("/api/v1")
public class DummyController {

    @GetMapping("/search")
    public String searchUser(@RequestParam(required = false, defaultValue = "John") String username) {
        return "Searching for user "+username;
    }

    @GetMapping("/headers")
    public ResponseEntity<String> requestHeader(@RequestHeader Map<String, String> headers) {
        return ResponseEntity.ok("Request header response: " + headers.toString());
    }
}
