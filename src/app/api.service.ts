import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable()
export class ApiService{
    constructor(private http:HttpClient){}
    users_path = 'https://api.github.com/users?since=135';
    user_repo = 'https://api.github.com/users/'
    getUsers(){
        return this.http.get(this.users_path)
    }
    getRepos(id){
        return this.http.get(this.user_repo +id + "/repos")
    }
}