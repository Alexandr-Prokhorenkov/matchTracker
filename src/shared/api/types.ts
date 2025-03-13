export interface Player {
  username: string;
  kills: number;
}

export interface Team {
  name: string;
  place: number;
  players: Player[];
  points: number;
  total_kills: number;
}

export interface Match {
  title: string;
  time: string;
  status: "Finished" | "Ongoing" | "Scheduled";
  awayScore: number;
  homeScore: number;
  awayTeam: Team;
  homeTeam: Team;
}

export interface MatchesResponse {
  ok: boolean;
  data: {
    matches: Match[];
  };
}
