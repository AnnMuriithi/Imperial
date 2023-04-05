package com.example.insuranceapp;


import com.example.insuranceapp.model.Products;
import com.example.insuranceapp.service.ProductsService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
@RestController
@RequestMapping("products")
public class ProductsResource {

         private final ProductsService productsService;

        public ProductsResource(ProductsService productsService) {
            this.productsService = productsService;
        }
        @GetMapping("/all")
        public ResponseEntity<List<Products>> getAllProducts (){
            List<Products> products= productsService.findAllProducts();
            return new ResponseEntity<>(products, HttpStatus.OK);
        }

        @GetMapping("/find/{id}")
        public ResponseEntity<Products> getProductsById (@PathVariable("id")Long id ){
            Products products= productsService.findProductsById(id);
            return new ResponseEntity<>(products, HttpStatus.OK);
        }


        @PostMapping("/add")
        public ResponseEntity<Products> addProducts(@RequestBody Products products){
            Products  newproducts;
            newproducts = productsService.addProducts(products);
            return new ResponseEntity<>(newproducts, HttpStatus.CREATED);
        }
        @PutMapping("/update")
        public ResponseEntity<Products> updateProducts(@RequestBody Products products){
          Products updateproducts = productsService.updateProducts(products);
            return new ResponseEntity<>(updateproducts, HttpStatus.OK);
        }
        @DeleteMapping("/delete/{id}")
        public ResponseEntity<Void> deleteProducts(@PathVariable Long id ){
            productsService.deleteProductsById(id);
            return new ResponseEntity<Void>( HttpStatus.NO_CONTENT);
        }
}
