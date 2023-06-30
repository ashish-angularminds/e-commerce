import { ElementRef } from '@angular/core';
import { DealDirective } from './deal.directive';
import { TestBed } from '@angular/core/testing';
import { TestComponent } from '../sharedmodule/test.component';
import { By } from '@angular/platform-browser';

fdescribe('DealDirective', () => {
  let dealdirective: DealDirective;
  let fixture: any;
  let des: any;
  beforeEach(async () => {
    fixture = TestBed.configureTestingModule({
      declarations: [DealDirective],
      providers: [DealDirective, { provide: ElementRef, useValue: {} }]
    })
    // .createComponent(TestComponent);
    dealdirective = TestBed.inject(DealDirective);
    // fixture.detectChanges();
    // des = fixture.debugElement.queryAll(By.directive(DealDirective));
  });


  it('should create an instance', () => {
    const directive = DealDirective;
    expect(directive).toBeTruthy();
  });

  it('should get orginal text', () => {
    // this.org = this.elmRef.nativeElement.textContent;
    expect(dealdirective.appDeal).toEqual(undefined);
  })

  it('should check', () => {
    const mokedeal = {
      end: "2023-07-02T17:31:13.868Z",
      price: 0,
      discount: '0%'
    }

    dealdirective.appDeal = mokedeal;
    expect(dealdirective.appDeal).toEqual(mokedeal);
    if (dealdirective.appDeal) {
      let end: Date = new Date(dealdirective.appDeal?.ends);
      
    }
  })
});
