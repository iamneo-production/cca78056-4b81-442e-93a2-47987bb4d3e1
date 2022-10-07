package org.abacus.academy.repository;

import java.util.List;

import org.abacus.academy.model.CourceModel;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CourceRepo extends JpaRepository<CourceModel, Integer>{
	public List<CourceModel> findAllByInstId(String inst_id);
}
