package org.abacus.academy.service;

import java.util.List;
import java.util.Map;

import org.abacus.academy.dto.MessageService;
import org.abacus.academy.model.CourceModel;
import org.abacus.academy.model.InstituteModel;
import org.abacus.academy.repository.CourceRepo;
import org.abacus.academy.repository.InstituteRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.client.HttpClientErrorException.NotFound;

@Service
public class AdminService {
	@Autowired
	InstituteRepo instituteRepo;
	
	@Autowired
	CourceRepo courceRepo;
	
	@Autowired
	MessageService ms;
	
	public Map<String, Object> addInstitute(InstituteModel im) {
		if(instituteRepo.findByName(im.getName()).isEmpty()){
			instituteRepo.save(im);
			return ms.sendMessage(200,"success");
		}
		return ms.sendMessage(400,"duplicate entry");
	}
	
	public List<InstituteModel> viewInstitute() {
		return instituteRepo.findAll();
	}
	
	public Map<String, Object> addCource(CourceModel cm) {
		courceRepo.save(cm);
		return ms.sendMessage(200,"success");
	}
	
	public List<CourceModel> getCources(String id) {
		return courceRepo.findAllByInstId(id);
	}
	
	public Map<String, Object> deleteInstitute(int id) throws NotFound{
		if(instituteRepo.findById(id).isPresent()) {
			instituteRepo.deleteById(id);
			return ms.sendMessage(200, "Success");
		}
		else {
			return ms.sendMessage(400, "Failed");
		}
	}
	
	public Map<String, Object> deleteStudent(String id){
		
		return null;
	}
	
	public Map<String, Object> deleteCource(int id){
		if(courceRepo.findById(id).isPresent()) {
			courceRepo.deleteById(id);
			return ms.sendMessage(200, "Success");
		}
		else {
			return ms.sendMessage(400, "Failed");
		}
	}
}
