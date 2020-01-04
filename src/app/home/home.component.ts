import { Component, OnInit } from '@angular/core';
import {ApiService} from '../api.service'


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  users ; 
  constructor(private apiservice: ApiService){}
  ngOnInit(){
    this.apiservice.getUsers().subscribe(res =>{
      this.users =res;
    }, err =>{
      console.log(err)
    })
  }
}
