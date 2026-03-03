package com.himanshu.easystore.exception;

import com.himanshu.easystore.dto.ErrorMessageDTO;
import jakarta.validation.ConstraintViolation;
import jakarta.validation.ConstraintViolationException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.FieldError;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;
import org.springframework.web.context.request.WebRequest;

import java.time.LocalDateTime;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Set;

@RestControllerAdvice
public class GlobalExceptionHandler {

    @ExceptionHandler(Exception.class)
    public ResponseEntity<ErrorMessageDTO> handleException(Exception exception, WebRequest webRequest) {
        ErrorMessageDTO errorMessageDTO = new ErrorMessageDTO(
                webRequest.getDescription(false),
                HttpStatus.INTERNAL_SERVER_ERROR,
                exception.getMessage(),
                LocalDateTime.now()
        );
        return new ResponseEntity<>(errorMessageDTO, HttpStatus.INTERNAL_SERVER_ERROR);
    }

    @ExceptionHandler(MethodArgumentNotValidException.class)
    public ResponseEntity<Map<String, String>> handleValidationsException(MethodArgumentNotValidException methodArgumentNotValidException) {
        Map<String, String> errors = new HashMap<>();
        List<FieldError> fieldErrors = methodArgumentNotValidException.getBindingResult().getFieldErrors();
        fieldErrors.forEach(fieldError -> errors.put(fieldError.getField(), fieldError.getDefaultMessage()));
        return new ResponseEntity<>(errors, HttpStatus.BAD_REQUEST);
    }

    @ExceptionHandler(ConstraintViolationException.class)
    public ResponseEntity<Map<String, String>> handleConstraintViolationException(ConstraintViolationException  constraintViolationException) {
        Map<String, String> errors = new HashMap<>();
        Set<ConstraintViolation<?>> constraintViolations = constraintViolationException.getConstraintViolations();
        constraintViolations.forEach(constraintViolation -> {
            errors.put(constraintViolation.getPropertyPath().toString(), constraintViolation.getMessage());
        });
        return new ResponseEntity<>(errors, HttpStatus.BAD_REQUEST);
    }
}
