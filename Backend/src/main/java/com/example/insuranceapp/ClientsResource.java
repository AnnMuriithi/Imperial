package com.example.insuranceapp;


import com.example.insuranceapp.model.Clients;
import com.example.insuranceapp.service.ClientsService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping ("/clients")
public class ClientsResource {
    private final ClientsService clientsService;

    public ClientsResource(ClientsService clientsService) {
        this.clientsService = clientsService;
    }
@GetMapping("/all")
    public ResponseEntity<List<Clients>> getAllClients (){
        List<Clients> clients= clientsService.findAllClients();
        return new ResponseEntity<>(clients, HttpStatus.OK);
}

    @GetMapping("/find/{idno}")
    public ResponseEntity<Clients> getClientsById (@PathVariable("idno")Long idno ){
        Clients  clients= clientsService.findClientsById(idno);
        return new ResponseEntity<>(clients, HttpStatus.OK);
    }


    @PostMapping("/add")
    public ResponseEntity<Clients> addClients(@RequestBody Clients clients){
        Clients  newclients;
        newclients = clientsService.addClients(clients);
        return new ResponseEntity<>(newclients, HttpStatus.CREATED);
    }
    @PutMapping("/update")
    public ResponseEntity<Clients> updateClients(@RequestBody Clients clients){
        Clients  updateclients = clientsService.updateClients(clients);
        return new ResponseEntity<>(updateclients, HttpStatus.OK);
    }
    @DeleteMapping("/delete/{idno}")
    public ResponseEntity<Void> deleteClients(@PathVariable Long idno ){
         clientsService.deleteClientsById(idno);
        return new ResponseEntity<Void>( HttpStatus.NO_CONTENT);
    }
}

