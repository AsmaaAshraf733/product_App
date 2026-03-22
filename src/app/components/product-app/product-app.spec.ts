import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductApp } from './product-app';

describe('ProductApp', () => {
  let component: ProductApp;
  let fixture: ComponentFixture<ProductApp>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductApp]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductApp);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
