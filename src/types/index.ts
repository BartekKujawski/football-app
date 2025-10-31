export type Menu = 'players' | 'teams' | 'games' | 'statistics';

export type Player = {
    id: string;
    name: string;
    surname: string;
    number: number;
    teamId?: string;
};

export type PlayerDto = Omit<Player, 'id'>;

export type PlayerEditDto = {
    id: string;
    playerPayload: PlayerDto;
};
