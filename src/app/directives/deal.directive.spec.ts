import { DebugElement, ElementRef } from '@angular/core';
import { DealDirective } from './deal.directive';
import { ComponentFixture, TestBed, TestComponentRenderer, fakeAsync, tick } from '@angular/core/testing';
import { TestComponent } from '../sharedmodule/test.component';
import { By } from '@angular/platform-browser';

describe('DealDirective', () => {
  let testcomponent: TestComponent;
  let fixture: ComponentFixture<TestComponent>;
  let inputEl: DebugElement;
  let dealdirective: DealDirective;

  const mokedeal = {
    ends: "2023-08-02T17:31:13.868Z",
    price: 10,
    discount: '0%'
  }
  beforeEach(async () => {
    TestBed.configureTestingModule({
      declarations: [DealDirective, TestComponent],
      providers: [DealDirective, { provide: ElementRef<any>, useValue: ElementRef }]
    }).compileComponents();
    fixture = TestBed.createComponent(TestComponent);
    fixture.detectChanges();
    testcomponent = fixture.componentInstance;
    inputEl = fixture.debugElement.query(By.css('div'));
    dealdirective = TestBed.inject(DealDirective);
  });


  it('should create an instance', () => {
    const directive = DealDirective;
    expect(directive).toBeTruthy();
  });

  it('should get orginal text', fakeAsync(() => {
    inputEl.triggerEventHandler('onload', null);
    fixture.detectChanges();
    console.log(inputEl?.nativeElement?.innerHTML);
    expect(inputEl?.nativeElement?.innerHTML).toBe('');
  }));

  it('should check', () => {
    dealdirective.countdown(mokedeal, '10');
    fixture.detectChanges();
    expect(dealdirective.countdown(mokedeal, '10')).not.toBeUndefined();
  })
});
