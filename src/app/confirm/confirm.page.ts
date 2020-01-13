import { Component, OnInit } from '@angular/core';
import { SigninService } from 'app/services/signin.service';
import { Password } from '../password';

@Component({
  selector: 'app-confirm',
  templateUrl: './confirm.page.html',
  styleUrls: ['./confirm.page.scss'],
})
export class ConfirmPage implements OnInit {

constructor(private signinService: SigninService) { }
userVerificationCode = {} as Password;
  ngOnInit() {
  }
loginUser() {
this.signinService.getUserToken(this.userVerificationCode.password);
}

}
