import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputouputComponent } from './inputouput.component';

describe('InputouputComponent', () => {
  let component: InputouputComponent;
  let fixture: ComponentFixture<InputouputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InputouputComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InputouputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
