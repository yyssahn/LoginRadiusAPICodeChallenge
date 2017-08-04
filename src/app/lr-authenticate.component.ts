import { Component } from '@angular/core';
import { LRVariableService } from './variables.service';
import { Http, URLSearchParams } from '@angular/http';
import { WindowRefService } from './windowRef.service';
import 'rxjs/add/operator/toPromise';


@Component({
  selector: 'lr-authenticate',
  templateUrl: `./lr-authenticate.component.html`,
})


export class LRAuthenticateComponent  {

  uid;
  id;
  constructor(private globals : LRVariableService,
  private http : Http     ) {
  }

  ngOnInit(){
  
  }


  onSubmit(value){
    console.log(value);
    let url = this.globals.getAuthenticateUrl();
    console.log(this.globals.getRegisterUrl());
    let params = new URLSearchParams();
    params.set('appkey',this.globals.getAppKey());
    params.set('appsecret', this.globals.getappSecret());
    params.set('username', value.email);
    params.set('password',value.password);
    this.http.get(url, {search : params}).toPromise().then(response=>{

        this.uid = response.json().Uid;
        this.id = response.json().ID;
        console.log(response.json());
        console.log(this.uid);
        console.log(this.id);


    }

    );


  }
}
