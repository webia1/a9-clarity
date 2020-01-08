import { DemoService } from './../common/services/demo.service';
import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';

@Component({
  selector: 'railmate-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.scss'],
})
export class DemoComponent implements OnInit {
  data: any;

  constructor(private ds: DemoService) {}

  ngOnInit() {
    this.ds.getWhatEver().subscribe((res: any) => {
      this.data = res;
    });
  }
}
