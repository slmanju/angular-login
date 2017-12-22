import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  rForm: FormGroup;
  post: any; // A property for our submitted form
  description = '';
  name = '';

  constructor(private fb: FormBuilder) {
  }

  ngOnInit() {
    this.rForm = this.fb.group({
      'name' : [ null, Validators.required ],
      'description' : [ null, Validators.required ]
    });
  }

  addPost(post) {
    this.description = post.description;
    this.name = post.name;

    console.log(post);
  }

}
