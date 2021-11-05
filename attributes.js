function randomAttributes(level, gnosis) {
  //initialize attributes
    let attributes = {strength: 0, dexterity: 0, stamina: 0,
        inteligence: 0, wits: 0, resolve: 0, presence: 0, 
        manipulation: 0, composure: 0};
  //set attiribute maximum
    const attribMax = 5 + Math.max(0, gnosis - 5);
    let primary = 0;
    let secondary = 0;
    let tertiary = 0;
  //Assign points to categories based on power level
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
  //roll for primary category
  let roll = Math.floor(Math.random()*3);
  if (roll === 0) {
    //assign mental as primary
    assignMentalAttribs(primary, attribMax, attributes);
    //roll for secondary/ tertiary
    roll = Math.floor(Math.random()*2);
    if (roll === 0) {
      //assign physical secondary, social tertiary
        assignPhysicalAttribs(secondary, attribMax, attributes);
        assignSocialAttribs(tertiary, attribMax, attributes);
    } else {
      //assign social secondary, physical tertiary
        assignSocialAttribs(secondary, attribMax, attributes);
        assignPhysicalAttribs(tertiary, attribMax, attributes);
    }
  } else if (roll === 1) {
    //assign physical primary
    assignPhysicalAttribs(primary, attribMax, attributes);
    //roll for secondary/ tertiary
    roll = Math.floor(Math.random()*2);
    if (roll === 0) {
      //assign mental secondary, social tertiary
      assignMentalAttribs(secondary, attribMax, attributes);
      assignSocialAttribs(tertiary, attribMax, attributes);
    } else {
      //assign social secondary, mental tertiary
      assignSocialAttribs(secondary, attribMax, attributes);
      assignMentalAttribs(tertiary, attribMax, attributes);
    } 
  } else {
    //assign social as primary
    assignSocialAttribs(primary, attribMax, attributes);
    //roll for secondary/ tertiary
    roll = Math.floor(Math.random()*2);
    if (roll === 0) {
      //assign mental secondary, physical tertiary
      assignMentalAttribs(secondary, attribMax, attributes);
      assignPhysicalAttribs(tertiary, attribMax, attributes);
    } else {
      //assign physical secondary, mental tertiary
      assignPhysicalAttribs(secondary, attribMax, attributes);
      assignMentalAttribs(tertiary, attribMax, attributes);
      }
    }
  //assign bonus resistance attribute for mages
  let attributeKeys = Object.keys(attributes);
  let points = 1;
  while (points > 0) {
      roll = Math.floor(Math.random()*3);
      if (attributes[attributeKeys[roll*3]] < attribMax) {
        attributes[attributeKeys[roll*3]] += 1;
        points -= 1
      }
  }
  return attributes;
}

function assignDots (points, attribMax) {
  //Set base attributes
    let attributes = {power: 1, finesse: 1, resistance: 1};
  //Extract keys from object
    let attributeKeys = Object.keys(attributes);
    do {
      //randomly divide points between attributes
      roll = Math.floor(Math.random()*3);
      if (attributes[attributeKeys[roll]] < attribMax){
          attributes[attributeKeys[roll]] += 1
          points -= 1
      }
    } while (points > 0);
    return attributes;
}

function assignMentalAttribs(points, attribMax, attributes) {
  //generate generic attribute array
  let attributeSpread = assignDots(points, attribMax);
  //assign points to specific attributes
  attributes.inteligence = attributeSpread.power;
  attributes.wits = attributeSpread.finesse;
  attributes.resolve = attributeSpread.resistance;
}

function assignPhysicalAttribs(points, attribMax, attributes) {
  //generate generic attribute array
  let attributeSpread = assignDots(points, attribMax);
  //assign points to specific attributes
  attributes.strength = attributeSpread.power;
  attributes.dexterity = attributeSpread.finesse;
  attributes.stamina = attributeSpread.resistance;
}

function assignSocialAttribs(points, attribMax, attributes) {
  //generate generic attribute array
  let attributeSpread = assignDots(points, attribMax);
  //assign points to specific attributes
  attributes.presence = attributeSpread.power;
  attributes.manipulation = attributeSpread.finesse;
  attributes.composure = attributeSpread.resistance;
}