package com.example.insuranceapp.exception;

public class IssuedProductNotFoundException extends RuntimeException{
    public IssuedProductNotFoundException(String message) {
        super(message);
    }
}
