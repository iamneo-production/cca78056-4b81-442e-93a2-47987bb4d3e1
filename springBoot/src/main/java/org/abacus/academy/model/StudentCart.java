package org.abacus.academy.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.SequenceGenerator;
import javax.persistence.Table;

@Entity
@Table(name = "student_cart")
public class StudentCart {
	
	@Id
	@SequenceGenerator(name="id_cart", sequenceName="id_cart", allocationSize=1)
	@GeneratedValue(strategy=GenerationType.SEQUENCE, generator="id_cart")
	private int id_cart;
	
	private String studentId;
	
	private String courseId;
	
	private String instituteId;

	public String getStudentId() {
		return studentId;
	}

	public void setStudentId(String studentId) {
		this.studentId = studentId;
	}

	public String getCourseId() {
		return courseId;
	}

	public void setCourseId(String courseId) {
		this.courseId = courseId;
	}

	public String getInstituteId() {
		return instituteId;
	}

	public void setInstituteId(String instituteId) {
		this.instituteId = instituteId;
	}

	@Override
	public String toString() {
		return "StudentCart [studentId=" + studentId + ", courseId=" + courseId + ", instituteId=" + instituteId + "]";
	}

	public int getId_cart() {
		return id_cart;
	}

	public void setId_cart(int id_cart) {
		this.id_cart = id_cart;
	}
	
	
	

}
