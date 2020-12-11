import { Component, OnInit, OnDestroy, Input, Output, EventEmitter } from '@angular/core';
import { AppServiceService } from "~martin/app/services/app-service.service"
import { Subscription, Subject, interval } from 'rxjs';
import { AutoUnsubscribe } from "~martin/app/decorators/autounsubscribe.decorator";
import { throttleTime, debounceTime } from 'rxjs/operators';

@AutoUnsubscribe
@Component({
  selector: 'app-comp-b',
  templateUrl: './comp-b.component.html',
  styleUrls: ['./comp-b.component.scss']
})
export class CompBComponent implements OnInit, OnDestroy {
  @Input() innerContent: any;
  @Output() giveToDaddy = new EventEmitter();

  public text: any;
  public babyCount: any[] = [];
  public makeBaby$ = new Subject<any>();
  public getBabyDataSubscription: Subscription | undefined;
  public makeBabyDataSubscription: Subscription | undefined;
  public testMemorySubscription: Subscription | undefined;
  public testMemoryArr: any = [];

  constructor(
    private appService: AppServiceService
  ) {
  }

  ngOnInit(): void {
    this.text = this.innerContent;
    this.makeBabyDataSubscription = this.makeBaby$.pipe(debounceTime(1000)).subscribe({
      next: () => {
        this.getBabyDataSubscription = this.appService.fetchData().subscribe((res) => {
          const birthResult = {
            gender: res === true ? 'boy' : 'girl',
            imageurl: res === true ? 'assets/image/boy.jpg' : 'assets/image/girl.png',
          }

          this.babyCount.push(birthResult)

          this.passToDaddy(this.babyCount.length);
        })
      }
    });

    // this.testMemorySubscription = interval(500).subscribe(() => {
    //   for (let i = 0; i < 100; i++) {
    //     this.testMemoryArr.push(i);
    //     this.testMemoryArr.forEach((element: any) => {
    //       console.log(element);
    //     });
    //   }
    // });
  }


  ngOnDestroy(): void {

  }

  passToDaddy(babyCount: number) {
    this.giveToDaddy.emit(babyCount);
  }

  createBaby() {
    this.makeBaby$.next()
  }

  kidsArr(count: any) {
    return Array(count).fill(0).map((x, i) => i);
  }
}
