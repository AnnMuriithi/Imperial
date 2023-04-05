package com.example.insuranceapp.model;

import jakarta.persistence.*;

@Entity
public class IssueProducts {
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Id
    @Column(nullable= false,updatable=false)
    private Long id;
    private String firstname;
    private String lastname;
    @Column(nullable= false,updatable=false)
    private Long idno;
    private String category;
    private String pname;
    private String start;
    private String end;
    private String amount;
    private String status;


    public IssueProducts() {
    }

    public IssueProducts(Long id, String firstname, String lastname, Long idno,
                         String category, String pname, String start, String end, String amount, String status) {
        this.id = id;
        this.firstname = firstname;
        this.lastname = lastname;
        this.idno = idno;
        this.category = category;
        this.pname = pname;
        this.start = start;
        this.end = end;
        this.amount = amount;
        this.status = status;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
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

    public String getCategory() {
        return category;
    }

    public void setCategory(String category) {
        this.category = category;
    }

    public String getPname() {
        return pname;
    }

    public void setPname(String pname) {
        this.pname = pname;
    }

    public String getStart() {
        return start;
    }

    public void setStart(String start) {
        this.start = start;
    }

    public String getEnd() {
        return end;
    }

    public void setEnd(String end) {
        this.end = end;
    }

    public String getAmount() {
        return amount;
    }

    public void setAmount(String amount) {
        this.amount = amount;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    @Override
    public String toString() {
        return "IssueProducts{" +
                "id=" + id +
                ", firstname='" + firstname + '\'' +
                ", lastname='" + lastname + '\'' +
                ", idno=" + idno +
                ", category='" + category + '\'' +
                ", pname='" + pname + '\'' +
                ", start='" + start + '\'' +
                ", end='" + end + '\'' +
                ", amount='" + amount + '\'' +
                ", status='" + status + '\'' +
                '}';
    }
}
