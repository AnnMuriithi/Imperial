package com.example.insuranceapp.service;

import com.example.insuranceapp.exception.UserNotFoundException;
import com.example.insuranceapp.model.Clients;
import com.example.insuranceapp.repo.ClientsRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.UUID;

@Service
public class ClientsService {
    @Autowired
    private  ClientsRepo clientsRepo;


    public Clients addClients( Clients clients){
        clients.setId(UUID.randomUUID().toString());
        return clientsRepo.save(clients);
    }
    public List<Clients> findAllClients(){
        return clientsRepo.findAll();
    }
    public Clients updateClients( Clients clients){
        return clientsRepo.save(clients);
    }
    public Clients findClientsById( Long idno){
        return clientsRepo.findClientsById(idno)
                .orElseThrow(()->new UserNotFoundException("User by idno" +idno + "was not found") );
    }
    public void deleteClientsById(Long idno){
        clientsRepo.deleteById(idno);
    }


}
