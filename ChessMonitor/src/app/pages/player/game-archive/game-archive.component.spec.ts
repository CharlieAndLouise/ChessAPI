import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GameArchiveComponent } from './game-archive.component';

describe('GameArchiveComponent', () => {
  let component: GameArchiveComponent;
  let fixture: ComponentFixture<GameArchiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GameArchiveComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GameArchiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});