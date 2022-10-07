package org.abacus.academy.service;


import java.util.List;
import java.util.Map;

import org.abacus.academy.dto.MessageService;
import org.abacus.academy.model.StudentCart;
import org.abacus.academy.repository.EnrolledCourseRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class StudentService {
	
	@Autowired
	EnrolledCourseRepo enrollerCourse;
	
	@Autowired
	MessageService response;
   
	public Map<String, Object> enrolledCourseService(StudentCart studentcart){
		 enrollerCourse.save(studentcart);
		 return response.sendMessage(200, "Success");
	}
	
	public List<StudentCart> enrolledCoursesService(String id){
		  return enrollerCourse.findAllByStudentId(id);
//		 return sc;
	} 
}
