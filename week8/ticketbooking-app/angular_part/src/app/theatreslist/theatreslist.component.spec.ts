import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TheatreslistComponent } from './theatreslist.component';

describe('TheatreslistComponent', () => {
  let component: TheatreslistComponent;
  let fixture: ComponentFixture<TheatreslistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TheatreslistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TheatreslistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
