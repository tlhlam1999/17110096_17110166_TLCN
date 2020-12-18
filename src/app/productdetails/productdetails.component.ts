import { Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import {ProductdetailsService} from "../productdetails/productdetails.service"
import {Dataset} from "../admin/dataset"
@Component({
    selector: 'app-productdetails',
    templateUrl: './productdetails.component.html',
    styleUrls: ['./productdetails.component.css']
})
export class ProductDetailsComponent implements OnInit {
  public Id3Code:string=''    
  public IdBrandPro:string=''    
  public IdSkinPro:string=''    
  public NameProduct:string=''  
  public DescriptionPro:string=''    
  public ImagePro:string='' 
  public PointPro: Float32Array
  
    constructor(private router: Router,private service:ProductdetailsService ) {}

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