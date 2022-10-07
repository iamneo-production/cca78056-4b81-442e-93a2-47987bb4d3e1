package org.abacus.academy.repository;

import org.springframework.stereotype.Repository;

import java.util.List;

import org.abacus.academy.model.AuthModel;
import org.springframework.data.jpa.repository.JpaRepository;

@Repository
public interface AuthRepo extends JpaRepository<AuthModel, Integer>{
	public AuthModel findByEmail(String email);
}
