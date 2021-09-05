const replayParser = require('fortnite-replay-parser');

/**
 * @param {replayParser.PropertyExport} param0
 */
const handleSlurpTruck = ({ data, result, states, staticActorId, timeSeconds }) => {
  let truck = states.slurptruck[staticActorId];

  if (!truck) {
    truck = {
      staticActorId,
    };

    states.slurptruck[staticActorId] = truck;
    result.mapData.slurptruck.push(truck);
  }

  const updateProperty = (name, val) => {
    if (val !== undefined) {
      truck[name] = val;
    }
  };

  updateProperty('bReplicateMovement', data.bReplicateMovement);
  updateProperty('ReplicatedMovement', data.ReplicatedMovement);
  updateProperty('Health', data.Health);
  updateProperty('MaxHealth', data.MaxHealth);

  if (data.bDestroyed) {
    truck.bDestroyed = true;
    truck.DestroyedAt = timeSeconds;
  }
};

module.exports = handleSlurpTruck;
