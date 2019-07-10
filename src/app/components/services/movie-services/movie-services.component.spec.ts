import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieServicesComponent } from './movie-services.component';

describe('MovieServicesComponent', () => {
  let component: MovieServicesComponent;
  let fixture: ComponentFixture<MovieServicesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MovieServicesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
