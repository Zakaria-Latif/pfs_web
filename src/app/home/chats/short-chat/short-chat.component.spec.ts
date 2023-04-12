import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShortChatComponent } from './short-chat.component';

describe('ShortChatComponent', () => {
  let component: ShortChatComponent;
  let fixture: ComponentFixture<ShortChatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShortChatComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShortChatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
