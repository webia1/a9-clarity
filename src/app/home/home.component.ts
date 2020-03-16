import { Component, OnInit } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition
  // ...
} from '@angular/animations';

@Component({
  selector: 'railmate-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public a1 = false;

  constructor() {}

  ngOnInit() {}

  // from template or also from template

  toggleA1() {
    this.a1 = !this.a1;
  }
}
