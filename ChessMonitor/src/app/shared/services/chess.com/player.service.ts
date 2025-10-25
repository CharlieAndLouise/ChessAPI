import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { _Player, transform } from "../../models/player";
import { map } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class PlayerService {
  constructor(private http: HttpClient) { }

  getPlayerProfile(username: string) {
    if (!username) {
      username = 'hikaru';
    }
    return this.http.get<_Player>(`https://api.chess.com/pub/player/${username}/`)
      .pipe(map(player => transform(player)));
  }
}