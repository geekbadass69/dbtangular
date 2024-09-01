import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WrongaddressComponent } from './wrongaddress.component';

describe('WrongaddressComponent', () => {
  let component: WrongaddressComponent;
  let fixture: ComponentFixture<WrongaddressComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WrongaddressComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WrongaddressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
