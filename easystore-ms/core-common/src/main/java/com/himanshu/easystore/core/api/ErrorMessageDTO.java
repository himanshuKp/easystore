package com.himanshu.easystore.core.api;

import lombok.AllArgsConstructor;
import lombok.Data;
import org.springframework.http.HttpStatus;

import java.time.LocalDateTime;

@Data
@AllArgsConstructor
public class ErrorMessageDTO {

    public String apiPath;
    public HttpStatus errorCode;
    public String errorMessage;
    public LocalDateTime localDateTime;
}
