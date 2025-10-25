
//https://api.chess.com/pub/player/hikaru
export interface _Player {
  player_id: number;
  avatar: string;
  url: string;
  name: string;
  username: string;
  title: string;
  country: string;
  twitch_url: string;
}

export interface Player {
  playerId: number;
  avatar: string;
  url: string;
  name: string;
  username: string;
  title: string;
  country: string;
  twitchUrl: string;
}

export function transform(player: _Player): Player {
  return {
    playerId: player.player_id,
    avatar: player.avatar,
    url: player.url,
    name: player.name,
    username: player.username,
    title: player.title,
    country: player.country,
    twitchUrl: player.twitch_url
  };
}