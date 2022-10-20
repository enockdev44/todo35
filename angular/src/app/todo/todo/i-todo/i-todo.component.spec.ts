import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ITodoComponent } from './i-todo.component';

describe('ITodoComponent', () => {
  let component: ITodoComponent;
  let fixture: ComponentFixture<ITodoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ITodoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ITodoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
