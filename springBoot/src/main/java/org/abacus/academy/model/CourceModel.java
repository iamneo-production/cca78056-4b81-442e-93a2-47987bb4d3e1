package org.abacus.academy.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.SequenceGenerator;
import javax.persistence.Table;

@Entity
@Table(name="cource")
public class CourceModel {
	@Id
	@SequenceGenerator(name="cource_seq_gen", sequenceName="cource_seq_gen", allocationSize=1)
	@GeneratedValue(strategy=GenerationType.SEQUENCE, generator="cource_seq_gen")
	private int courceId;
	
	private String imgUrl;
	
	private String name;
	
	private String instId;
	
	private String description;
	
	private String duration;

	public int getCourceId() {
		return courceId;
	}

	public void setCourceId(int courceId) {
		this.courceId = courceId;
	}

	public String getImgUrl() {
		return imgUrl;
	}

	public void setImgUrl(String imgUrl) {
		this.imgUrl = imgUrl;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getInst_id() {
		return instId;
	}

	public void setInst_id(String inst_id) {
		this.instId = inst_id;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public String getDuration() {
		return duration;
	}

	public void setDuration(String duration) {
		this.duration = duration;
	}
	
}
