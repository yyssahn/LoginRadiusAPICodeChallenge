import { Component } from '@angular/core';
import { LRVariableService } from './variables.service';
import { Http, URLSearchParams } from '@angular/http';
import { WindowRefService } from './windowRef.service';
import 'rxjs/add/operator/toPromise';


@Component({
  selector: 'lr-login',
  templateUrl: `./lr-login.component.html`,
})


export class LRLoginComponent  {

  lrs;
  _window;
  accessToken;
  expires;
  constructor(private globals : LRVariableService,
  private http : Http ,
  windowRef: WindowRefService) {
        this._window = windowRef.nativeWindow;
  }

  ngOnInit(){
    console.log(this._window);
    this.lrs = this._window.LoginRadiusRaaS;
    this.lrs.api.init(this._window.option);
  }

  onSubmit(value){
    let comp = this;
    this.lrs.api.login({
          emailid: value.email,
          password: value.password
      }, function(response) {
          comp.accessToken = response.access_token;
          comp.expires = response.expires_in;
        console.log(response);
        alert("Log in Successful!");
      }, function(errors) {
          console.log(errors);
          alert("Log in Failed");
      })
  }
}
