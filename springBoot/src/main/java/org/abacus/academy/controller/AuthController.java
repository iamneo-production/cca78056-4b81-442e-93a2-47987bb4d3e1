package org.abacus.academy.controller;

import java.util.Map;

import org.abacus.academy.model.AuthModel;
import org.abacus.academy.service.AuthService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin("*")
@RestController
public class AuthController {
	
	@Autowired
	AuthService authService;
	
	@PostMapping("/user/signup")
	Map<String, Object> createUser(@RequestBody AuthModel authModel) {
		return authService.createUser(authModel);
	}
	
	@PostMapping("/user/login")
	Map<String, Object> validateUser(@RequestBody AuthModel authModel) {
		return authService.validateUser(authModel);
	}
	
}
