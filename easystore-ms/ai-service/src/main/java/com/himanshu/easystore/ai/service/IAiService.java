package com.himanshu.easystore.ai.service;

public interface IAiService {
    /**
     * Sends a simple message to the AI and returns the response.
     * @param message The user's prompt.
     * @return The AI's response string.
     */
    String generateResponse(String message);
}
