import { ComponentFixture, TestBed } from '@angular/core/testing';

import { dogComponent } from './dog.component';

describe('dogComponent', () => {
  let component: dogComponent;
  let fixture: ComponentFixture<dogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ dogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(dogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
