import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NavbarComponent } from './navbar.component';
import { NavbarService } from './service/navbar.service';
import { CartService } from '../shop/services/cart/cart.service';
import { Event, NavigationEnd, Router, RouterEvent } from '@angular/router';
import { ReplaySubject } from 'rxjs';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('NavbarComponent', () => {
  let component: NavbarComponent;
  let fixture: ComponentFixture<NavbarComponent>;
  let eventSubject = new ReplaySubject<RouterEvent>(1);
  let router: Router;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [NavbarService, CartService],
      declarations: [NavbarComponent]
    })
      .compileComponents();
      fixture = TestBed.createComponent(NavbarComponent);
    component = fixture.componentInstance;
    router = TestBed.inject(Router);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should checkroute function work', () => {
    let methodSpy: jasmine.Spy = spyOn(component,'pushflag');
    fixture.detectChanges();
    eventSubject.next(new NavigationEnd(1, 'shop', 'redirectUrl'));
    expect(methodSpy).toHaveBeenCalled();
  });

  it('should event sub', () => {
    let methodSpy: jasmine.Spy = spyOn(component,'pushflag');
    component.checkroute();
    fixture.detectChanges();
    expect(methodSpy).toHaveBeenCalled();
  })

  it('should check active url', () => {
    let dummy = {
      target: {
        className:'nav-link'
      }
    }
    let methodSpy: jasmine.Spy = spyOn(component, 'activelink');
    component.activelink(dummy);
    component.checkroute();
    expect(methodSpy).toHaveBeenCalled();
  })

  it('should logout customer', () => {
    spyOn(router, 'navigate');
    component.logoutcustomer();
    // if (router.url.includes('profile')) {
      expect(router.navigate).toHaveBeenCalledWith(["/"]);
    // }
    localStorage.removeItem('loginuser');
    expect(localStorage.getItem('loginuser')).toBeNull();
  })

  it('should logout seller', () => {
    spyOn(router, 'navigate');
    component.logoutseller();
    expect(router.navigate).toHaveBeenCalledWith(['auth/login']);
  })
});
