package com.rohit.chavan.spring.springboot2jpacrudexample.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.rohit.chavan.spring.springboot2jpacrudexample.entity.Student;
import com.rohit.chavan.spring.springboot2jpacrudexample.repo.StudentRepo;
@Service
public class StudentImpl implements StudentService {

	@Autowired
	private StudentRepo studentRepo;

	@Override
	public List<Student> getAllData() {

		List<Student> findAll = studentRepo.findAll();
		if (findAll.isEmpty())
			return null;
		else
			return findAll;
	}

	@Override
	public Student getById(Long id) {
		
		Optional<Student> findById = studentRepo.findById(id);
		if(findById.isPresent()) {
			return findById.get();
		}
		return null;
		
	}

	@Override
	public boolean addData(Student data) {
		// TODO Auto-generated method stub
		
		
		Student save = studentRepo.save(data);
		
		if(save != null)
			return true;
		else
			return false;
	}

	@Override
	public boolean editData(Student data) {
		
		Student student = studentRepo.save(data);
		
		if(student != null)
			return true;
		else
			return false;
	}

	@Override
	public void deleteStudent(Long id) {
		
		studentRepo.deleteById(id);
		
	}
	
	
	public void deptViseInfo(String dept) {
		
		List<Student> list = studentRepo.findAll();
		list.stream().filter(entity->entity.getDept().equalsIgnoreCase(dept))
			.findAny().isPresent(
					//this.sendMailDeptViseInfo(dept);
					);
	}
}
