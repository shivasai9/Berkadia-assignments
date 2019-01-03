import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TicketbookingComponent } from './ticketbooking.component';

describe('TicketbookingComponent', () => {
  let component: TicketbookingComponent;
  let fixture: ComponentFixture<TicketbookingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TicketbookingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TicketbookingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
