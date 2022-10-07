package org.abacus.academy.repository;

import java.util.List;

import org.abacus.academy.model.InstituteModel;
import org.springframework.data.jpa.repository.JpaRepository;

public interface InstituteRepo extends JpaRepository<InstituteModel, Integer>{
	public List<InstituteModel> findByName(String name);
}
