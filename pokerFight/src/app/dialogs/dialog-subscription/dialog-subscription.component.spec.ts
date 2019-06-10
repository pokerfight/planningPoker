import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogSubscriptionComponent } from './dialog-subscription.component';

describe('DialogSubscriptionComponent', () => {
  let component: DialogSubscriptionComponent;
  let fixture: ComponentFixture<DialogSubscriptionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogSubscriptionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogSubscriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
