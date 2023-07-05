import { TestBed } from '@angular/core/testing';
import { ProductsService } from './products.service';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';

describe('ProductsService', () => {
  let service: ProductsService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    service = TestBed.inject(ProductsService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get user', () => {
    let mockdata = {
      limit: 10,
      page: 1,
      results: [
        {
          createdAt: '2023-01-16T06:23:05.455Z',
          deal: {
            discount: '18%',
            ends: '2023-07-10T01:08:36.381Z',
            price: 0.82,
          },
          description: "<p>t1</p>",
          images: [
            {
              public_id: "training-api/nohvenegn646z7vawcb7",
              url: "http://res.cloudinary.com/abs-am/image/upload/v1688555838/training-api/nohvenegn646z7vawcb7.jpg",
            },
          ],
          name: "t1",
          price: 1,
          _id: "64a5513f8314b2229df06527",
          _org: {
            email: "admin@angularminds.in",
            name: "Angular Minds Ltd",
            _id: "646ca9bbec6d46ce7b8f04df",
          },
        },
      ],
      totalPages: 1,
      totalResults: 1,
    };

    service.getlist({name: 't1'}).subscribe((data) => {
        expect(data).toEqual(mockdata);
    });
    const request = httpMock.expectOne(
      'https://shop-api.ngminds.com/shop/products?name=t1'
    );
    expect(request.request.method).toBe('GET');
    request.flush(mockdata);
  });
});
