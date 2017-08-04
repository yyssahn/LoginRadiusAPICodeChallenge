import { Component } from '@angular/core';
import { LRVariableService } from './variables.service';
import { Http, URLSearchParams } from '@angular/http';
import 'rxjs/add/operator/toPromise';


@Component({
  selector: 'lr-register',
  templateUrl: `./lr-register.component.html`,
})


export class LRRegisterComponent  {

  isPosted;
  constructor(private globals : LRVariableService,
    private http : Http ){}

  ngOnInit(){
  }


  onSubmit(value){
    console.log(value);
    let url = this.globals.getRegisterUrl();
    let params = new URLSearchParams();
    params.set('appkey',this.globals.getAppKey());
    params.set('appsecret', this.globals.getappSecret());
    let body = {'emailid':value.email, 'password': value.password, 'emailverificationurl':'http://localhost.com:3000/verification'};
    this.http.post(url, body, {search:params}).toPromise().then(response=>{
      if (response.json().isPosted){
        this.isPosted = true;
        console.log(this.isPosted);
      }
    });
  }
}
