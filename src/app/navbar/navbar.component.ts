import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  encapsulation:ViewEncapsulation.None
})
export class NavbarComponent implements OnInit {

  constructor() { }
  arr=[]
  isNav:boolean = false;
  ngOnInit(): void {
  }

  nav(data){
    this.arr.push(data)
    if(this.arr.length % 2 != 0){
      this.isNav = true;
    }else{
      this.isNav = false;
    }
  }

}
