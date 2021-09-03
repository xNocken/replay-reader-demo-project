const replayParser = require('fortnite-replay-parser');

/**
 * @type {replayParser.NetFieldExport}
 */
module.exports = {
  path: [
    '/Script/FortniteGame.FortPlayerStateAthena',
  ],
  parseLevel: 1,
  exportGroup: 'gameData',
  exportName: 'players',
  exportType: 'array',
  properties: {
    UniqueId: {
      name: 'UniqueId',
      parseFunction: 'readNetId',
      parseType: 'default',
    },
    PlayerNamePrivate: {
      name: 'PlayerNamePrivate',
      parseFunction: 'readString',
      parseType: 'default',
    },
    bIsABot: {
      name: 'bIsABot',
      parseFunction: 'readBit',
      parseType: 'default',
    },
    KillScore: {
      name: 'KillScore',
      parseFunction: 'readInt32',
      parseType: 'default',
    },
    Place: {
      name: 'Place',
      parseFunction: 'readInt32',
      parseType: 'default',
    },
  },
};
