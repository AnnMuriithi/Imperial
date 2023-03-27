import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IssueProductsComponent } from './issue-products.component';

describe('IssueProductsComponent', () => {
  let component: IssueProductsComponent;
  let fixture: ComponentFixture<IssueProductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IssueProductsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IssueProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
