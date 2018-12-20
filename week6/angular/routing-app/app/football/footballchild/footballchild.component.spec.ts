import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FootballchildComponent } from './footballchild.component';

describe('FootballchildComponent', () => {
  let component: FootballchildComponent;
  let fixture: ComponentFixture<FootballchildComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FootballchildComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FootballchildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
