import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  users$: Object;
  title= 'Users list';

  constructor(private data: DataService) { }

  ngOnInit() {
    this.data.getUsers().subscribe(
      data => this.users$ = data
    );
  }

}
