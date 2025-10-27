
export interface Game {
  url: string;
  rated: boolean;
  accuracies?: {
    white: number | null;
    black: number | null;
  };
  white: Party;
  black: Party;
  eco: string;
}

export interface Party {
  rating: number;
  result: 'win' | 'checkmated' | 'lose' | 'agreed' | 'repetition' | 'timeout' | 'resigned' | 'stalemate' | 'lose' | 'insufficient' | '50move' | 'abandoned' ;
}