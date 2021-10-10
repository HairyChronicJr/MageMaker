function randomAttributes(level, gnosis) {
    let attributes = {strength: 0, dexterity: 0, stamina: 0,
        inteligence: 0, wits: 0, resolve: 0, presence: 0, 
        manipulation: 0, composure: 0};
    const attribMax = 5 + Math.max(0, gnosis - 5);
    let primary = 0;
    let secondary = 0;
    let tertiary = 0;
    if (level === 'starting') {
        primary = 5
        secondary = 4
        tertiary = 3
    } else if (level === 'disciple') {
        primary = 8 + Math.floor(Math.random()*4);
        secondary = 7 + Math.floor(Math.random()*2);
        tertiary = 6 + Math.floor(Math.random()*2); 
    } else if (level === 'adept') {
        primary = 9 + Math.floor(Math.random()*3);
        secondary = 7 + Math.floor(Math.random()*5);
        tertiary = 6 + Math.floor(Math.random()*3);
    } else if (level === 'master') {
        primary = 11 + Math.floor(Math.random()*6);
        secondary = 9 + Math.floor(Math.random()*8);
        tertiary = 7 + Math.floor(Math.random()*6);
    }
  let roll = Math.floor(Math.random()*3);
  if (roll === 0) {
    console.log('Before assign:', attributes);
    assignMentalAttribs(primary, attribMax, attributes);
    console.log('Primary mental:', attributes);
    roll = Math.floor(Math.random()*2);
    if (roll === 0) {
        assignPhysicalAttribs(secondary, attribMax, attributes);
        assignSocialAttribs(tertiary, attribMax, attributes);
    } else {
        assignSocialAttribs(secondary, attribMax, attributes);
        assignPhysicalAttribs(tertiary, attribMax, attributes);
    }
  } else if (roll === 1) {
    assignPhysicalAttribs(primary, attribMax, attributes);
    roll = Math.floor(Math.random()*2);
    if (roll === 0) {
      assignMentalAttribs(secondary, attribMax, attributes);
      assignSocialAttribs(tertiary, attribMax, attributes);
    } else {
      assignSocialAttribs(secondary, attribMax, attributes);
      assignMentalAttribs(tertiary, attribMax, attributes);
    } 
  } else {
    assignSocialAttribs(primary, attribMax, attributes);
    roll = Math.floor(Math.random()*2);
    if (roll === 0) {
      assignMentalAttribs(secondary, attribMax, attributes);
      assignPhysicalAttribs(tertiary, attribMax, attributes);
    } else {
      assignPhysicalAttribs(secondary, attribMax, attributes);
      assignMentalAttribs(tertiary, attribMax, attributes);
      }
    }
  let attributeKeys = Object.keys(attributes);
  let points = 1;
  while (points > 0) {
      roll = Math.floor(Math.random()*3);
      if (attributes[attributeKeys[roll*3]] < attribMax) {
        attributes[attributeKeys[roll*3]] += 1;
        points -= 1
      }
  }
  console.log(attributes);
  return attributes;
}

function assignDots (points, attribMax) {
    let attributes = {power: 1, finesse: 1, resistance: 1};
    let attributeKeys = Object.keys(attributes);
    do {
      roll = Math.floor(Math.random()*3);
      if (attributes[attributeKeys[roll]] < attribMax){
          attributes[attributeKeys[roll]] += 1
          points -= 1
      }
    } while (points > 0);
    return attributes;
}

function assignMentalAttribs(points, attribMax, attributes) {
  console.log('Mental points:', points);
  let attributeSpread = assignDots(points, attribMax);
  attributes.inteligence = attributeSpread.power;
  attributes.wits = attributeSpread.finesse;
  attributes.resolve = attributeSpread.resistance;
}

function assignPhysicalAttribs(points, attribMax, attributes) {
  console.log('Physical points:', points);
  let attributeSpread = assignDots(points, attribMax);
  attributes.strength = attributeSpread.power;
  attributes.dexterity = attributeSpread.finesse;
  attributes.stamina = attributeSpread.resistance;
}

function assignSocialAttribs(points, attribMax, attributes) {
  console.log('Social points:', points);
  let attributeSpread = assignDots(points, attribMax);
  attributes.presence = attributeSpread.power;
  attributes.manipulation = attributeSpread.finesse;
  attributes.composure = attributeSpread.resistance;
}