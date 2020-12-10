import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comp-a',
  templateUrl: './comp-a.component.html',
  styleUrls: ['./comp-a.component.scss']
})
export class CompAComponent implements OnInit {
  public demoText: string;
  public grandKidCount: number = 0;

  constructor(
  ) {
    this.demoText = 'father is saying have kid ASAP!';
  }

  ngOnInit(): void {
  }

  getFromChildren(event: any) {
    this.grandKidCount = event;
  }

}
