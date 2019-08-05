package com.rohit.chavan.spring.springboot2jpacrudexample.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.rohit.chavan.spring.springboot2jpacrudexample.entity.Student;
import com.rohit.chavan.spring.springboot2jpacrudexample.services.StudentService;
import com.rohit.chavan.spring.springboot2jpacrudexample.utilLayer.EmailUtil;
import com.rohit.chavan.spring.springboot2jpacrudexample.utilLayer.EmailUtilImpl;
@RestController
@RequestMapping("/api")
public class StudentControler {

	@Autowired
	private StudentService studentService;
	
	@Autowired
	private EmailUtil emailUtil;

	@GetMapping("/getData")
	public List<Student> getData() {
		return studentService.getAllData();
	}

	@GetMapping("/getById")
	public Student getById(@RequestParam("id") Long id) {
		return studentService.getById(id);
	}

	@PostMapping("/addStudents")
	public boolean addData(@RequestBody Student data) {
		
		String body=String.format("New Record Added into Student Database with  name=%S in %S Department ", data.getName(),data.getDept());
		emailUtil.sendMail("xyzspringtestapplication@gmail.com", "Record Added", body);
		return studentService.addData(data);
	}
	
	@DeleteMapping("/api/deleteStudent")
	public boolean deleteStudent(@RequestParam("id") Long id) {
		studentService.deleteStudent(id);
		return true;
	}
}
