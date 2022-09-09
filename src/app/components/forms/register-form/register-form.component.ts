import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { firstValueFrom } from 'rxjs';
import { RegisterService } from 'src/app/services/register.service';
import { v4 as uuidv4 } from 'uuid';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.scss']
})
export class RegisterFormComponent implements OnInit {

  registerForm !: FormGroup

  constructor(private fb: FormBuilder, private registerService: RegisterService) { }

  ngOnInit(): void {
    this.registerForm = this.fb.group({
      username: this.fb.control('', [ Validators.required ]),
      email: this.fb.control('', [ Validators.required ]),
    })
  }

  processForm(): void {
    let registerResponse:Promise<any> = firstValueFrom(this.registerService.postRegisterUser(uuidv4().slice(0,8), 
      this.registerForm.value.username, this.registerForm.value.email))
    registerResponse.then((data)=> {
      console.log(data)
    })
  }

}
