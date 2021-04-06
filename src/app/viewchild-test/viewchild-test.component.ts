import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-viewchild-test',
  templateUrl: './viewchild-test.component.html',
  styleUrls: ['./viewchild-test.component.css']
})
export class ViewchildTestComponent implements OnInit {

  @ViewChild('user')
  user: ElementRef;

  constructor() { }

  ngOnInit(): void {
  }

  addUser() {
    console.log(this.user.nativeElement.value)
  }

}
