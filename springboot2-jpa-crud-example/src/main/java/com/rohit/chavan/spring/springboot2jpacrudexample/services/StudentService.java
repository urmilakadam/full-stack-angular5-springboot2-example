package com.rohit.chavan.spring.springboot2jpacrudexample.services;

import java.util.List;

import com.rohit.chavan.spring.springboot2jpacrudexample.entity.Student;


public interface StudentService {
	List<Student> getAllData();

	Student getById(Long id);

	boolean addData(Student data);

	boolean editData(Student data);
	void deleteStudent(Long id);

}
