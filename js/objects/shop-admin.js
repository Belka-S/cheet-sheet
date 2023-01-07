//  // ******************** Objects ******************** //

const atTheOldToad = {
  potions: [
    { name: 'Speed potion', price: 460 },
    { name: 'Dragon breath', price: 780 },
    { name: 'Stone skin', price: 520 },
  ],
  getPotions() {
    console.table(this.potions);
    return this.potions;
  },
  addPotion(newPotion) {
    for (let i = 0; i < this.potions.length; i += 1) {
      if (this.potions[i].name === newPotion.name) {
        console.log(
          `Can't add! Potion ${newPotion.name} is already in your inventory!`
        );
        return `Can't add! Potion ${newPotion.name} is already in your inventory!`;
      }
    }
    this.potions.push(newPotion);
  },
  removePotion(potionName) {
    for (let i = 0; i < this.potions.length; i += 1) {
      if (this.potions[i].name === potionName) {
        this.potions.splice(i, 1);
        return;
      }
    }
    console.log(`Can't remove! Potion ${potionName} is not in inventory!`);
    return `Can't remove! Potion ${potionName} is not in inventory!`;
  },
  updatePotionName(oldName, newName) {
    for (let i = 0; i < this.potions.length; i += 1) {
      if (this.potions[i].name === oldName) {
        this.potions[i].name = newName;
        return;
      }
    }
    console.log(`Can't rename! Potion ${oldName} is not in inventory!`);
    return `Can't rename! Potion ${oldName} is not in inventory!`;
  },
};
// -----------------------------------------------------------------------------

// atTheOldToad.getPotions();
// atTheOldToad.addPotion({ name: 'Invisibility', price: 620 });
// atTheOldToad.addPotion({ name: 'Power potion', price: 270 });
// atTheOldToad.addPotion({ name: 'Dragon breath', price: 700 });
// atTheOldToad.addPotion({ name: 'Stone skin', price: 240 });
// atTheOldToad.addPotion({ name: 'Dragon breath', price: 700 });
// atTheOldToad.getPotions();
// atTheOldToad.removePotion('Dragon breath');
// atTheOldToad.removePotion('Polymorth');
// atTheOldToad.getPotions();
// atTheOldToad.updatePotionName('Dragon breath', 'Polymorth');
// atTheOldToad.updatePotionName('Stone skin', 'Invulnerability potion');
// atTheOldToad.getPotions();
