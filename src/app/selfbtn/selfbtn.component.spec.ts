import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelfbtnComponent } from './selfbtn.component';

describe('SelfbtnComponent', () => {
  let component: SelfbtnComponent;
  let fixture: ComponentFixture<SelfbtnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelfbtnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelfbtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
