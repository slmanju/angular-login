import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  constructor(private userService: UsersService) { }

  ngOnInit() {
    this.userService.getAll().subscribe(data => console.log(data));
  }

}
