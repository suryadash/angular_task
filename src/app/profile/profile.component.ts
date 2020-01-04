import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

import {ApiService} from '../api.service'

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(private apiservice : ApiService, private route : ActivatedRoute ) { }
  public username='';
  repos
  ngOnInit() {
   var id = this.route.snapshot.params.id;
   this.username = id;
    console.log(id);
  this.apiservice.getRepos(id).subscribe(res=>{
    this.repos = res;
    console.log(this.repos)
  },err =>{
    console.log(err)
  })
  }

}
