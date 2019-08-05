package com.rohit.chavan.spring.springboot2jpacrudexample.utilLayer;

public interface EmailUtil {

	void sendMail(String toAddress,String subject,String body);
}
