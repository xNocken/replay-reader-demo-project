const replayParser = require('fortnite-replay-parser');

/**
 * @type {replayParser.NetFieldExport}
 */
module.exports = {
  path: [
    '/Game/Athena/Items/Gameplay/SilkyTrombone/Tanker/Athena_Prop_SilkyTanker.Athena_Prop_SilkyTanker_C',
  ],
  exportName: 'slurptruck',
  exportGroup: 'mapData',
  exportType: 'array',
  staticActorIds: [
    'Athena_Prop_SilkyTanker',
    'Car_SemiTruck_Tanker'
  ],
  parseLevel: 1,
  properties: {
    bReplicateMovement: {
      name: 'bReplicateMovement',
      parseFunction: 'readBit',
      parseType: 'default',
    },
    ReplicatedMovement: {
      name: 'ReplicatedMovement',
      type: 'FRepMovement',
      parseType: 'readClass',
    },
    bDestroyed: {
      name: 'bDestroyed',
      parseFunction: 'readBit',
      parseType: 'default',
    },
    Health: {
      name: 'Health',
      parseFunction: 'readInt16',
      parseType: 'default',
    },
    MaxHealth: {
      name: 'MaxHealth',
      type: 'DebugObject',
      parseType: 'readClass',
    },
  },
}
