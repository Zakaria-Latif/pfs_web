import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayersCercleComponent } from './players-cercle.component';

describe('PlayersCercleComponent', () => {
  let component: PlayersCercleComponent;
  let fixture: ComponentFixture<PlayersCercleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlayersCercleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlayersCercleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
