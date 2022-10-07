package org.abacus.academy.repository;

import java.util.List;

import org.abacus.academy.model.StudentCart;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface EnrolledCourseRepo  extends JpaRepository<StudentCart, Integer>{

	List<StudentCart> findAllByStudentId(String id);
	
}
