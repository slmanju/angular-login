import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from '../user.model';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  form: FormGroup;

  constructor(private formBuilder: FormBuilder, private userService: UsersService) {
  }

  ngOnInit() {
    this.form = this.formBuilder.group({
      username : [ null, Validators.required ],
      password : [ null, Validators.required ],
      email : [ null, Validators.required ]
    });
  }

  addPost() {
    const value = this.form.value;
    if (this.form.valid) {
      const newUser = new User(value.username, value.password, value.email);
      this.userService.create(newUser).subscribe(
        data => {
          console.log(data);
        },
        error => {
          console.log(error);
        });
    }
  }
}
