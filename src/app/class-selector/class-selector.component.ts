import { Component, OnInit } from '@angular/core';

@Component({
  selector: '.app-class-selector',
  templateUrl: './class-selector.component.html',
  styleUrls: ['./class-selector.component.css']
})
export class ClassSelectorComponent implements OnInit {
  classAttribute = 'class attribute';
  status = 'offline';

  constructor() { }

  ngOnInit() {
  }

  getStatus(){
    return this.status;
  }

}
