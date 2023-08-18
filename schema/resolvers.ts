import _ from 'lodash';
import { PlayersList } from '../data/data';

type Player = {
  id: number;
  name: string;
  age: number;
  club: string;
  country: string;
  position: string;
};

type AddPlayerInput = {
  name: string;
  age: number;
  club: string;
  country: string;
  position: string;
};

export const resolvers = {
  Query: {
    players: (): Player[] => {
      return PlayersList;
    },

    player: (parent: any, args: { id: string }): Player | undefined => {
      const id = args.id;
      const player = _.find(PlayersList, { id: Number(id) });
      return player;
    },

    forwards: (): Player[] => {
      const forwards = _.filter(PlayersList, { position: "Forward" });
      return forwards;
    },

    youngsters: (): Player[] => {
      const youngsters = _.filter(PlayersList, (player: Player) => {
        return player.age <= 23;
      });
      return youngsters;
    },
  },

  Mutation: {
    addPlayer: (parent: any, args: { input: AddPlayerInput }): Player => {
      const playerInput = args.input;
      const newPlayer: Player = {
        id: PlayersList.length + 1,
        ...playerInput
      };
      PlayersList.push(newPlayer);
      return newPlayer;
    },

    deletePlayer: (parent: any, args: { id: string }): Player[] => {
      const id = args.id;
      _.remove(PlayersList, { id: Number(id) });
      return PlayersList;
    },
  },
};
