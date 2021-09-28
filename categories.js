function getPath (pathSelection) {
  let path_dict = {'acanthus':1, 'moros':2, 'obrimos':3, 'mastigos':4, 'thyrsus': 5}
  let roll = 0;
  if (pathSelection === 'random') {
    roll = Math.floor((Math.random() * 5) + 1);
  } else {
    roll = path_dict[pathSelection]
  } 
  switch (roll) {
    case 1:
      return {path: 'Acanthus', ruling: ['time', 'fate'], inferior: 'forces'};
    case 2:
      return {path: 'Moros', ruling: ['matter', 'death'], inferior: 'spirit'};
    case 3:
      return {path: 'Obrimos', ruling: ['forces', 'prime'], inferior: 'death'};
    case 4:
      return {path: 'Mastigos', ruling: ['space', 'mind'], inferior: 'matter'};
    case 5:
      return {path: 'Thyrsus', ruling: ['life', 'spirit'], inferior: 'mind'};
    }
}

function getFaction(orderSelection) {
    const order_list = ['Guardians of the Veil', 'Mysterium', 'Free Council', 'Adamantine Arrow', 'Silver Ladder', 'Seers of the Throne', 'Apostate'];
    let roll = 0;
    if (orderSelection === 'random') {
      roll = Math.floor((Math.random() * order_list.length));
      return order_list[roll]
    } else {
      return orderSelection
    }
}

function getVirtue() {
    let virtueList = ['Love', 'Humility', 'Honesty', 'Passion', 'Generosity', 'Courage', 'Patience', 'Innocence', 'Ambition'];
    const roll = Math.floor((Math.random() * virtueList.length));
    return virtueList[roll];
}

function getVice() {
    let viceList = ['Anger', 'Pride', 'Deceit', 'Envy', 'Avarice', 'Fear', 'Gluttony', 'Lust', 'Sloth'];
    const roll = Math.floor((Math.random() * viceList.length));
    return viceList[roll];
}