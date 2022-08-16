import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Game } from '../models/Game';


@Injectable({
  providedIn: 'root'
})
export class GamesService {
  url : string = 'http://localhost:3000/api'
  constructor(private http : HttpClient) { }

  getGames() : Observable<Game[]>{
    return this.http.get<Game[]>(`${this.url}/games`);
  }

  getGame(id : string) : Observable<Game>{
    return this.http.get<Game>(`${this.url}/games/${id}`);
  }
  saveGame(game : Game) : Observable<Game>{
    return this.http.post(`${this.url}/games`, game);
  }
  deleteGame(id : string) : Observable<Game>{
    return this.http.delete(`${this.url}/games/${id}`);
  }
  updateGame(id: string, updatedGame : Game) : Observable<Game>{
    return this.http.put(`${this.url}/games/${id}`,updatedGame);
  }
}
