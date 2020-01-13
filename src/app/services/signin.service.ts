import { Injectable, Inject } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { LOCAL_STORAGE, StorageService } from 'ngx-webstorage-service';
import {User} from '../user';


@Injectable({
  providedIn: 'root'
})
export class SigninService {

constructor(private http: HttpClient , @Inject(LOCAL_STORAGE) private storage: StorageService) { }
// tslint:disable-next-line: max-line-length
signinUrl = 'https://carpoolingbackend.herokuapp.com/v1/apis/register/?apiKey=r9y7naiFAZ0E7EFsuV2GhG8K8Yg3NquVvEsaI&email=';
loginUrl = 'https://carpoolingbackend.herokuapp.com/v1/apis/auth/login/';

confirmUser(userInput: any) {
const email = userInput['email']
return this.http.get(this.signinUrl + email, userInput).subscribe((data) => {
console.log(data);
console.log('Successful');
localStorage.setItem('username', data[0]['username']);
});
}

getUserToken(userVerificationCode: any) {
const loginData = {
           // tslint:disable-next-line: object-literal-key-quotes
           'username': localStorage.getItem('username'),
// tslint:disable-next-line: object-literal-key-quotes
           'password': userVerificationCode
            }
return this.http.post(this.loginUrl, loginData).subscribe((data) => {
console.log(data);
console.log('Got user token');
});

}


}
