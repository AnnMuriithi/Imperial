package com.example.insuranceapp.model;

import jakarta.persistence.*;

import java.io.Serializable;

@Entity
public class Products implements Serializable {
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Id
    @Column(nullable= false,updatable=false)
    private Long id;
    private String category;
    private String pname;
    private String amount;
    private String duration;


    public Products() {
    }

    public Products(Long id, String category, String pname, String amount, String duration) {
        this.id = id;
        this.category = category;
        this.pname = pname;
        this.amount = amount;
        this.duration = duration;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
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

    public String getAmount() {
        return amount;
    }

    public void setAmount(String amount) {
        this.amount = amount;
    }

    public String getDuration() {
        return duration;
    }

    public void setDuration(String duration) {
        this.duration = duration;
    }

    @Override
    public String toString() {
        return "Products{" +
                "id=" + id +
                ", category='" + category + '\'' +
                ", pname='" + pname + '\'' +
                ", amount='" + amount + '\'' +
                ", duration='" + duration + '\'' +
                '}';
    }
}
