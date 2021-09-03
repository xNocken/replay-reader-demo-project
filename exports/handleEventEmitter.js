const replayParser = require('fortnite-replay-parser');
const handlePlayerState = require('./propertyExports/handlePlayerState');
const handleSafezone = require('./propertyExports/handleSafezone');

/**
 * @param {replayParser.EventEmittersObject} param0
 */
const handleEventEmitter = ({ propertyExportEmitter }) => {
  propertyExportEmitter.on('SafeZoneIndicator.SafeZoneIndicator_C', handleSafezone);
  propertyExportEmitter.on('FortniteGame.FortPlayerStateAthena', handlePlayerState);
};

module.exports = handleEventEmitter;
