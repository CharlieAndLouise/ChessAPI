import { Component } from '@angular/core';
import { SharedModule } from '../../shared';
import { PlayerService } from '../../shared/services/chess.com/player.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ SharedModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  title = 'Chess Monitor';
  playerUsername = 'hikaru';

  constructor(
    private playerService: PlayerService,
    private router: Router
  ) { 
    this.playerService.getPlayerProfile(this.playerUsername).subscribe(
      profile => {
        console.log('Player Profile:', profile);
      }
    );
  }

  gotoPlayerPage() {
    this.router.navigate(['/player', this.playerUsername]);
  }
}