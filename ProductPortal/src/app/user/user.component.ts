import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {HttpClient,HttpClientModule} from '@angular/common/http';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  result:any;
  id:any;
  constructor(private router:Router,private http:HttpClient) { }

  ngOnInit() {
    this.id=sessionStorage.getItem("key");
    this.http.get('https://localhost:44319/api/user/'+this.id).subscribe(t => {
            this.result = t;
        });
        
  }

delete(id:number )
{
this.http.delete('https://localhost:44319/api/user/'+id).subscribe(t => {
  this.result = t;
});
window.location.reload();

}

}
