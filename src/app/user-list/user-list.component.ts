import { Component, OnInit, Input, Output, EventEmitter  } from '@angular/core';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  @Input()
  email: string;
  @Input()
  password: string;
  @Output()
  message = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  sendMessage(): void {
     this.message.emit("output example");
  }

}
