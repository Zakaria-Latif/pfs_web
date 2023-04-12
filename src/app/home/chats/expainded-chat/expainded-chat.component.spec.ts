import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpaindedChatComponent } from './expainded-chat.component';

describe('ExpaindedChatComponent', () => {
  let component: ExpaindedChatComponent;
  let fixture: ComponentFixture<ExpaindedChatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExpaindedChatComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExpaindedChatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
