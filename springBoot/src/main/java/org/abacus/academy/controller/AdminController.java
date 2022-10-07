package org.abacus.academy.controller;

import java.util.List;
import java.util.Map;

import org.abacus.academy.model.CourceModel;
import org.abacus.academy.model.InstituteModel;
import org.abacus.academy.service.AdminService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.HttpClientErrorException.NotFound;

@CrossOrigin("*")
@RestController
public class AdminController {
	@Autowired
	AdminService adminService;
	
	@PostMapping("/admin/addinstitute")
	Map<String, Object> addInstitute(@RequestBody InstituteModel im) {
		return adminService.addInstitute(im);
	}
	
	@GetMapping("/admin/institute")
	List<InstituteModel> viewInstitute() {
		return adminService.viewInstitute();
	}

	@PostMapping("/admin/addcourse")
	Map<String, Object> addInstitute(@RequestBody CourceModel im) {
		return adminService.addCource(im);
	}
	
	@GetMapping("/admin/course/{instId}")
	List<CourceModel> getCources(@PathVariable String instId) {
		return adminService.getCources(instId);
	}
	
	@DeleteMapping("/admin/deleteInstitute")
	Map<String, Object> deleteInstitute(@RequestParam int instID) throws NotFound {
		return adminService.deleteInstitute(instID);
	}
	
	@DeleteMapping("/admin/deleteStudent")
	Map<String, Object> deleteStudent(@RequestParam String studentId) throws NotFound {
		return adminService.deleteStudent(studentId);
	}
	
	@DeleteMapping("/admin/deleteCourse")
	Map<String, Object> deleteCource(@RequestParam int courseId) throws NotFound {
		return adminService.deleteCource(courseId);
	}
	
	
}
