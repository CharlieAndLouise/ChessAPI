import { Component } from '@angular/core';
import { SharedModule } from '../../shared';
import { PlayerService } from '../../shared/services/chess.com/player.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ SharedModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  title = 'Chess Monitor';
  
  constructor(private playerService: PlayerService) { 
    this.playerService.getPlayerProfile('hikaru').subscribe(
      profile => {
        console.log('Player Profile:', profile);
      }
    );
  }
}