package org.abacus.academy.service;
import java.util.Map;
import java.util.Optional;

import org.abacus.academy.dto.MessageService;
import org.abacus.academy.model.AuthModel;
import org.abacus.academy.repository.AuthRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class AuthService {


	@Autowired
	AuthRepo authRepo;
	
	@Autowired
	MessageService ms;
	
	public Map<String, Object> createUser(AuthModel authModel) {
		AuthModel am = authRepo.findByEmail(authModel.getEmail());
		if(am != null) {
			return ms.sendMessage(400, "duplicte email");
		}
		authRepo.save(authModel);
		return ms.sendMessage(200, "success");
	}
	
	public Map<String, Object> validateUser(AuthModel authModel) {
		AuthModel am = authRepo.findByEmail(authModel.getEmail());
		System.out.println("dasdasdasdadasdasd"+am);
		if(am != null) {	
			Map<String, Object> m = ms.sendMessage(200, "success");
			m.put("role", am.getRole());
			m.put("userId", am.getId());
			return m;
		}
		return  ms.sendMessage(400, "login Failed");
	}
}
