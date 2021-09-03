const replayParser = require('fortnite-replay-parser');

/**
 * @type {replayParser.NetFieldExport}
 */
module.exports = {
  path: [
    '/Game/Athena/SafeZone/SafeZoneIndicator.SafeZoneIndicator_C'
  ],
  parseLevel: 1,
  exportGroup: 'gameData',
  exportName: 'safeZones',
  exportType: 'array',
  properties: {
    LastRadius: {
      name: 'LastRadius',
      parseFunction: 'readFloat32',
      parseType: 'default',
    },
    NextRadius: {
      name: 'NextRadius',
      parseFunction: 'readFloat32',
      parseType: 'default',
    },
    LastCenter: {
      name: 'LastCenter',
      parseFunction: 'readPackedVector100',
      parseType: 'default',
    },
    NextCenter: {
      name: 'NextCenter',
      parseFunction: 'readPackedVector100',
      parseType: 'default',
    },
    NextNextCenter: {
      name: 'NextNextCenter',
      parseFunction: 'readPackedVector100',
      parseType: 'default',
    },
    SafeZoneStartShrinkTime: {
      name: 'SafeZoneStartShrinkTime',
      parseFunction: 'readFloat32',
      parseType: 'default',
    },
    SafeZoneFinishShrinkTime: {
      name: 'SafeZoneFinishShrinkTime',
      parseFunction: 'readFloat32',
      parseType: 'default',
    },
    bPausedForPreview: {
      name: 'bPausedForPreview',
      parseFunction: 'readBit',
      parseType: 'default',
    },
    MegaStormDelayTimeBeforeDestruction: {
      name: 'MegaStormDelayTimeBeforeDestruction',
      parseFunction: 'readFloat32',
      parseType: 'default',
    },
    Radius: {
      name: 'Radius',
      parseFunction: 'readFloat32',
      parseType: 'default',
    },
  },
};
