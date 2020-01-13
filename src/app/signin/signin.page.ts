import { Component, OnInit } from '@angular/core';
import { User} from '../user';
import { SigninService } from '../services/signin.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.page.html',
  styleUrls: ['./signin.page.scss'],
})
export class SigninPage implements OnInit {
userInput = {} as User;
constructor(private signinService: SigninService, public router: Router) {}

getUser = () => {
console.log(this.userInput);
this.signinService.confirmUser(this.userInput);
this.router.navigate(['confirm']);
}

  ngOnInit() {
  }


}
