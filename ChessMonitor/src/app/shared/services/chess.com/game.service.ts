import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Game } from "../../models";
import { map, of, tap } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class GameService {

  cache: { [username: string]: { [month: number]: Game[] } } = {};

  constructor(private http: HttpClient) { }

  getGameLists(username: string, year: number, month: number) {

    if (this.cache[username] && this.cache[username][month]) {
      return of(this.cache[username][month]);
    }

    const strMonth = month < 10 ? `0${month}` : month;
    return this.http.get<{ games: Game[] }>(`https://api.chess.com/pub/player/${username}/games/${year}/${strMonth}`).pipe(
      map(response => response.games),
      tap(games => {
        if (!this.cache[username]) {
          this.cache[username] = {};
        }
        this.cache[username][month] = games;
      })
    );
  }

  getRateByMonths(username: string, year: number) {

  }

  getRateByDays(username: string, year: number, month: number) {

  }

  
}