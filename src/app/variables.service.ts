


export class LRVariableService {
    private registerUrl = "http://api.loginradius.com/raas/v1/user/register";
    private authenticateUrl = "http://api.loginradius.com/raas/v1/user";
    private forgotPassowrdUrl="http://api.loginradius.com/raas/v1/account/password/forgot";
    private resetPasswordUrl = "http://api.loginradius.com/raas/v1/account/password/reset";
    private userProfileUrl = "http://api.loginradius.com/api/v2/userprofile";
    private accessTokenUrl = "https://api.loginradius.com/api/v2/access_token";
    private appKey = "b72e36fa-93bb-4860-bbb6-94dc96ac8440";
    private appSecret = "9510b392-3105-491d-a907-bf12413a2364";


    getRegisterUrl(){
      return this.registerUrl;
    }
    getAccessTokenUrl(){
      return this.accessTokenUrl;
    }
    getAuthenticateUrl(){
      return this.authenticateUrl;
    }
    getuserProfileUrl(){
      return this.userProfileUrl;
    }

    getForgotPasswordUrl(){
      return this.forgotPassowrdUrl;
    }

    getResetPasswordUrl(){
      return this.resetPasswordUrl;
    }
    getAppKey(){
      return this.appKey;
    }

    getappSecret(){
      return this.appSecret;
    }



}
