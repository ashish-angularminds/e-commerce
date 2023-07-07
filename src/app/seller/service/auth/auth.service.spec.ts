import { TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { AuthService } from './auth.service';

describe('AuthService', () => {
  let service: AuthService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    service = TestBed.inject(AuthService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return a header', () => {
    let token =
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2NDZjYTliYmVjNmQ0NmNlN2I4ZjA0ZTIiLCJpYXQiOjE2ODg1NTU4MTAsImV4cCI6MTY4ODY0MjIxMCwidHlwZSI6ImFjY2VzcyJ9.vZ39lRledAnlk47mvhK09pkpFZzo5mALQqeVFg1j-GU';
    service.setheader(token);
    expect(service.setheader(token)).toBeTruthy();
  });

  it('should register seller', () => {
    let mockdata = {
      email: 'jack@9.in',
      password: 'jack1111',
      name: 'jack',
      company: 'test',
      captcha:
        '09ALmJTd63ui39_GnSAHGtIG4RVimIUSsKq8nLIGK7gFV5oqTxQSAU-nzdGibzghK3qHoF0HYKATOYlO5hVG3glg4pfjvzDowGa0aWJA',
    };
    let responcedata = {
      expires: '2023-07-07T06:07:41.110Z',
      token:
        'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2NGE2NWEyZDgzMTRiMjIyOWRmMDY2NjkiLCJpYXQiOjE2ODg2MjM2NjEsImV4cCI6MTY4ODcxMDA2MSwidHlwZSI6ImFjY2VzcyJ9.BSSX6cYrXng97KnYiMbguAp4UXYt7Q_1d4lcr21_SYI',
      user: {
        createdAt: '2023-07-06T06:07:41.078Z',
        deleted: false,
        email: 'jack@8.in',
        isEmailVerified: false,
        name: 'jack',
        role: 'admin',
        updatedAt: '2023-07-06T06:07:41.078Z',
        _id: '64a65a2d8314b2229df06669',
        _org: {
          email: 'jack@9.in',
          name: 'test',
          _id: '64a65a2d8314b2229df06666',
        },
      },
    };

    service.set(mockdata).subscribe((data) => {
      expect(data).toEqual(responcedata);
    });
    const request = httpMock.expectOne(
      'https://shop-api.ngminds.com/auth/register'
    );
    expect(request.request.method).toBe('POST');
    request.flush(responcedata);
  });

  it('should login seller', () => {
    let mockdata = {
      email: 'jack@9.in',
      password: 'jack1111',
      captcha:
        '09ALmJTd63ui39_GnSAHGtIG4RVimIUSsKq8nLIGK7gFV5oqTxQSAU-nzdGibzghK3qHoF0HYKATOYlO5hVG3glg4pfjvzDowGa0aWJA',
    };
    let responcedata = {
      expires: '2023-07-07T06:07:41.110Z',
      token:
        'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2NGE2NWEyZDgzMTRiMjIyOWRmMDY2NjkiLCJpYXQiOjE2ODg2MjM2NjEsImV4cCI6MTY4ODcxMDA2MSwidHlwZSI6ImFjY2VzcyJ9.BSSX6cYrXng97KnYiMbguAp4UXYt7Q_1d4lcr21_SYI',
      user: {
        createdAt: '2023-07-06T06:07:41.078Z',
        deleted: false,
        email: 'jack@8.in',
        isEmailVerified: false,
        name: 'jack',
        role: 'admin',
        updatedAt: '2023-07-06T06:07:41.078Z',
        _id: '64a65a2d8314b2229df06669',
        _org: {
          email: 'jack@9.in',
          name: 'test',
          _id: '64a65a2d8314b2229df06666',
        },
      },
    };

    service.login(mockdata).subscribe((data) => {
      expect(data).toEqual(responcedata);
    });
    const request = httpMock.expectOne(
      'https://shop-api.ngminds.com/auth/login'
    );
    expect(request.request.method).toBe('POST');
    request.flush(responcedata);
  });

  it('should get seller details', () => {
    let token =
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2NDZjYTliYmVjNmQ0NmNlN2I4ZjA0ZTIiLCJpYXQiOjE2ODg1NTU4MTAsImV4cCI6MTY4ODY0MjIxMCwidHlwZSI6ImFjY2VzcyJ9.vZ39lRledAnlk47mvhK09pkpFZzo5mALQqeVFg1j-GU';
    let responcedata = {
      expires: '2023-07-07T06:07:41.110Z',
      token:
        'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2NGE2NWEyZDgzMTRiMjIyOWRmMDY2NjkiLCJpYXQiOjE2ODg2MjM2NjEsImV4cCI6MTY4ODcxMDA2MSwidHlwZSI6ImFjY2VzcyJ9.BSSX6cYrXng97KnYiMbguAp4UXYt7Q_1d4lcr21_SYI',
      user: {
        createdAt: '2023-07-06T06:07:41.078Z',
        deleted: false,
        email: 'jack@8.in',
        isEmailVerified: false,
        name: 'jack',
        role: 'admin',
        updatedAt: '2023-07-06T06:07:41.078Z',
        _id: '64a65a2d8314b2229df06669',
        _org: {
          email: 'jack@9.in',
          name: 'test',
          _id: '64a65a2d8314b2229df06666',
        },
      },
    };

    service.get(token).subscribe((data) => {
      expect(data).toEqual(responcedata);
    });
    const request = httpMock.expectOne(
      'https://shop-api.ngminds.com/auth/self'
    );
    expect(request.request.method).toBe('GET');
    request.flush(responcedata);
  });

  it('should send forget password email', () => {
    let token =
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2NDZjYTliYmVjNmQ0NmNlN2I4ZjA0ZTIiLCJpYXQiOjE2ODg1NTU4MTAsImV4cCI6MTY4ODY0MjIxMCwidHlwZSI6ImFjY2VzcyJ9.vZ39lRledAnlk47mvhK09pkpFZzo5mALQqeVFg1j-GU';

    service.forgetpassword({ email: 'jack@1.in', captcha: token }).subscribe((data) => {
      expect(data).toEqual({});
    });
    const request = httpMock.expectOne(
      'https://shop-api.ngminds.com/auth/forgot-password'
    );
    expect(request.request.method).toBe('POST');
    request.flush({});
  });

  it('should reset password', () => {
    let token =
      'isdgiofghiogheo'

    service.resetpassword({ password: 'abc12345' }, token).subscribe((data) => {
      expect(data).toEqual(token);
    });
    const request = httpMock.expectOne(
      `https://shop-api.ngminds.com/auth/reset-password?0=i&1=s&2=d&3=g&4=i&5=o&6=f&7=g&8=h&9=i&10=o&11=g&12=h&13=e&14=o`
    );
    expect(request.request.method).toBe('POST');
    request.flush(token);
  });

  it('should send verification mail', () => {
    let token =
      'isdgiofghiogheo'

    service.sendverificationmail(token).subscribe((data) => {
      expect(data).toEqual(token);
    });
    const request = httpMock.expectOne(
      'https://shop-api.ngminds.com/auth/send-verification-email'
    );
    expect(request.request.method).toBe('POST');
    request.flush(token);
  });

  it('should verify user', () => {
    let token =
      'isdgiofghiogheo'

    service.verifyaccount(token).subscribe((data) => {
      expect(data).toEqual(token);
    });
    const request = httpMock.expectOne(
      'https://shop-api.ngminds.com/auth/verify-email?0=i&1=s&2=d&3=g&4=i&5=o&6=f&7=g&8=h&9=i&10=o&11=g&12=h&13=e&14=o'
    );
    expect(request.request.method).toBe('POST');
    request.flush(token);
  });

  it('should login with google', () => {
    let token =
      'isdgiofghiogheo'

    service.googlelogin({ token: 'hcisddfdsf23', captcha: token }).subscribe((data) => {
      expect(data).toEqual(token);
    });
    const request = httpMock.expectOne(
      'https://shop-api.ngminds.com/auth/login/google'
    );
    expect(request.request.method).toBe('POST');
    request.flush(token);
  });
});
