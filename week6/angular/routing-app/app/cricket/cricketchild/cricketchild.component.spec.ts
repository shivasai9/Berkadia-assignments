import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CricketchildComponent } from './cricketchild.component';

describe('CricketchildComponent', () => {
  let component: CricketchildComponent;
  let fixture: ComponentFixture<CricketchildComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CricketchildComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CricketchildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
