const { PlayersList } = require('../data/data');
const _ = require('lodash');

const resolvers = {
  
  Query: {
    players: () => {
      return PlayersList;
    },

    player: (parent, args) => {
      const id = args.id;
      const player = _.find(PlayersList, { id: Number(id) });
    },

    forwards: () => {
      const forwards = _.filter(PlayersList, { position: "Forward" });
      return forwards;
    },

    youngsters: () => {
      const youngsters = _.filter(PlayersList, (player) => {
        return player.age <= 23;
      });
      return youngsters;
    },
  },

  Mutation: {
    addPlayer: (parent, args) => {
      const player = args.input;
      player.id = PlayersList.length + 1;
      PlayersList.push(player);
      return player;
    },

    deletePlayer: (parent, args) => {
      const id = args.id;
      _.remove(PlayersList, { id: Number(id) });
      return PlayersList;
    },
  },
};  

module.exports = { resolvers };