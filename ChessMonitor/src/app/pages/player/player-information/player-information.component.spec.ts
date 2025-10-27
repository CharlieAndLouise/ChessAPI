import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayerInformationComponent } from './player-information.component';

describe('PlayerInformationComponent', () => {
  let component: PlayerInformationComponent;
  let fixture: ComponentFixture<PlayerInformationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlayerInformationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlayerInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display username when provided', () => {
    component.playerUsername = 'testuser';
    fixture.detectChanges();
    
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.username span')?.textContent).toContain('testuser');
  });

  it('should show no player message when username is not provided', () => {
    component.playerUsername = null;
    fixture.detectChanges();
    
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.no-player p')?.textContent).toContain('No player selected');
  });
});