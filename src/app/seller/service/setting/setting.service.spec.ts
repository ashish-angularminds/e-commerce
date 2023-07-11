import { TestBed } from '@angular/core/testing';
import { SettingService } from './setting.service';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';

describe('SettingService', () => {
  let httpMock: HttpTestingController;
  let service: SettingService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    httpMock = TestBed.inject(HttpTestingController);
    service = TestBed.inject(SettingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get user details', () => {
    let mockdata = {
      result: [
        {
          _id: '646ca9bbec6d46ce7b8f04e2',
          name: 'Ashish Mahadik',
          _org: {
            _id: '646ca9bbec6d46ce7b8f04df',
            name: 'Angular Minds Ltd',
            email: 'admin@angularminds.in',
          },
          email: 'admin@angularminds.in',
          role: 'admin',
          isEmailVerified: true,
          deleted: false,
          createdAt: '2023-05-23T11:55:39.402Z',
          updatedAt: '2023-05-29T09:27:02.460Z',
        },
      ]
    };
    let pagination = {
      limit: 1
    }
    service.getuser(pagination).subscribe((data) => {
      expect(data).toEqual(mockdata);
    });
    const request = httpMock.expectOne(
      'https://shop-api.ngminds.com/users?limit=1'
    );
    expect(request.request.method).toBe('GET');
    request.flush(mockdata);
  });

  it('should create new user', () => {
    let mockdata = {
      result: [
        {
          _id: '646ca9bbec6d46ce7b8f04e2',
          name: 'test',
          _org: {
            _id: '646ca9bbec6d46ce7b8f04df',
            name: 'Angular Minds Ltd',
            email: 'admin@angularminds.in',
          },
          email: 'test@1111.in',
          role: 'user',
          isEmailVerified: true,
          deleted: false,
          createdAt: '2023-05-23T11:55:39.402Z',
          updatedAt: '2023-05-29T09:27:02.460Z',
        },
      ]
    };
    let user = {
      email: 'test@1111.in',
      password: 'test1111',
      name: 'test',
      role: 'user',
    }
    service.createuser(user).subscribe((data) => {
      expect(data).toEqual(mockdata);
    });
    const request = httpMock.expectOne(
      'https://shop-api.ngminds.com/users'
    );
    expect(request.request.method).toBe('POST');
    request.flush(mockdata);
  });

  it('should update org info', () => {
    let mockdata = {
      result: [
        {
          _id: '646ca9bbec6d46ce7b8f04e2',
          name: 'test',
          _org: {
            _id: '646ca9bbec6d46ce7b8f04df',
            name: 'test',
            email: 'test@1111.in',
          },
          email: 'test@1111.in',
          role: 'user',
          isEmailVerified: true,
          deleted: false,
          createdAt: '2023-05-23T11:55:39.402Z',
          updatedAt: '2023-05-29T09:27:02.460Z',
        },
      ]
    };
    let user = {
      email: 'test@1111.in',
      name: 'test',
    }
    service.updateorg(user).subscribe((data) => {
      expect(data).toEqual(mockdata);
    });
    const request = httpMock.expectOne(
      'https://shop-api.ngminds.com/users/org'
    );
    expect(request.request.method).toBe('PATCH');
    request.flush(mockdata);
  });

  it('should change user role', () => {
    let mockdata = {
      result: [
        {
          _id: '646ca9bbec6d46ce7b8f04e2',
          name: 'test',
          _org: {
            _id: '646ca9bbec6d46ce7b8f04df',
            name: 'Angular Minds Ltd',
            email: 'admin@angularminds.in',
          },
          email: 'test@1111.in',
          role: 'admin',
          isEmailVerified: true,
          deleted: false,
          createdAt: '2023-05-23T11:55:39.402Z',
          updatedAt: '2023-05-29T09:27:02.460Z',
        },
      ]
    };
    let user = {
      role: 'admin',
    }
    service.changerole(user, '646ca9bbec6d46ce7b8f04e2').subscribe((data) => {
      expect(data).toEqual(mockdata);
    });
    const request = httpMock.expectOne(
      'https://shop-api.ngminds.com/users/role/646ca9bbec6d46ce7b8f04e2'
    );
    expect(request.request.method).toBe('PATCH');
    request.flush(mockdata);
  });

  it('should update user info', () => {
    let mockdata = {
      result: [
        {
          _id: '646ca9bbec6d46ce7b8f04e2',
          name: 'test',
          _org: {
            _id: '646ca9bbec6d46ce7b8f04df',
            name: 'test',
            email: 'test@1111.in',
          },
          email: 'test@1112.in',
          role: 'user',
          isEmailVerified: true,
          deleted: false,
          createdAt: '2023-05-23T11:55:39.402Z',
          updatedAt: '2023-05-29T09:27:02.460Z',
        },
      ]
    };
    let user = {
      email: 'test@1112.in',
      name: 'test',
    }
    service.changeinfo(user, '646ca9bbec6d46ce7b8f04e2').subscribe((data) => {
      expect(data).toEqual(mockdata);
    });
    const request = httpMock.expectOne(
      'https://shop-api.ngminds.com/users/646ca9bbec6d46ce7b8f04e2'
    );
    expect(request.request.method).toBe('PATCH');
    request.flush(mockdata);
  });

  it('should delete user', () => {
    let mockdata = {
      result: [
        {
          _id: '646ca9bbec6d46ce7b8f04e2',
          name: 'test',
          _org: {
            _id: '646ca9bbec6d46ce7b8f04df',
            name: 'test',
            email: 'test@1111.in',
          },
          email: 'test@1112.in',
          role: 'user',
          isEmailVerified: true,
          deleted: true,
          createdAt: '2023-05-23T11:55:39.402Z',
          updatedAt: '2023-05-29T09:27:02.460Z',
        },
      ]
    };
    service.deleteuser('646ca9bbec6d46ce7b8f04e2').subscribe((data) => {
      expect(data).toEqual(mockdata);
    });
    const request = httpMock.expectOne(
      'https://shop-api.ngminds.com/users/646ca9bbec6d46ce7b8f04e2'
    );
    expect(request.request.method).toBe('DELETE');
    request.flush(mockdata);
  });

  it('should change user password', () => {
    let mockdata = {
      result: [
        {
          _id: '646ca9bbec6d46ce7b8f04e2',
          name: 'test',
          _org: {
            _id: '646ca9bbec6d46ce7b8f04df',
            name: 'test',
            email: 'test@1111.in',
          },
          email: 'test@1111.in',
          role: 'user',
          isEmailVerified: true,
          deleted: false,
          createdAt: '2023-05-23T11:55:39.402Z',
          updatedAt: '2023-05-29T09:27:02.460Z',
        },
      ]
    };
    let user = {
      old_password: 'test1111',
      new_password: 'test1112'
    }
    service.changepassword(user).subscribe((data) => {
      expect(data).toEqual(mockdata);
    });
    const request = httpMock.expectOne(
      'https://shop-api.ngminds.com/users/auth/change-password'
    );
    expect(request.request.method).toBe('POST');
    request.flush(mockdata);
  });
});
