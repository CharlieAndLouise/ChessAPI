import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlayerService } from '../../../shared/services/chess.com/player.service';
import { Player, SharedModule } from '../../../shared';

@Component({
  selector: 'app-player-information',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './player-information.component.html',
  styleUrl: './player-information.component.scss'
})
export class PlayerInformationComponent {
  @Input() playerUsername: string | null = null;
  profile!: Player;

  constructor(private playerService: PlayerService) { 
    
  }

  ngOnInit() {
    if (this.playerUsername) {
      this.playerService.getPlayerProfile(this.playerUsername).subscribe(
        profile => {
          this.profile = profile;
          console.log('Player Profile:', profile);
        }
      );
    }
  }
}