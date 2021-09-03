const replayReader = require('fortnite-replay-parser');
const handleEventEmitter = require('./exports/handleEventEmitter');
const NetFieldExports = require('./NetFieldExports');
const fs = require('fs');

(async () => {
  const replayBinary = fs.readFileSync('replays/server-17.21.replay');

  console.time();
  const replay = await replayReader(replayBinary, {
    handleEventEmitter,
    customNetFieldExports: NetFieldExports,
    onlyUseCustomNetFieldExports: true,
  });
  console.timeEnd();

  fs.writeFileSync('result.json', JSON.stringify(replay, null, 2));
})();
