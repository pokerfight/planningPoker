import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterProgressComponent } from './footer-progress.component';

describe('FooterProgressComponent', () => {
  let component: FooterProgressComponent;
  let fixture: ComponentFixture<FooterProgressComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FooterProgressComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterProgressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
