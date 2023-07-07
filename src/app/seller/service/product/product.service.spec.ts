import { TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { ProductService } from './product.service';
import { HttpClient } from '@angular/common/http';

fdescribe('ProductService', () => {
  let service: ProductService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [HttpClient],
    });
    httpMock = TestBed.inject(HttpTestingController);
    service = TestBed.inject(ProductService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should create a product', () => {
    let mockdata = new FormData();
    mockdata.append('name', 'test');
    mockdata.append('description', 'test');
    mockdata.append('price', '10');
    mockdata.append(
      'new_images',
      new Blob(['<html>…</html>'], { type: 'text/html' })
    );
    service.create(mockdata).subscribe((data) => {
      expect(data).toEqual(mockdata);
    });
    const request = httpMock.expectOne('https://shop-api.ngminds.com/products');
    expect(request.request.method).toBe('POST');
    request.flush(mockdata);
  });

  it('should get all products', () => {
    let mockdata = {
      limit: 10,
      page: 1,
      results: [],
      totalPages: 2,
      totalResults: 12,
    };
    service.getall({ sortBy: 'name', limit: 10, page: 1 }).subscribe((data) => {
      expect(data).toEqual(mockdata);
    });
    const request = httpMock.expectOne(
      'https://shop-api.ngminds.com/products?sortBy=name&limit=10&page=1'
    );
    expect(request.request.method).toBe('GET');
    request.flush(mockdata);
  });

  it('should get single product detail', () => {
    let mockdata = {
      createdAt: '2023-06-08T10:17:38.740Z',
      deleted: false,
      description: 'test',
      images: [],
      name: 'test',
      price: 999,
      updatedAt: '2023-06-16T11:47:15.579Z',
      _id: '6481aac28314b2229de97847',
      _org: '646ca9bbec6d46ce7b8f04df',
    };
    service.getone('6481aac28314b2229de97847').subscribe((data) => {
      expect(data).toEqual(mockdata);
    });
    const request = httpMock.expectOne(
      'https://shop-api.ngminds.com/products/6481aac28314b2229de97847'
    );
    expect(request.request.method).toBe('GET');
    request.flush(mockdata);
  });

  it('should delete a product', () => {
    let mockdata = {
      createdAt: '2023-06-08T10:17:38.740Z',
      deleted: true,
      description: 'test',
      images: [],
      name: 'test',
      price: 999,
      updatedAt: '2023-06-16T11:47:15.579Z',
      _id: '6481aac28314b2229de97847',
      _org: '646ca9bbec6d46ce7b8f04df',
    };
    service.delete('6481aac28314b2229de97847').subscribe((data) => {
      expect(data).toEqual(mockdata);
    });
    const request = httpMock.expectOne(
      'https://shop-api.ngminds.com/products/6481aac28314b2229de97847'
    );
    expect(request.request.method).toBe('DELETE');
    request.flush(mockdata);
  });

  it('should get single product detail', () => {
    let mockdata = {
      createdAt: '2023-06-08T10:17:38.740Z',
      deleted: false,
      description: 'test',
      images: [],
      name: 'test',
      price: 999,
      updatedAt: '2023-06-16T11:47:15.579Z',
      _id: '6481aac28314b2229de97847',
      _org: '646ca9bbec6d46ce7b8f04df',
    };
    service.update('6481aac28314b2229de97847',{name: 'test', description: 'test', price: '999' }).subscribe((data) => {
      expect(data).toEqual(mockdata);
    });
    const request = httpMock.expectOne(
      'https://shop-api.ngminds.com/products/6481aac28314b2229de97847'
    );
    expect(request.request.method).toBe('PATCH');
    request.flush(mockdata);
  });

  it('should create a product', () => {
    let mockdata = new FormData();
    mockdata.append('new_images',
      new Blob(['<html>…</html>'], { type: 'text/html' })
    );
    service.updateimg('6481aac28314b2229de97847',mockdata).subscribe((data) => {
      expect(data).toEqual(mockdata);
    });
    const request = httpMock.expectOne('https://shop-api.ngminds.com/products/images/6481aac28314b2229de97847');
    expect(request.request.method).toBe('PATCH');
    request.flush(mockdata);
  });
});
