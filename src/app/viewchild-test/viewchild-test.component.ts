import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { TestService } from './../test-service/test-service.service';

@Component({
  selector: 'app-viewchild-test',
  templateUrl: './viewchild-test.component.html',
  styleUrls: ['./viewchild-test.component.css']
})
export class ViewchildTestComponent implements OnInit {

  @ViewChild('user')
  user: ElementRef;

  constructor(private testService:TestService) { }

  ngOnInit(): void {
  }

  addUser() {
    console.log(this.user.nativeElement.value)
  }

  logMessage() {
    this.testService.logMessage("hola")
  }

}
