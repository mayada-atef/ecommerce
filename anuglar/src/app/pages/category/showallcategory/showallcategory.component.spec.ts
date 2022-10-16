import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowallcategoryComponent } from './showallcategory.component';

describe('ShowallcategoryComponent', () => {
  let component: ShowallcategoryComponent;
  let fixture: ComponentFixture<ShowallcategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowallcategoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowallcategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
