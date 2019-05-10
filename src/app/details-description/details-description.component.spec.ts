import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsDescriptionComponent } from './details-description.component';

describe('DetailsDescriptionComponent', () => {
  let component: DetailsDescriptionComponent;
  let fixture: ComponentFixture<DetailsDescriptionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailsDescriptionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsDescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
