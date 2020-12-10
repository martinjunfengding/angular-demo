import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'martin-demo';

  constructor(private router: Router){

  }

  public changeTab(num: string) :void{
    this.router.navigateByUrl(num)
  }
}
