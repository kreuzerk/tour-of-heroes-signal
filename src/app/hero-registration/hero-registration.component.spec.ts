import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroRegistrationComponent } from './hero-registration.component';

describe('HeroRegistrationComponent', () => {
  let component: HeroRegistrationComponent;
  let fixture: ComponentFixture<HeroRegistrationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HeroRegistrationComponent]
    });
    fixture = TestBed.createComponent(HeroRegistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
