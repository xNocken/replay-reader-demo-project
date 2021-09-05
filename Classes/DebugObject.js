const OrigDebugObject = require('fortnite-replay-parser/Classes/DebugObject');
const FGameplayTag = require('fortnite-replay-parser/Classes/FGameplayTag');
const FGameplayTagContainer = require('fortnite-replay-parser/Classes/FGameplayTagContainer');
const FName = require('fortnite-replay-parser/Classes/FName');
const FRepMovement = require('fortnite-replay-parser/Classes/FRepMovement');
const ItemDefinition = require('fortnite-replay-parser/Classes/ItemDefinition');

class DebugObject extends OrigDebugObject {
  getValueAsInt16() {
    if (this.data.length < 2) {
      return null;
    }

    return this.data.readInt16LE();
  }

  toJSON() {
    return {
      size: this.size,
      float: this.getValueAsFloat(),
      int32: this.getValueAsInt(),
      int16: this.getValueAsInt16(),
      boolean: this.getValueAsBoolean(),
      string: this.getValueAsString(),
      fGameplayTagContainer: this.getValueAsClass(FGameplayTagContainer),
      fGameplayTag: this.getValueAsClass(FGameplayTag),
      itemDefinition: this.getValueAsClass(ItemDefinition),
      fRepMovement: this.getValueAsClass(FRepMovement),
      fName: this.getValueAsClass(FName),
      fVector: this.getValueAsFVector(),
      intPacked: this.getValueAsIntPacked(),
    };
  }
}

module.exports = DebugObject;
