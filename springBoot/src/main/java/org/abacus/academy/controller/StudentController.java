package org.abacus.academy.controller;
import java.util.List;
import java.util.Map;

import org.abacus.academy.model.CourceModel;
import org.abacus.academy.model.InstituteModel;
import org.abacus.academy.model.StudentCart;
import org.abacus.academy.service.AdminService;
import org.abacus.academy.service.StudentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin("*")
@RestController
public class StudentController {
	@Autowired
	AdminService adminService;
	@Autowired
	StudentService studentService;
	
	@GetMapping("/student/institute")
	List<InstituteModel> viewInstitute() {
		return adminService.viewInstitute();
	}
	
	@GetMapping("/student/course/{instId}")
	List<CourceModel> getCources(@PathVariable String instId) {
		return adminService.getCources(instId);
	}
	@PostMapping("/student/enroll")
	Map<String, Object> enrolledCourse(@RequestBody StudentCart studentcart){
		return studentService.enrolledCourseService(studentcart);
	}
	
	@GetMapping("/student/enroll/{id}")
	List<StudentCart> enrolledCourses(@PathVariable String id){
		return studentService.enrolledCoursesService(id);
	}
	
}
