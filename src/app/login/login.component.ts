import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthUserDataService } from '../auth-user-data.service';
import { Router } from '@angular/router'
declare var $:any;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm : any;

  constructor(private _AuthUserDataService : AuthUserDataService, private _Router : Router) {
    this.loginForm = new FormGroup({
      'email' : new FormControl(null, [Validators.required, Validators.email]),
      'password' : new FormControl(null, [Validators.required, Validators.pattern('^[a-z][0-9]+$')])
    })
  }

  getForm(loginForm : FormGroup) {
    console.log(loginForm.value);
    this._AuthUserDataService.sendLoginData(loginForm.value).subscribe((data)=>{
      console.log(data);
      
      // if(data.message == 'success'){
      //   this._Router.navigate(['/home'])
      // }
      // else
      // {
      //   console.log(data.message);
      // }
    })
  }

  ngOnInit() {
    $('#particles').particleground({
      dotColor: '#fff',
      lineColor: '#000'
    });
  }

}
