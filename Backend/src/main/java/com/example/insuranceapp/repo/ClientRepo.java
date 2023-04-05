package com.example.insuranceapp.repo;

import com.example.insuranceapp.model.Clients;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface ClientsRepo extends JpaRepository<Clients,Long> {
    void deleteClientsById(Long idno);
    Optional<Clients> findClientsById(Long idno);
}
