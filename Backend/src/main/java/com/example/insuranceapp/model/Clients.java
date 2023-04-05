package com.example.insuranceapp.model;

import jakarta.persistence.*;

import java.io.Serializable;
@Entity
public class Clients implements Serializable {
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(nullable= false,updatable=false)
    private String id;
    private String firstname;
    private String lastname;
    @Id
    @Column(nullable= false,updatable=false)
    private Long idno;
    private String dob;
    private String gender;
    private String phonenumber;
    private String email;
    private String fname;
    private String lname;
    private  String phone;
    private String relation;
    private String fname1;
    private String lname1;
    private  String phone1;
    private String relation1;

    public Clients() {
    }

    public Clients(String id, String firstname, String lastname, Long idno, String dob, String gender, String phonenumber, String email,
                   String fname,
                   String lname, String phone, String relation, String fname1, String lname1, String phone1, String relation1) {
        this.id = id;
        this.firstname = firstname;
        this.lastname = lastname;
        this.idno = idno;
        this.dob = dob;
        this.gender = gender;
        this.phonenumber = phonenumber;
        this.email = email;
        this.fname = fname;
        this.lname = lname;
        this.phone = phone;
        this.relation = relation;
        this.fname1 = fname1;
        this.lname1 = lname1;
        this.phone1 = phone1;
        this.relation1 = relation1;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getFirstname() {
        return firstname;
    }

    public void setFirstname(String firstname) {
        this.firstname = firstname;
    }

    public String getLastname() {
        return lastname;
    }

    public void setLastname(String lastname) {
        this.lastname = lastname;
    }

    public Long getIdno() {
        return idno;
    }

    public void setIdno(Long idno) {
        this.idno = idno;
    }

    public String getDob() {
        return dob;
    }

    public void setDob(String dob) {
        this.dob = dob;
    }

    public String getGender() {
        return gender;
    }

    public void setGender(String gender) {
        this.gender = gender;
    }

    public String getPhonenumber() {
        return phonenumber;
    }

    public void setPhonenumber(String phonenumber) {
        this.phonenumber = phonenumber;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getFname() {
        return fname;
    }

    public void setFname(String fname) {
        this.fname = fname;
    }

    public String getLname() {
        return lname;
    }

    public void setLname(String lname) {
        this.lname = lname;
    }

    public String getPhone() {
        return phone;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }

    public String getRelation() {
        return relation;
    }

    public void setRelation(String relation) {
        this.relation = relation;
    }

    public String getFname1() {
        return fname1;
    }

    public void setFname1(String fname1) {
        this.fname1 = fname1;
    }

    public String getLname1() {
        return lname1;
    }

    public void setLname1(String lname1) {
        this.lname1 = lname1;
    }

    public String getPhone1() {
        return phone1;
    }

    public void setPhone1(String phone1) {
        this.phone1 = phone1;
    }

    public String getRelation1() {
        return relation1;
    }

    public void setRelation1(String relation1) {
        this.relation1 = relation1;
    }

    @Override
    public String toString() {
        return "Clients{" +
                "id=" + id +
                ", firstname='" + firstname + '\'' +
                ", lastname='" + lastname + '\'' +
                ", idno=" + idno +
                ", dob='" + dob + '\'' +
                ", gender='" + gender + '\'' +
                ", phonenumber='" + phonenumber + '\'' +
                ", email='" + email + '\'' +
                ", fname='" + fname + '\'' +
                ", lname='" + lname + '\'' +
                ", phone='" + phone + '\'' +
                ", relation='" + relation + '\'' +
                ", fname1='" + fname1 + '\'' +
                ", lname1='" + lname1 + '\'' +
                ", phone1='" + phone1 + '\'' +
                ", relation1='" + relation1 + '\'' +
                '}';
    }
}




