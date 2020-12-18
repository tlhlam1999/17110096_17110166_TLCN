import { Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import {AllProductService} from "../allproducts/allproduct.service"
@Component({
    selector: 'app-allproducts',
    templateUrl: './allproducts.component.html',
    styleUrls: ['./allproducts.component.css']
})
export class AllproductsComponent implements OnInit {
  public Id3Code:string=''    
  public IdBrandPro:string=''    
  public IdSkinPro:string=''    
  public NameProduct:string=''  
  public DescriptionPro:string=''    
  public ImagePro:string='' 
  public PointPro: Float32Array
    constructor(private router: Router ,private service:AllProductService) {}

    ngOnInit() {
      this.getPath()
    }
    async getPath(){
      const product = await this.service.getProduct("456")
      console.log(product)
      this.Id3Code = product["iD3code"]
      this.IdBrandPro = product["idBrand"]
      this.IdSkinPro = product["idSkintype"]
      this.NameProduct = product["nameProduct"]  
      this.DescriptionPro = product["description"]
      this.ImagePro = product["image"]
      this.PointPro = product["pointProduct"]
      
    }
}
