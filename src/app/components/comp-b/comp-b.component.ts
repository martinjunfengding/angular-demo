import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-comp-b',
  templateUrl: './comp-b.component.html',
  styleUrls: ['./comp-b.component.scss']
})
export class CompBComponent implements OnInit {
  @Input() innerContent: any;
  @Output() giveToDaddy = new EventEmitter();
  public text: any;
  public babyCount: number = 0;

  constructor() { 
  }

  ngOnInit(): void {
    this.text = this.innerContent;
  }

  passToDaddy(babyCount: number){
    this.giveToDaddy.emit(babyCount);
  }

  createBaby(){
    this.babyCount ++;
    this.passToDaddy(this.babyCount);
  }

  kidsArr(count: any){
    return Array(count).fill(0).map((x,i)=>i);
  }
}
