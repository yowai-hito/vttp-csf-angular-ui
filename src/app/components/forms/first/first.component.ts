import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.scss']
})

export class FirstComponent implements OnInit {

  form !:FormGroup

  constructor(private fb: FormBuilder) { }

  @Output()
  firstSubmit = new EventEmitter<JSON>()

  ngOnInit(): void {
    this.form = this.fb.group({
      username: this.fb.control('username', [ Validators.required ]),
      password: this.fb.control('', [ Validators.required ])
    })
  }

  processForm() {
    console.log(this.form.value)
    this.firstSubmit.emit(this.form.value)
    console.log('outputted')
  }
}
