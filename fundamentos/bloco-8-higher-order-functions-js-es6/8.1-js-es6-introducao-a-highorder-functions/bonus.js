const mage = {
  healthPoints: 130,
  intelligence: 45,
  mana: 125,
  damage: undefined,
};

const warrior = {
  healthPoints: 200,
  strength: 30,
  weaponDmg: 2,
  damage: undefined,
};

const dragon = {
  healthPoints: 350,
  strength: 50,
  damage: undefined,
};

const battleMembers = { mage, warrior, dragon };

const dragonAtk = (dragon) => {
  const dragonDmg =  Math.floor(Math.random() * ((dragon.strength + 1) - 15) + 15)
  return dragonDmg
};

const warriorAtk = (warrior) => {
  const warriorDmg = Math.floor(Math.random() * ((warrior.strength * warrior.weaponDmg + 1) - warrior.strength) + warrior.strength)
  return warriorDmg
};

const mageAtk = (mage) => {
    const mageMana = mage.mana;
    const maxDmg = mage.intelligence * 2
    const minDmg = mage.intelligence
    const turn = {
      manaSpent: 0,
      damage: 'Doesn`t have enough mana' 
    }
  
    if(mageMana > 15){
      const dmgDealth = Math.floor((Math.random() * (maxDmg - minDmg + 1)) + minDmg);
      turn.manaSpent = 15;
      turn.damage = dmgDealth
    }

    return turn
  
}


const gameActions = {
warriorTurn: (warriorAttack) => {
  const warriorDmg = warriorAttack(warrior)
  warrior.damage = warriorDmg;
  dragon.healthPoints -= warriorDmg;
  
  },

mageTurn: (mageAttack) => {
  const mageStats = mageAttack(mage)
  const mageDmg = mageStats.damage
  const {manaSpent} = mageStats
  mage.damage = mageDmg
  mage.mana -= manaSpent
  dragon.healthPoints -= mageDmg

  },

dragonTurn: (dragonAttack) => {
  const dragonDmg = dragonAttack(dragon)
  dragon.damage = dragonDmg
  warrior.healthPoints -= dragonDmg
  mage.healthPoints -= dragonDmg

},

turnResults: () => battleMembers,
};


gameActions.warriorTurn(warriorAtk);
gameActions.mageTurn(mageAtk);
gameActions.dragonTurn(dragonAtk);
console.log(gameActions.turnResults());

