import { Component, OnInit, VERSION } from '@angular/core';

@Component({
  selector: 'tq-version',
  templateUrl: './version.component.html',
  styleUrls: ['./version.component.css']
})
export class VersionComponent implements OnInit {

  public value: string;

  constructor() {
    this.value = VERSION.full;
   }

  ngOnInit() {
  }

}
