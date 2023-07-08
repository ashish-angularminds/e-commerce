import { TestBed } from '@angular/core/testing';
import { SettingService } from './setting.service';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';

fdescribe('SettingService', () => {
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
    request.flush( mockdata );
  });
});
