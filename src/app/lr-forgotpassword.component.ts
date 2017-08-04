import { Component } from '@angular/core';
import { LRVariableService } from './variables.service';
import { Http, URLSearchParams } from '@angular/http';
import 'rxjs/add/operator/toPromise';


@Component({
  selector: 'lr-forgotpassword',
  templateUrl: `./lr-forgotpassword.component.html`,
})


export class LRForgotPasswordComponent  {

  guid="";
  isPosted;
  constructor(private globals : LRVariableService,
  private http : Http ){}

  ngOnInit(){
  }


  onSubmit(value){
    console.log(value);
    let url = this.globals.getForgotPasswordUrl();
    let params = new URLSearchParams();
    params.set('appkey',this.globals.getAppKey());
    params.set('appsecret', this.globals.getappSecret());
    params.set('email', value.email);
    this.http.get(url,{search:params}).toPromise().then(response=>{
        this.guid = response.json().Guid;
        console.log(response.json());
        console.log(this.guid);
        });


  }


  onSubmitResetPassword(value){
    let url = this.globals.getResetPasswordUrl();
    let params = new URLSearchParams();
    params.set('appkey',this.globals.getAppKey());
    params.set('appsecret', this.globals.getappSecret());
    params.set('vtoken', this.guid);
    params.set('welcomeEmailTemplate', "default");
    console.log(value);
    let body = {"password":value.password};
    console.log(body);
    this.http.post(url,body,{search:params}).toPromise().then(response=>{
        console.log(response.json());
        this.isPosted = response.json().isPosted;

    }

    );

  }
}
