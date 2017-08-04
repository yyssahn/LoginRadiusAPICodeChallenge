import { Component } from '@angular/core';
import { LRVariableService } from './variables.service';
import { Http, URLSearchParams } from '@angular/http';
import {Router, ActivatedRoute, Params} from '@angular/router';
import { WindowRefService } from './windowRef.service';


import 'rxjs/add/operator/toPromise';
declare var $LR :any;
@Component({
  selector: 'lr-verification',
  templateUrl: `./lr-verification.component.html`,
})


export class LRVerificationComponent  {
  _window;
  lrs;
  parameters;
    constructor(private activatedRoute: ActivatedRoute, windowRef: WindowRefService
      ) {
          this._window = windowRef.nativeWindow;
    }


    ngOnInit(){
      this.activatedRoute.queryParams.subscribe((params: Params) => {

      let component = this;
      this.lrs = this._window.LoginRadiusRaaS;
      this.lrs.api.init(this._window.option);
      this.lrs.api.emailVerification({
          vtoken: params["vtoken"]
      },
      function(response) {
          console.log(response);
          alert ("verification complete!");
      },
      function(errors) {
          console.log(errors);
      });
      });
    }
}
