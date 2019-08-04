package com.rohit.chavan.spring.springboot2jpacrudexample.repo;

import org.springframework.data.jpa.repository.JpaRepository;

import com.rohit.chavan.spring.springboot2jpacrudexample.entity.Student;

public interface StudentRepo extends JpaRepository<Student, Long> {

}
