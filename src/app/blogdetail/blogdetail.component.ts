import { Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-blogdetail',
    templateUrl: './blogdetail.component.html',
    styleUrls: ['./blogdetail.component.css']
})
export class BlogdetailComponent implements OnInit {

    constructor(private router: Router ) {}

    ngOnInit() {
    }
    getPath(){
      return this.router.url;
    }
}
