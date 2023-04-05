package com.example.insuranceapp;


import com.example.insuranceapp.model.IssueProducts;
import com.example.insuranceapp.model.Products;
import com.example.insuranceapp.service.IssueProductsService;
import com.example.insuranceapp.service.ProductsService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("issueproducts")
public class IssueProductsResource {
    private final IssueProductsService issueProductsService;

    public IssueProductsResource(IssueProductsService issueProductsService) {
        this.issueProductsService = issueProductsService;
    }
    @GetMapping("/all")
    public ResponseEntity<List<IssueProducts>> getAllIssuedProducts (){
        List<IssueProducts> issueProducts = issueProductsService.findAllIssuedProducts();
        return new ResponseEntity<>(issueProducts, HttpStatus.OK);
    }

    @GetMapping("/find/{id}")
    public ResponseEntity<IssueProducts> getIssuedProductById (@PathVariable("id")Long id ){
        IssueProducts issueProducts= issueProductsService.findIssuedProductById(id);
        return new ResponseEntity<>(issueProducts, HttpStatus.OK);
    }


    @PostMapping("/add")
    public ResponseEntity<IssueProducts> addIssuedProducts(@RequestBody IssueProducts issueProducts){
       IssueProducts  newissueProducts;
        newissueProducts = issueProductsService.addIssuedProducts(issueProducts);
        return new ResponseEntity<>(newissueProducts, HttpStatus.CREATED);
    }
    @PutMapping("/update")
    public ResponseEntity<IssueProducts> updateIssuedProducts(@RequestBody IssueProducts issueProducts){
       IssueProducts updateissuedproducts = issueProductsService.updateIssuedProducts(issueProducts);
        return new ResponseEntity<>(updateissuedproducts, HttpStatus.OK);
    }
    @DeleteMapping("/delete/{id}")
    public ResponseEntity<Void> deleteIssuedProducts(@PathVariable Long id ){
        issueProductsService.deleteIssuedProductById(id);
        return new ResponseEntity<Void>( HttpStatus.NO_CONTENT);
    }
}
