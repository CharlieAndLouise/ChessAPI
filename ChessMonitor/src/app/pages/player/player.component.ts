import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SharedModule } from '../../shared';
import { PlayerInformationComponent } from './player-information/player-information.component';
import { GameArchiveComponent } from './game-archive/game-archive.component';

@Component({
  selector: 'app-player',
  standalone: true,
  imports: [SharedModule, PlayerInformationComponent, GameArchiveComponent],
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.scss']
})
export class PlayerComponent implements OnInit {
  playerUsername: string = '';

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.playerUsername = params['username'] || '';
    });


  }
}