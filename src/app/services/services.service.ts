import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Repository } from '../models/repository';
import { RepositoryByName } from '../models/repository-by-name';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  user: User;
  repos: Repository[]=[];
  reposByName: RepositoryByName[]=[];
  username:string;
  reponame:string;
  repositories=[]


  requestUserInfo(username){
    interface userApiResponse{
         name:string,
         login:string,
         bio: string,
         url: string,
         followers: number,
         following: number,
         public_repos: number,
         created_at: Date,
         avatar_url: string,
        
    }
   

let promise =new Promise ((resolve, reject)=>{
     this.http.get<userApiResponse>(`https://api.github.com/users/${username}?client_id=1179d43fb4eb61d15d6b3855fd52434a802d74e4`).toPromise().then(response =>{
            this.user.name = response.name 
            this.user.login= response.login           
            this.user.bio  = response.bio            
            this.user.followers=response.followers
            this.user.following =  response.following
            this.user.public_repos =  response.public_repos
            this.user.created_at =  response.created_at
            this.user.avatar_url =  response.avatar_url
            
            resolve()
        },
        error =>{
            this.user.login ="User not found"
            console.log("An error occured")
            reject(error)
        }
        )
    })

    return promise

   }
   
   constructor(private http: HttpClient, private route: ActivatedRoute ) {
    this.user = new User ("","","",0,0,0,new Date(),"")
   }

  
}
