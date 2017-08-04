import { Component } from '@angular/core';
import { LRVariableService } from './variables.service';
import { Http, URLSearchParams } from '@angular/http';
import { WindowRefService } from './windowRef.service';
import {Router, ActivatedRoute, Params} from '@angular/router';

import 'rxjs/add/operator/toPromise';


@Component({
  selector: 'lr-social',
  templateUrl: `./lr-social.component.html`,
})


export class LRSocialComponent  {

  uid;
  id;
  lrs;
  _window;
  accessToken;
  expires;
  constructor(private globals : LRVariableService,
  private http : Http ,
  private activatedRoute: ActivatedRoute,
  windowRef: WindowRefService
    ) {
        this._window = windowRef.nativeWindow;
  }

  ngOnInit(){
    console.log(this._window);
    this.lrs = this._window.LoginRadiusRaaS;
    this.lrs.api.init(this._window.option);
    let url = this.globals.getAccessTokenUrl();
    let parameters = new URLSearchParams();

    this._window.loginradius_interface();
    this.activatedRoute.queryParams.subscribe((params: Params) => {

        if (params["lr-token"]!==undefined){
            console.log("hey");
            parameters.set('token',params["lr-token"]);
            parameters.set('secret', this.globals.getappSecret());
            this.http.get(url,{search:parameters}).toPromise().then(response=>{
              let parameter = new URLSearchParams();
              console.log(response);
              parameter.set('access_token',response.json().access_token);
              url = this.globals.getuserProfileUrl();
              this.http.get(url,{search:parameter}).toPromise().then(result=>console.log(result.json()));


            });
        }


        });



  }




  onSubmit(value){
    let comp = this;
    this.lrs.api.login({
          emailid: value.email,
          password: value.password
      }, function(response) {
      // On Success this callback will call
      // response will be { access_token :"<token>", expires_in :"<date and time>" }
      // you can use token response.access_token and get user profile using your
      // LoginRadius SDK.
          comp.accessToken = response.access_token;
          comp.expires = response.expires_in;
        console.log(response);


      }, function(errors) {
      // on failure this function will call ‘errors’ which is an array of errors with message.
      // every kind of error will be returned in this method
      // you can run a loop on this array to identify the description and other aspect of error.
          console.log(errors);
      })

  }
}
