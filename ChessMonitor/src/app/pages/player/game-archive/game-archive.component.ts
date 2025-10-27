import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GameService } from '../../../shared/services/chess.com/game.service';
import { Game, SharedModule } from '../../../shared';

@Component({
  selector: 'app-game-archive',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './game-archive.component.html',
  styleUrl: './game-archive.component.scss'
})
export class GameArchiveComponent implements OnInit {
  @Input() playerUsername: string | null = null;
  games: Game[] = [];
  loading: boolean = false;
  selectedYear: number = new Date().getFullYear();
  selectedMonth: number = new Date().getMonth() + 1;

  constructor(private gameService: GameService) {}

  ngOnInit() {
    if (this.playerUsername) {
      this.loadGames();
    }
  }

  loadGames() {
    if (!this.playerUsername) return;
    
    this.loading = true;
    this.gameService.getGameLists(this.playerUsername, this.selectedYear, this.selectedMonth).subscribe({
      next: (games) => {
        this.games = games;
        this.loading = false;
        console.log('Games loaded:', games);
      },
      error: (error) => {
        console.error('Error loading games:', error);
        this.loading = false;
      }
    });
  }

  onMonthChange(event: Event) {
    const target = event.target as HTMLSelectElement;
    this.selectedMonth = parseInt(target.value);
    this.loadGames();
  }

  onYearChange(event: Event) {
    const target = event.target as HTMLSelectElement;
    this.selectedYear = parseInt(target.value);
    this.loadGames();
  }

  trackByGameUrl(index: number, game: Game): string {
    return game.url;
  }

  getGameResult(game: Game, username: string): string {
    const isWhite = game.white.rating !== undefined;
    const isPlayerWhite = username === this.playerUsername && isWhite;
    const isPlayerBlack = username === this.playerUsername && !isWhite;
    
    if (isPlayerWhite) {
      return game.white.result;
    } else if (isPlayerBlack) {
      return game.black.result;
    }
    return 'unknown';
  }

  getOpponentName(game: Game): string {
    // This would need to be enhanced based on your Game model structure
    // For now, returning a placeholder
    return 'Opponent';
  }
}