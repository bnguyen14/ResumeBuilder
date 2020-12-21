package com.example.demo.entity;

import java.time.LocalDate;

public class ResumeSave {
	private int resumeID;
	private String resumeName;
	private java.time.LocalDate saveDate;
	
	public ResumeSave(int resumeID, String resumeName, LocalDate saveDate) {
		super();
		this.resumeID = resumeID;
		this.resumeName = resumeName;
		this.saveDate = saveDate;
	}
	public int getResumeID() {
		return resumeID;
	}
	public void setResumeID(int resumeID) {
		this.resumeID = resumeID;
	}
	public String getResumeName() {
		return resumeName;
	}
	public void setResumeName(String resumeName) {
		this.resumeName = resumeName;
	}
	public java.time.LocalDate getSaveDate() {
		return saveDate;
	}
	public void setSaveDate(java.time.LocalDate saveDate) {
		this.saveDate = saveDate;
	}
	@Override
	public String toString() {
		return "ResumeSave [resumeID=" + resumeID + ", resumeName=" + resumeName + ", saveDate=" + saveDate + "]";
	}
	
	
}
