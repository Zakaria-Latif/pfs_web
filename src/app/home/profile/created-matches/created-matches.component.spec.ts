import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatedMatchesComponent } from './created-matches.component';

describe('CreatedMatchesComponent', () => {
  let component: CreatedMatchesComponent;
  let fixture: ComponentFixture<CreatedMatchesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreatedMatchesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreatedMatchesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
