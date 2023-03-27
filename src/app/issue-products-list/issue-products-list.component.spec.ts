import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IssueProductsListComponent } from './issue-products-list.component';

describe('IssueProductsListComponent', () => {
  let component: IssueProductsListComponent;
  let fixture: ComponentFixture<IssueProductsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IssueProductsListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IssueProductsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
