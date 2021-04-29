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

function randomAttributes(level, gnosis) {
    let attributes = {strength: 0, dexterity: 0, stamina: 0,
        inteligence: 0, wits: 0, resolve: 0, presence: 0, 
        manipulation: 0., composure: 0};
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
    let attributeSpread = assignDots(primary, attribMax);
    //mental primary
    //console.log('Mental Primary');
    attributes.inteligence = attributeSpread.power;
    attributes.wits = attributeSpread.finesse;
    attributes.resolve = attributeSpread.resistance;
    roll = Math.floor(Math.random()*2);
    if (roll === 0) {
        //physical secondary
        attributeSpread = assignDots(secondary, attribMax);
        attributes.strength = attributeSpread.power;
        attributes.dexterity = attributeSpread.finesse;
        attributes.stamina = attributeSpread.resistance;
        //social tertiary
        attributeSpread = assignDots(tertiary, attribMax);
        attributes.presence = attributeSpread.power;
        attributes.manipulation = attributeSpread.finesse;
        attributes.composure = attributeSpread.resistance;
    } else {
        //social secondary
        attributeSpread = assignDots(secondary, attribMax);
        attributes.presence = attributeSpread.power;
        attributes.manipulation = attributeSpread.finesse;
        attributes.composure = attributeSpread.resistance;
        //physical tertiary
        attributeSpread = assignDots(tertiary, attribMax);
        attributes.strength = attributeSpread.power;
        attributes.dexterity = attributeSpread.finesse;
        attributes.stamina = attributeSpread.resistance;
    }
} else if (roll === 1) {
        //physical primary
        //console.log('Physical Primary');
        attributeSpread = assignDots(primary, attribMax);
        attributes.strength = attributeSpread.power;
        attributes.dexterity = attributeSpread.finesse;
        attributes.stamina = attributeSpread.resistance;
        roll = Math.floor(Math.random()*2);
        if (roll === 0) {
            //mental secondary
            attributeSpread = assignDots(secondary, attribMax);
            attributes.inteligence = attributeSpread.power;
            attributes.wits = attributeSpread.finesse;
            attributes.resolve = attributeSpread.resistance;
            //social tertiary
            attributeSpread = assignDots(tertiary, attribMax);
            attributes.presence = attributeSpread.power;
            attributes.manipulation = attributeSpread.finesse;
            attributes.composure = attributeSpread.resistance;
        } else {
            //social secondary
            attributeSpread = assignDots(secondary, attribMax);
            attributes.presence = attributeSpread.power;
            attributes.manipulation = attributeSpread.finesse;
            attributes.composure = attributeSpread.resistance;
            //mental tertiary
            attributeSpread = assignDots(tertiary, attribMax);
            attributes.inteligence = attributeSpread.power;
            attributes.wits = attributeSpread.finesse;
            attributes.resolve = attributeSpread.resistance;
        }
} else {
    //social primary
    //console.log('Social Primary');
    attributeSpread = assignDots(primary, attribMax);
    attributes.presence = attributeSpread.power;
    attributes.manipulation = attributeSpread.finesse;
    attributes.composure = attributeSpread.resistance;
    roll = Math.floor(Math.random()*2);
    if (roll === 0) {
        //mental secondary
        //console.log('Mental Secondary');
        attributeSpread = assignDots(secondary, attribMax);
        attributes.inteligence = attributeSpread.power;
        attributes.wits = attributeSpread.finesse;
        attributes.resolve = attributeSpread.resistance;
        //physical tertiary
        attributeSpread = assignDots(tertiary, attribMax);
        attributes.strength = attributeSpread.power;
        attributes.dexterity = attributeSpread.finesse;
        attributes.stamina = attributeSpread.resistance;
    } else {
        //physical secondary
        //console.log('Physical Secondary');
        attributeSpread = assignDots(secondary, attribMax);
        attributes.strength = attributeSpread.power;
        attributes.dexterity = attributeSpread.finesse;
        attributes.stamina = attributeSpread.resistance;
        //mental tertiary
        attributeSpread = assignDots(tertiary, attribMax);
        attributes.inteligence = attributeSpread.power;
        attributes.wits = attributeSpread.finesse;
        attributes.resolve = attributeSpread.resistance;
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
return attributes;
}

function randomSkill(level, gnosis) {
    let allSkills = {academics: 0, computer: 0, crafts: 0, investigation: 0, 
          medicine: 0, occult: 0, politics: 0, science: 0, athletics: 0, 
          brawl: 0, drive: 0, firearms: 0, larceny: 0, stealth: 0, 
          survival: 0, weaponry: 0, animalKen: 0, empathy: 0, 
          expression: 0, intimidation: 0, persuasion: 0, socialize: 0, 
          streetwise: 0, subterfuge: 0};
    let primary = 11;
    let secondary = 7;
    let tertiary = 4;
    /*if (level === 'starting') {
      primary = 11;
      secondary = 7;
      tertiary = 4;
    } else if (level === 'disciple') {
      primary = 11 + Math.floor(Math.random()*11);
      secondary = 7 + Math.floor(Math.random()*7);
      tertiary = 4 + Math.floor(Math.random()*4);
    } else if (level === 'adept') {
      primary = 10 + Math.floor(Math.random()*13);
      secondary = 8 + Math.floor(Math.random()*10);
      tertiary = 4 + Math.floor(Math.random()*10);
    } else if (level === 'master') {
      primary = 10 + Math.floor(Math.random()*17);
      secondary = 9 + Math.floor(Math.random()*10);
      tertiary = 4 + Math.floor(Math.random()*10);
    }*/
    const skillMax = 5 + Math.max(0, gnosis - 5);
    let roll = Math.floor(Math.random()*3);
    if (roll === 0) {
      let skills = assignSkills(primary, skillMax);
      //mental primary
      //console.log('Mental skills primary');
      allSkills.academics = skills.skillOne;
      allSkills.computer = skills.skillTwo;
      allSkills.crafts = skills.skillThree;
      allSkills.investigation = skills.skillFour;
      allSkills.medicine = skills.skillFive; 
      allSkills.occult = skills.skillSix;
      allSkills.politics = skills.skillSeven;
      allSkills.science = skills.skillEight;
      roll = Math.floor(Math.random()*2);
      if (roll === 0) {
        //physical secondary
        //console.log('Physical skills secondary');
        skills = assignSkills(secondary, skillMax);
        allSkills.athletics = skills.skillOne;
        allSkills.brawl = skills.skillTwo;
        allSkills.drive = skills.skillThree;
        allSkills.firearms = skills.skillFour;
        allSkills.larceny = skills.skillFive; 
        allSkills.stealth = skills.skillSix;
        allSkills.survival = skills.skillSeven;
        allSkills.weaponry = skills.skillEight;
        //social tertiary
        skills = assignSkills(tertiary, skillMax);
        allSkills.animalKen = skills.skillOne;
        allSkills.empathy = skills.skillTwo;
        allSkills.expression = skills.skillThree;
        allSkills.intimidation = skills.skillFour;
        allSkills.persuasion = skills.skillFive; 
        allSkills.socialize = skills.skillSix;
        allSkills.streetwise = skills.skillSeven;
        allSkills.subterfuge = skills.skillEight;
      } else {
        //social secondary
        //console.log('Social skills secondary');
        skills = assignSkills(secondary, skillMax);
        allSkills.animalKen = skills.skillOne;
        allSkills.empathy = skills.skillTwo;
        allSkills.expression = skills.skillThree;
        allSkills.intimidation = skills.skillFour;
        allSkills.persuasion = skills.skillFive; 
        allSkills.socialize = skills.skillSix;
        allSkills.streetwise = skills.skillSeven;
        allSkills.subterfuge = skills.skillEight;
        //physical tertiary
        skills = assignSkills(tertiary, skillMax);
        allSkills.athletics = skills.skillOne;
        allSkills.brawl = skills.skillTwo;
        allSkills.drive = skills.skillThree;
        allSkills.firearms = skills.skillFour;
        allSkills.larceny = skills.skillFive; 
        allSkills.stealth = skills.skillSix;
        allSkills.survival = skills.skillSeven;
        allSkills.weaponry = skills.skillEight;
      }
    } else if (roll === 1) {
      let skills = assignSkills(primary, skillMax);
      //physical primary
      //console.log('Physical skills primary');
      allSkills.athletics = skills.skillOne;
      allSkills.brawl = skills.skillTwo;
      allSkills.drive = skills.skillThree;
      allSkills.firearms = skills.skillFour;
      allSkills.larceny = skills.skillFive; 
      allSkills.stealth = skills.skillSix;
      allSkills.survival = skills.skillSeven;
      allSkills.weaponry = skills.skillEight;
      roll = Math.floor(Math.random()*2);
      if (roll === 0) {
        //social secondary
        //console.log('Social skills secondary');
        skills = assignSkills(secondary, skillMax);
        allSkills.animalKen = skills.skillOne;
        allSkills.empathy = skills.skillTwo;
        allSkills.expression = skills.skillThree;
        allSkills.intimidation = skills.skillFour;
        allSkills.persuasion = skills.skillFive; 
        allSkills.socialize = skills.skillSix;
        allSkills.streetwise = skills.skillSeven;
        allSkills.subterfuge = skills.skillEight;
        //mental tertiary
        skills = assignSkills(tertiary, skillMax);
        allSkills.academics = skills.skillOne;
        allSkills.computer = skills.skillTwo;
        allSkills.crafts = skills.skillThree;
        allSkills.investigation = skills.skillFour;
        allSkills.medicine = skills.skillFive; 
        allSkills.occult = skills.skillSix;
        allSkills.politics = skills.skillSeven;
        allSkills.science = skills.skillEight;
      } else {
        //mental secondary
        //console.log('Mental skills secondary');
        skills = assignSkills(secondary, skillMax);
        allSkills.academics = skills.skillOne;
        allSkills.computer = skills.skillTwo;
        allSkills.crafts = skills.skillThree;
        allSkills.investigation = skills.skillFour;
        allSkills.medicine = skills.skillFive; 
        allSkills.occult = skills.skillSix;
        allSkills.politics = skills.skillSeven;
        allSkills.science = skills.skillEight;
        //social tertiary
        skills = assignSkills(tertiary, skillMax);
        allSkills.animalKen = skills.skillOne;
        allSkills.empathy = skills.skillTwo;
        allSkills.expression = skills.skillThree;
        allSkills.intimidation = skills.skillFour;
        allSkills.persuasion = skills.skillFive; 
        allSkills.socialize = skills.skillSix;
        allSkills.streetwise = skills.skillSeven;
        allSkills.subterfuge = skills.skillEight;
      }
    } else if (roll === 2) {
      let skills = assignSkills(primary, skillMax);
      //social primary
      //console.log('Social skills primary');
      allSkills.animalKen = skills.skillOne;
      allSkills.empathy = skills.skillTwo;
      allSkills.expression = skills.skillThree;
      allSkills.intimidation = skills.skillFour;
      allSkills.persuasion = skills.skillFive; 
      allSkills.socialize = skills.skillSix;
      allSkills.streetwise = skills.skillSeven;
      allSkills.subterfuge = skills.skillEight;
      roll = Math.floor(Math.random()*2);
      if (roll === 0) {
        //physical secondary
        //console.log('Physical skills secondary');
        skills = assignSkills(secondary, skillMax);
        allSkills.athletics = skills.skillOne;
        allSkills.brawl = skills.skillTwo;
        allSkills.drive = skills.skillThree;
        allSkills.firearms = skills.skillFour;
        allSkills.larceny = skills.skillFive; 
        allSkills.stealth = skills.skillSix;
        allSkills.survival = skills.skillSeven;
        allSkills.weaponry = skills.skillEight;
        //mental tertiary
        skills = assignSkills(tertiary, skillMax);
        allSkills.academics = skills.skillOne;
        allSkills.computer = skills.skillTwo;
        allSkills.crafts = skills.skillThree;
        allSkills.investigation = skills.skillFour;
        allSkills.medicine = skills.skillFive; 
        allSkills.occult = skills.skillSix;
        allSkills.politics = skills.skillSeven;
        allSkills.science = skills.skillEight;
      } else {
        //mental secondary
        //console.log('Mental skills secondary');
        skills = assignSkills(secondary, skillMax);
        allSkills.academics = skills.skillOne;
        allSkills.computer = skills.skillTwo;
        allSkills.crafts = skills.skillThree;
        allSkills.investigation = skills.skillFour;
        allSkills.medicine = skills.skillFive; 
        allSkills.occult = skills.skillSix;
        allSkills.politics = skills.skillSeven;
        allSkills.science = skills.skillEight;
        //physical tertiary
        skills = assignSkills(tertiary, skillMax);
        allSkills.athletics = skills.skillOne;
        allSkills.brawl = skills.skillTwo;
        allSkills.drive = skills.skillThree;
        allSkills.firearms = skills.skillFour;
        allSkills.larceny = skills.skillFive; 
        allSkills.stealth = skills.skillSix;
        allSkills.survival = skills.skillSeven;
        allSkills.weaponry = skills.skillEight;
      }
    }
    return allSkills;
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

function assignSkills(points, skillMax) {
    let skills = {skillOne: 0, skillTwo: 0, skillThree: 0, skillFour: 0,
    skillFive: 0, skillSix: 0, skillSeven: 0, skillEight: 0}
    let skillKeys = Object.keys(skills);
    do {
      roll = Math.floor(Math.random()*8);
      if (skills[skillKeys[roll]] < skillMax ){
          skills[skillKeys[roll]] += 1
          points -= 1
      }
    } while (points > 0);
    return skills;
}

function generateGnosis(level) {
  let roll = 0;
  if (level === 'adept') {
    roll = Math.floor(Math.random()*3)+4;
  } else if (level === 'master') {
    roll = Math.floor(Math.random()*3)+7;
  } else {
    roll = Math.floor((Math.random()*3+1));
  }
    return roll;
}

function arcana(powerLevel, path) {
    let arcanum = {'death': 0, 'fate':0, 'forces':0, 'life':0,
    'matter':0, 'mind':0, 'prime':0, 'space':0, 'spirit':0, 'time':0};
    let dots = 0;
    if (powerLevel ==='starting') {
      dots = 6;
    } else if (powerLevel === 'disciple') {
      dots = 6 + Math.round(Math.random()*4);
    } else if (powerLevel === 'adept') {
      dots = 8 + Math.round(Math.random()*8);
    } else if (powerLevel === 'master') {
      dots = 10 + Math.round(Math.random()*7);
    }
    for (sphere in arcanum) {
      if (sphere === path.ruling[0] || sphere === path.ruling[1]) {
        arcanum[sphere] += 1;
        dots -= 1;
      }
    }
    let roll = Math.floor(Math.random()*2);
    arcanum[path.ruling[roll]] += 1;
    dots -= 1;
    sphereList = Object.keys(arcanum);
    while (dots > 0) {
      roll = Math.floor(Math.random()*10);
      if (sphereList[roll] != path.inferior) {
         arcanum[sphereList[roll]] += 1;
         dots -= 1;
      }
    }
    return arcanum;
}

function calculated (attributes, gnosis, skills){
    let size = 5;
    let virtue = getVirtue()
    let vice = getVice()
    if (attributes.wits <= attributes.dexterity) {
      defense = attributes.wits + skills.athletics;
    } else {
      defense = attributes.dexterity + skills.athletics;
    }
    let values = {size: size, health: attributes.stamina+size, willpower: attributes.resolve + attributes.composure, initiative: attributes.dexterity + attributes.composure, speed: attributes.strength + attributes.dexterity + 5,  defense: defense, wisdom: 7, mana: (10 + (gnosis - 1)), virtue: virtue, vice: vice};
    return values;
  }

function randomMerits(gnosis, faction, skills, attributes, spheres, level) {
  let merits = {};
  let meritPoints = 0;
  let roll = 0;
  if (faction != 'Apostate') {
    merits['High Speech'] = 1;
    merits['Order Status('+faction+')'] = 1;
  }
  if (level === 'starting') {
    meritPoints = 15 - ((gnosis) * 5);
  } else if (level === 'disciple') {
    meritPoints = 10 + Math.round(Math.random()*13);
  } else if (level === 'adept') {
    meritPoints = 10 + Math.round(Math.random()*27);
  } else if (level === 'master') {
    meritPoints = 15 + Math.floor(Math.random()*22); 
  }
  //meritPoints = 3;
  while (meritPoints > 0) {
  let allMerits = [{name: "Imbued Item", min: 1, max: 10, increment: 1, requirements: true},
  {name:"Enhanced Item", min: 1, max: 10, increment: 1, requirements: true},
  {name:"Adamant Hand(Brawl)", min:2, max:2, increment: 0, requirements:(merits['Order Status(Adamantine Arrow)'] > 0 && skills.brawl > 2)},
  {name:"Adamant Hand(Weaponry)", min:2, max:2, increment: 0, requirements:(merits['Order Status(Adamantine Arrow)'] > 0 && skills.weaponry > 2)},
  {name:"Adamant Hand(Athletics)", min:2, max:2, increment: 0, requirements:(merits['Order Status(Adamantine Arrow)'] > 0 && skills.athletics > 2)},
  {name:"Artifact", min:3, max:10, increment: 1, requirements: true},
  {name:"Astral Adept", min:3, max:3, increment: 0, requirements:true},
  {name:"Between the Ticks", min:2, max:2, increment: 0, requirements:(attributes.wits > 2 && spheres.time > 0)},
  {name:"Cabal Theme", min:1, max:1, increment: 0, requirements:true},
  {name:"Consilium Status", min:1, max:5, increment: 1, requirements:true},
  {name:"Order Status(Adamantine Arrow)", min:1, max:5, increment: 1, requirements: faction != "Seers of the Throne"},
  {name:"Order Status(Mysterium)", min:1, max:5, increment: 1, requirements:faction != "Seers of the Throne"},
  {name:"Order Status(Silver Ladder)", min:1, max:5, increment: 1, requirements:faction != "Seers of the Throne"},
  {name:"Order Status(Free Council)", min:1, max:5, increment: 1, requirements:faction != "Seers of the Throne"},
  {name:"Order Status(Guardians of the Veil)", min:1, max:5, increment: 1, requirements:faction != "Seers of the Throne"},
  {name:"Order Status(Seers of the Throne)", min:1, max:5, increment:1, requirements: faction === "Seers of the Throne"},
  {name:"Destiny", min:1, max:5, increment:1, requirements: true},
  {name:"Dream", min:1, max:5, increment:1, requirements: (attributes.composure > 2 && attributes.wits > 2)}, 
  {name:"Egregore", min:1, max:5, increment:1, requirements: merits["Order Status(Mysterium)"] > 0},
  {name:"Familiar", min:2, max:4, increment:2, requirements: true},
  {name:"Fast Spells", min:2, max:2, increment:0, requirements: (skills.firearms > 1 && spheres.time > 0)},
  {name:"Grimoire", min:1, max:5, increment:1, requirements: true},
  {name:"Hallow", min:1, max:5, increment:1, requirements: true},
  {name:"Lex Magica", min:2, max:2, increment:0, requirements: merits['Order Status(Silver Ladder)'] > 0},
  {name:"Mana Sensitivity", min:1, max:1, increment:0, requirements: (attributes.wits > 2 && spheres.prime > 0)},
  {name:"Masque", min:1, max:5, increment:1, requirements: merits['Order Status(Guardians of the Veil)'] > 0},
  {name:"Mystery Cult Influence", min:3, max:5, increment:1, requirements: true},
  {name:"Occultation", min:1, max:3, increment:1, requirements: true},
  {name:"Potent Nimbus", min:1, max:2, increment:1, requirements: true},
  {name:"Potent Resonance", min:2, max:2, increment:0, requirements: gnosis > 2},
  {name:"Prelacy", min:1, max:4, increment:1, requirements: merits['Order Status(Seers of the Throne)'] > 2},
  {name:"Sanctum", min:1, max:5, increment:1, requirements: merits['Safe Place'] > 0},
  {name:"Shadow Name", min:1, max:3, increment:1, requirements: true},
  {name:"Techne", min:2, max:2, increment:0, requirements: merits['Order Status(Free Council)'] > 0},
  {name:"Allies", min:1, max:5, increment:1, requirements: true},
  {name:"Alternate Identity", min:1, max:3, increment:1, requirements: true},
  {name:"Infamous Mentor", min:1, max:5, increment:1, requirements: merits['Mentor'] >= merits['Infamous Mentor']},
  {name:"Contacts", min:1, max:5, increment:1, requirements: true},
  {name:"Defensive Combat", min:1, max:1, increment:0, requirements: (skills.brawl > 0 || skills.melee > 0)},
  {name:"Fame", min:1, max:3, increment:1, requirements: true},
  {name:"Language", min:1, max:1, increment:1, requirements: true},
  {name:"Library", min:1, max:3, increment:1, requirements: true},
  {name:"Advanced Library", min:1, max:5, increment:1, requirements: (merits['Library'] > 2 && merits['Safe Place'] >= merits['Advanced Library'])},
  {name:"Mentor", min:1, max:5, increment:1, requirements: true},
  {name:"Mystery Cult Initiation", min:1, max:5, increment:1, requirements: true},
  {name:"Professional Training", min:1, max:5, increment:1, requirements: true},
  {name:"Resources", min:1, max:5, increment:1, requirements: true},
  {name:"Retainer", min:1, max:5, increment:1, requirements: true},
  {name:"Safe Place", min:1, max:5, increment:1, requirements: true},
  {name:"Status", min:1, max:5, increment:1, requirements: true},
  {name:"Striking Looks", min:1, max:2, increment:1, requirements: true},
  {name:"Trained Observer", min:1, max:3, increment:2, requirements: (attributes.wits > 2 || attributes.composure > 2)},
  {name:"True Friend", min:3, max:3, increment:3, requirements: true},
  {name:"Area of Expertise", min:1, max:1, increment:1, requirements: attributes.resolve > 1},
  {name:"Common Sense", min:3, max:3, increment:3, requirements: true},
  {name:"Danger Sense", min:2, max:2, increment:2, requirements: true},
  {name:"Direction Sense", min:1, max:1, increment:1, requirements: true},
  {name:"Eidetic Memory", min:2, max:2, increment:2, requirements: true},
  {name:"Encyclopedic Knowledge", min:2, max:2, increment:2, requirements: true},
  {name:"Fast Reflexes", min:1, max:3, increment:1, requirements: (attributes.wits > 2 || attributes.dexterity > 2)},
  {name:"Good Time Management", min:1, max:1, increment:1, requirements: (skills.academics > 1 || skills.science > 1)},
  {name:"Holistic Awareness", min:1, max:1, increment:1, requirements: true},
  {name:"Indomitable", min:2, max:2, increment:2, requirements: attributes.resolve > 2},
  {name:"Interdisciplinary Specialty", min:1, max:1, increment:1, requirements: true},
  {name:"Multilingual", min:1, max:1, increment:1, requirements: true},
  {name:"Patient", min:1, max:1, increment:1, requirements: true},
  {name:"Vice Ridden", min:1, max:1, increment:1, requirements: true},
  {name:"Virtuous", min:1, max:1, increment:1, requirements: true},
  {name:"Ambidextrous", min:3, max:3, increment:3, requirements: true},
  {name:"Automotive Genius", min:1, max:1, increment:1, requirements: (skills.crafts > 2 && skills.drive > 0 && skills.science > 0)},
  {name:"Crack Driver", min:2, max:3, increment:1, requirements: skills.drive > 2},
  {name:"Demolisher", min:1, max:3, increment:1, requirements: (attributes.strength > 2 || attributes.inteligence > 2)},
  {name:"Double Jointed", min:2, max:2, increment:2, requirements: attributes.dexterity > 2},
  {name:"Fleet of Foot", min:1, max:3, increment:1, requirements: skills.athletics > 1},
  {name:"Giant", min:3, max:3, increment:3, requirements: true},
  {name:"Hardy", min:1, max:3, increment:1, requirements: attributes.stamina > 2},
  {name:"Greyhound", min:1, max:1, increment:1, requirements: (skills.athletics > 2 && attributes.wits > 2 && attributes.stamina > 2)},
  {name:"Iron Stamina", min:1, max:3, increment:1, requirements: (attributes.stamina > 2 || attributes.resolve > 2)},
  {name:"Parkour", min:1, max:5, increment:1, requirements: (attributes.dexterity > 2 && skills.athletics > 1)},
  {name:"Quick Draw", min:1, max:1, increment:1, requirements: (attributes.wits > 2 && (skills.melee > 0 || skills.firearms > 0))},
  {name:"Relentless", min:1, max:1, increment:1, requirements: (attributes.stamina > 2 && skills.athletics > 1)},
  {name:"Seizing the Edge", min:2, max:2, increment:2, requirements: (attributes.wits > 2 && attributes.composure > 2)},
  {name:"Sleight of Hand", min:2, max:2, increment:2, requirements:skills.larceny > 2},
  {name:"Small Framed", min:2, max:2, increment: 2, requirements: true},
  {name:"Stunt Driver", min:1, max:4, increment: 1, requirements: (attributes.dexterity > 2 && attributes.wits > 2 && skills. drive > 2)},
  {name:"Barfly", min:2, max:2, increment: 2, requirements: skills.socialize > 1},
  {name:"Closed Book", min:1, max:5, increment: 1, requirements: (attributes.manipulation > 2 && attributes.resolve > 2)},
  {name:"Fast Talking", min:1, max:5, increment: 1, requirements: (attributes.manipulation > 2 && skills.subterfuge > 1)},
  {name:"Fixer", min:2, max:2, increment: 2, requirements: (merits["Contacts"] > 1 && attributes.wits > 2)},
  {name:"Hobbyist Clique", min:2, max:2, increment: 2, requirements: true},
  {name:"Inspiring", min:3, max:3, increment: 3, requirements: attributes.presence > 2},
  {name:"Iron Will", min:2, max:2, increment: 2, requirements: attributes.resolve > 4},
  {name:"Pusher", min:1, max:1, increment: 1, requirements: attributes.persuasion > 1},
  {name:"Small Unit Tactics", min:2, max:2, increment: 2, requirements: attributes.presence > 2},
  {name:"Staff", min:1, max:5, increment: 1, requirements: true},
  {name:"Sympathetic", min:2, max:2, increment: 2, requirements: true},
  {name:"Table Turner", min:1, max:1, increment: 1, requirements: (attributes.composure > 2 && attributes.manipulation > 2 && attributes.wits > 2)},
  {name:"Taste", min:1, max:1, increment: 1, requirements: skills.crafts > 1},
  {name:"Armed Defense", min:1, max:5, increment: 1, requirements: (attributes.dexterity > 2 && skills.weaponry > 1 && merits['Defensive Combat'])},
  {name:"Cheap Shot", min:2, max:2, increment: 2, requirements: (merits['Street Fighting'] > 2 && skills.subterfuge > 1)},
  {name:"Choke Hold", min:2, max:2, increment: 2, requirements: skills.brawl > 1},
  {name:"Close Quarters Combat", min:1, max:5, increment: 1, requirements: (attributes.wits > 2 && skills.athletics > 1 && skills.brawl > 2)},
  {name:"Fighting Finesse", min:2, max:2, increment: 2, requirements: (attributes.dexterity >2 && (skills.weaponry > 2 || skills.brawl > 2))},
  {name:"Firefight", min:1, max:3, increment: 1, requirements: (attributes.dexterity > 2 && attributes.composure > 2 && skills.firearms > 1 && skills.athletics > 1)},
  {name:"Grappling", min:1, max:3, increment: 1, requirements: (attributes.stamina > 2 && attributes.strength > 1 && skills.athletics > 1 && skills.brawl > 1)},
  {name:"Heavy Weapons", min:1, max:5, increment: 1, requirements: (attributes.stamina > 2 && attributes.strength > 1 && skills.athletics > 1 && skills.weaponry > 1)},
  {name:"Improvised Weaponry", min:1, max:3, increment: 1, requirements: (attributes.wits > 2 && skills.weaponry > 0)},
  {name:"Iron Skin", min:2, max:4, increment: 2, requirements: ((merits['Martial Arts'] > 1 || merits['Street Fighting > 1']) && attributes.stamina > 2)},
  {name:"Light Weapons", min:1, max:5, increment: 1, requirements: ((attributes.wits > 2 || merits['Fighting Finesse'] > 0) && attributes.dexterity > 2 && skills.athletics > 1 && skills.weaponry > 1)},
  {name:"Marksmanship", min:1, max:4, increment: 1, requirements: (attributes.composure > 2 && attributes.resolve > 2 && skills.firearms > 1)},
  {name:"Martial Arts", min:1, max:5, increment: 1, requirements: (attributes.resolve > 2 && attributes.dexterity > 2 && skills.athletics > 1 && skills.brawl > 1)},
  {name:"Police Tactics", min:1, max:3, increment: 1, requirements: (skills.weaponry > 0 && skills.brawl > 1)},
  {name:"Shiv", min:1, max:2, increment: 1, requirements: (merits['Street Fighting'] > 1 && skills.weaponry > 0)},
  {name:"Street Fighting", min:1, max:5, increment: 1, requirements: (attributes.stamina > 2 && attributes.composure > 2 && skills.brawl > 1 && skills.streetwise > 1)},
  {name:"Unarmed Defense", min:1, max:5, increment: 1, requirements: (attributes.dexterity > 2 && skills.brawl > 1 && merits['Defensive Combat'] > 0)}]
  roll = Math.floor(Math.random()*allMerits.length);
    check = allMerits[roll]
    //alert(check.name);
    if (merits[check.name]) {
      if (meritPoints >= check.increment) {
        if (merits[check.name] < (check.max - check.increment)) {
          merits[check.name] += check.increment;
          meritPoints -= check.increment;
        }
      }
    } else if (check.requirements) {
      if (meritPoints >= (check.min)) {
        merits[check.name] = check.min;
        meritPoints -= check.min;
      }
    }
  }
  return merits;
}

function meritCleanup (merits, skills, others, vice, virtue) {
  let factions = ['Politics', 'Medical', 'Scholars', 'Criminals',
  'Media', 'Homeless', 'Artists', 'Occult', 'Business', 'Supernatural', 
  'Police', 'Church']
  let newMerits = {};
  for (i in merits) {
  if (i === 'Allies') {
    let roll = Math.floor(Math.random() * factions.length);
    let area = factions[roll];
    let newMeritName = "Allies(" + area +")";
    newMerits[newMeritName] = merits['Allies'];
  } else if (i === 'Contacts') {
    for (a = 0; a < merits['Contacts']; a++) {
      let roll = Math.floor(Math.random() * factions.length);
      let area = factions[roll];
      let newMeritName = "Contacts(" + area +")";
      newMerits[newMeritName] = 1;
    }
  } else if (i === 'Defensive Combat') {
    if (skills.brawl > skills.athletics || skills.weaponry > skills.athletics) {
      let newDefense = Math.max(skills.brawl, skills.weaponry);
      others.defense = others.defense - skills.athletics + newDefense;
      newMerits[i] = merits[i];
    }
  } else if (i === 'Library') {
    let mentalSkills = {'Academics': skills.academics, 'Crafts': skills.crafts, 'Computer': skills.computer,
    'Investigation': skills.investigation, 'Medicine': skills.medicine, 'Occult': skills.occult,
    'Politics': skills.politics, 'Science': skills.science};
let max = Math.max.apply(null,Object.keys(mentalSkills).map(function(x){ return mentalSkills[x] }));
let maxString = (Object.keys(mentalSkills).filter(function(x){ return mentalSkills[x] == max; })[0]);
    let newMeritName = "Library(" + maxString +")";
    newMerits[newMeritName] = merits['Library'];
  } else if (i === 'Status') {
    let roll = Math.floor(Math.random() * factions.length);
    let area = factions[roll];
    let newMeritName = "Status(" + area +")";
    newMerits[newMeritName] = merits['Status'];
  } else if (i === 'Fast Reflexes') {
    others.initiative += merits['Fast Reflexes'];
    newMerits[i] = merits[i];
  } else if (i === 'Vice Ridden') {
    let newVice = getVice();
    while (newVice === others.vice) {
      newVice = getVice();
    } 
    newVice = others.vice + '/ ' + newVice;
    others.vice = newVice;
    newMerits[i] = merits[i];
  } else if (i === 'Virtuous') {
    let newVirtue = getVirtue();
    while (newVirtue === others.virtue) {
      newVirtue = getVirtue();
    } 
    newVirtue = others.virtue + '/ ' + newVirtue;
    others.virtue = newVirtue;
    newMerits[i] = merits[i];
  } else if (i === 'Fleet of Foot') {
    others.speed += merits['Fleet of Foot'];
    newMerits[i] = merits[i];
  } else if (i === 'Giant') {
    others.size += 1;
    others.health += 1;
    newMerits[i] = merits[i];
  } else if (i === 'Small Framed') {
    others.size -= 1;
    others.health -= 1;
    newMerits[i] = merits[i];
  } else {
    newMerits[i] = merits[i];
  }
  }
  return newMerits;
}

function meritToString (merits) {
  let str = '<th>Merits</th>';
  for (var p in merits) {
    if (merits.hasOwnProperty(p)) {
      str += "<tr><td>" + p + ': ' + merits[p] + '</td></tr>';
    }
  }
  return str;
}


function praxis (path, gnosis, spheres){
  let numberPraxis = gnosis;
  let praxisList = [];
  while (numberPraxis > 0) {
    let roll = Math.floor(Math.random() * 2);
    spellSphere = path.ruling[roll];
    spellList = getSpells(spellSphere, spheres);
    roll = Math.floor(Math.random()*spellList.length);
    let spell = spellList[roll];
    if (spell.requirements) {
      if (praxisList.includes(spell.name) === false) {
         praxisList.push(spell.name);
         numberPraxis -= 1;
      }
    }
  } return praxisList;
}

function getSpells (sphere, spheres) {
  let deathSpells = [{name: 'Ectoplasmic Shaping (Death 1)', requirement: spheres.death > 0, roteSkills: ['crafts', 'occult', 'larceny']},
  {name: 'Deepen Shadows (Death 1)', requirement: spheres.death > 0, roteSkills: ['intimidation', 'occult', 'expression']}, 
  {name: 'Forensic Gaze (Death 1)', requirement: spheres.death > 0, roteSkills: ['medicine', 'investigation', 'expression']},
  {name: 'Shadow Sculpting (Death 1)', requirement: spheres.death > 0, roteSkills: ['crafts', 'science', 'expression']},
  {name: 'Soul Marks (Death 1)', requirements: spheres.death > 0, roteSkills: ['medicine', 'occult', 'empathy']},
  {name: 'Speak With The Dead (Death 1)', requirements: spheres.death > 0, roteSkills: ['socialize', 'expression', 'investigation']},
  {name: 'Corpse Mask (Death 2)', requirements: spheres.death > 1, roteSkills: ['subterfuge', 'crafts', 'medicine']},
  {name: 'Decay (Death 2)', requirements: spheres.death > 1, roteSkills: ['subterfuge', 'science', 'occult']},
  {name: 'Ectoplasm (Death 2)', requirements: spheres.death > 1, roteSkills: ['expression', 'academics', 'occult']},
  {name: 'Ghost Shield (Death 2)', requirements: spheres.death > 1, roteSkills: ['streetwise', 'subterfuge', 'survival']},
  {name: 'Shape Ephemera (Death 2)', requirements: spheres.death > 1, roteSkills: ['crafts', 'expression', 'science']},
  {name: 'Soul Armor (Death 2)', requirements: spheres.death > 1, roteSkills: ['academics', 'occult', 'survival']},
  {name: 'Soul Jar (Death 2)', requirements: spheres.death > 1, roteSkills: ['crafts', 'occult', 'persuasion']}, 
  {name: 'Supress Aura (Death 2)', requirements: spheres.death > 1, roteSkills: ['subterfuge', 'intimidation', 'medicine']},
  {name: 'Supress Life (Death 2)', requirements: spheres.death > 1, roteSkills: ['subterfuge', 'academics', 'medicine']},
  {name: 'Touch of the Grave (Death 2)', requirements: spheres.death > 1, roteSkills: ['survival', 'crafts', 'persuasion']},
  {name: 'Without a Trace (Death 2)', requirements: spheres.death > 1, roteSkills: ['science', 'stealth', 'subterfuge']},
  {name: 'Cold Snap (Death 3)', requirements: spheres.death > 2, roteSkills: ['survival', 'intimidation', 'science']},
  {name: 'Damage Ghost (Death 3)', requirements: spheres.death > 2, roteSkills: ['brawl', 'intimidation', 'occult']},
  {name: 'Devouring the Slain (Death 3)', requirements: spheres.death > 2, roteSkills: ['medicine', 'intimidation', 'persuasion']},
  {name: 'Ghost Gate (Death 3)', requirements: spheres.death > 2, roteSkills: ['occult', 'academics', 'persuasion']},
  {name: 'Ghost Summon (Death 3)', requirements: spheres.death > 2, roteSkills: ['occult', 'socialize', 'persuasion']},
  {name: 'Quicken Corpse (Death 3)', requirements: spheres.death > 2, roteSkills: ['medicine', 'crafts', 'persuasion']},
  {name: 'Quicken Ghost (Death 3)', requirements: spheres.death > 2, roteSkills: ['medicine', 'socialize', 'persuasion']},
  {name: 'Rotting Flesh (Death 3)', requirements: spheres.death > 2, roteSkills: ['intimidation', 'occult', 'empathy']},
  {name: 'Sever Soul (Death 3)', requirements: spheres.death > 2, roteSkills: ['intimidation', 'athletics', 'expression']},
  {name: 'Shadow Crafting (Death 3)', requirements: spheres.death > 2, roteSkills: ['academics', 'intimidation', 'occult']},
  {name: 'Enervation (Death 4)', requirements: spheres.death > 3, roteSkills: ['subterfuge', 'intimidation', 'occult']},
  {name: 'Exorcism (Death 4)', requirements: spheres.death > 3, roteSkills: ['brawl', 'expression', 'occult']},
  {name: 'Revenant (Death 4)', requirements: spheres.death > 3, roteSkills: ['brawl', 'crafts', 'intimidation']},
  {name: 'Shadow Flesh (Death 4)', requirements: spheres.death > 3, roteSkills: ['occult', 'medicine', 'subterfuge']},
  {name: 'Withering (Death 4)', requirements: spheres.death > 3, roteSkills: ['intimidation', 'medicine', 'science']},
  {name: 'Create Anchor (Death 5)', requirements: spheres.death > 4, roteSkills: ['crafts', 'occult', 'persuasion']},
  {name: 'Create Avernian Gate (Death 5)', requirements: spheres.death > 4, roteSkills: ['crafts', 'occult', 'persuasion']},
  {name: 'Create Ghost (Death 5)', requirements: spheres.death > 4, roteSkills: ['expression', 'occult', 'academics']},
  {name: 'Deny the Reaper (Death 5)', requirements: spheres.death > 4, roteSkills: ['medicine', 'occult', 'subterfuge']},
  {name: 'Empty Presence (Death 5)', requirements: spheres.death > 4, roteSkills: ['persuasion', 'stealth', 'subterfuge']},
  {name: 'Sever the Awakened Soul (Death 5)', requirements: spheres.death > 4, roteSkills: ['crafts', 'intimidation', 'medicine']}];
  let forcesSpells = [{name: 'Influence Electricity (Forces 1)', requirements: spheres.forces > 0, roteSkills: ['intimidation', 'occult', 'science']},
  {name: 'Influence Fire (Forces 1)', requirements: spheres.forces > 0, roteSkills: ['crafts', 'science', 'survival']},
  {name: 'Kinetic Efficiency (Forces 1)', requirements: spheres.forces > 0, roteSkills: ['athletics', 'science', 'survival']},
  {name: 'Influence Heat (Forces 1)', requirements: spheres.forces > 0, roteSkills: ['occult', 'science', 'survival']},
  {name: 'Nightvision (Forces 1)', requirements: spheres.forces > 0, roteSkills: ['investigation', 'stealth', 'science']},
  {name: 'Reciever (Forces 1)', requirements: spheres.forces > 0, roteSkills: ['investigation', 'empathy', 'science']},
  {name: 'Tune In (Forces 1)', requirements: spheres.forces > 0, roteSkills: ['computer', 'empathy', 'science']},
  {name: 'Control Electricity (Forces 2)', requirements: spheres.forces > 1, roteSkills: ['crafts', 'computer', 'science']},
  {name: 'Control Fire (Forces 2)', requirements: spheres.forces > 1, roteSkills: ['crafts', 'survival', 'science']},
  {name: 'Control Gravity (Forces 2)', requirements: spheres.forces > 1, roteSkills: ['athletics', 'occult', 'science']},
  {name: 'Control Heat (Forces 2)', requirements: spheres.forces > 1, roteSkills: ['athletics', 'survival', 'science']},
  {name: 'Control Light (Forces 2)', requirements: spheres.forces > 1, roteSkills: ['crafts', 'investigation', 'science']},
  {name: 'Control Sound (Forces 2)', requirements: spheres.forces > 1, roteSkills: ['expression', 'stealth', 'science']},
  {name: 'Control Weather (Forces 2)', requirements: spheres.forces > 1, roteSkills: ['academics', 'survival', 'science']},
  {name: 'Environmental Shield (Forces 2)', requirements: spheres.forces > 1, roteSkills: ['occult', 'survival', 'science']},
  {name: 'Invisibility (Forces 2)', requirements: spheres.forces > 1, roteSkills: ['larceny', 'stealth', 'science']},
  {name: 'Kinetic Blow (Forces 2)', requirements: spheres.forces > 1, roteSkills: ['athletics', 'brawl', 'science']},
  {name: 'Transmission (Forces 2)', requirements: spheres.forces > 1, roteSkills: ['crafts', 'expression', 'science']},
  {name: 'Zoom In (Forces 2)', requirements: spheres.forces > 1, roteSkills: ['investigation', 'survival', 'science']},
  {name: 'Call Lightning (Forces 3)', requirements: spheres.forces > 2, roteSkills: ['athletics', 'firearms', 'science']},
  {name: 'Gravitic Supremacy (Forces 3)', requirements: spheres.forces > 2, roteSkills: ['athletics', 'survival', 'science']},
  {name: 'Telekinesis (Forces 3)', requirements: spheres.forces > 2, roteSkills: ['athletics', 'brawl', 'science']},
  {name: 'Telekinetic Strike (Forces 3)', requirements: spheres.forces > 2, roteSkills: ['athletics', 'firearms', 'science']},
  {name: 'Turn Momentum (Forces 3)', requirements: spheres.forces > 2, roteSkills: ['athletics', 'firearms', 'science']},
  {name: 'Velocity Control (Forces 3)', requirements: spheres.forces > 2, roteSkills: ['athletics', 'drive', 'science']},
  {name: 'Electromagnetic Pulse (Forces 4)', requirements: spheres.forces > 3, roteSkills: ['crafts', 'computer', 'science']},
  {name: 'Levitation (Forces 4)', requirements: spheres.forces > 3, roteSkills: ['science', 'survival', 'athletics']},
  {name: 'Rend Friction (Forces 4)', requirements: spheres.forces > 3, roteSkills: ['science', 'crafts', 'drive']},
  {name: 'Tunderbolt (Forces 4)', requirements: spheres.forces > 3, roteSkills: ['science', 'athletics', 'firearms']},
  {name: 'Transform Energy (Forces 4)', requirements: spheres.forces > 3, roteSkills: ['science', 'crafts', 'occult']},
  {name: 'Adverse Weather (Forces 5)', requirements: spheres.forces > 4, roteSkills: ['science', 'crafts', 'occult']},
  {name: 'Create Energy (Forces 5)', requirements: spheres.forces > 4, roteSkills: ['science', 'crafts', 'occult']},
  {name: 'Eradicate Energy (Forces 5)', requirements: spheres.forces > 4, roteSkills: ['science', 'intimidation', 'survival']},
  {name: 'Earthquake (Forces 5)', requirements: spheres.forces > 4, roteSkills: ['science', 'crafts', 'survival']}];
  let lifeSpells = [{name: 'Analyze Life (Life 1)', requirements: spheres.life > 0, roteSkills: ['animal ken', 'medicine', 'survival']},
  {name: 'Cleanse the Body (Life 1)', requirements: spheres.life > 0, roteSkills: ['athletics', 'medicine', 'survival']},
  {name: 'Heightened Senses (Life 1)', requirements: spheres.life > 0, roteSkills: ['empathy', 'investigation', 'survival']},
  {name: 'Speak With Beasts (Life 1)', requirements: spheres.life > 0, roteSkills: ['empathy', 'animal ken', 'survival']},
  {name: 'Web of Life (Life 1)', requirements: spheres.life > 0, roteSkills: ['medicine', 'investigation', 'survival']},
  {name: 'Body Control (Life 2)', requirements: spheres.life > 1, roteSkills: ['medicine', 'athletics', 'survival']},
  {name: 'Control Instincts (Life 2)', requirements: spheres.life > 1, roteSkills: ['animal ken', 'intimidation', 'persuasion']},
  {name: 'Lure and Repel (Life 2)', requirements: spheres.life > 1, roteSkills: ['animal ken', 'survival', 'persuasion']},
  {name: 'Mutable Mask (Life 2)', requirements: spheres.life > 1, roteSkills: ['medicine', 'stealth', 'subterfuge']},
  {name: 'Purge Illness (Life 2)', requirements: spheres.life > 1, roteSkills: ['medicine', 'athletics', 'survival']},
  {name: 'Bruise Flesh (Life 3)', requirements: spheres.life > 2, roteSkills: ['medicine', 'brawl', 'intimidation']},
  {name: 'Degrading the Form (Life 3)', requirements: spheres.life > 2, roteSkills: ['medicine', 'brawl', 'survival']},
  {name: 'Honing the Form (Life 3)', requirements: spheres.life > 2, roteSkills: ['medicine', 'athletics', 'survival']},
  {name: 'Knit (Life 3)', requirements: spheres.life > 2, roteSkills: ['medicine', 'empathy', 'survival']},
  {name: 'Many Faces (Life 3)', requirements: spheres.life > 2, roteSkills: ['medicine', 'stealth', 'subterfuge']},
  {name: 'Transform Life (Life 3)', requirements: spheres.life > 2, roteSkills: ['animal ken', 'science', 'survival']},
  {name: 'Accelerate Growth (Life 4)', requirements: spheres.life > 3, roteSkills: ['animal ken', 'science', 'medicine']},
  {name: 'Animal Minion (Life 4)', requirements: spheres.life > 3, roteSkills: ['animal ken', 'science', 'survival']},
  {name: 'Life-Force Assault (Life 4)', requirements: spheres.life > 3, roteSkills: ['brawl', 'intimidation', 'medicine']},
  {name: 'Mend (Life 4)', requirements: spheres.life > 3, roteSkills: ['empathy', 'survival', 'medicine']},
  {name: 'Regeneration (Life 4)', requirements: spheres.life > 3, roteSkills: ['athletics', 'survival', 'medicine']},
  {name: 'Shapechanging (Life 4)', requirements: spheres.life > 3, roteSkills: ['athletics', 'animal ken', 'science']},
  {name: 'Create Life (Life 5)', requirements: spheres.life > 5, roteSkills: ['medicine', 'science', 'survival']},
  {name: 'Contagion (Life 5)', requirements: spheres.life > 5, roteSkills: ['medicine', 'science', 'occult']},
  {name: 'Salt the Earth (Life 5)', requirements: spheres.life > 5, roteSkills: ['medicine', 'science', 'survival']}];
  let matterSpells = [{name: 'Craftmans Eye (Matter 1)', requirements: spheres.matter > 0, roteSkills: ['crafts', 'investigation', 'science']},
  {name: 'Detect Substance (Matter 1)', requirements: spheres.matter > 0, roteSkills: ['crafts', 'investigation', 'science']},
  {name: 'Discern Composition (Matter 1)', requirements: spheres.matter > 0, roteSkills: ['crafts', 'investigation', 'science']},
  {name: 'Lodestone (Matter 1)', requirements: spheres.matter > 0, roteSkills: ['crafts', 'larceny', 'science']},
  {name: 'Remote Control (Matter 1)', requirements: spheres.matter > 0, roteSkills: ['crafts', 'drive', 'intimidation']},
  {name: 'Alchemist\'s Touch (Matter 2)', requirements: spheres.matter > 1, roteSkills: ['crafts', 'survival', 'persuasion']},
  {name: 'Find the Balance (Matter 2)', requirements: spheres.matter > 1, roteSkills: ['crafts', 'science', 'persuasion']},
  {name: 'Hidden Hoard (Matter 2)', requirements: spheres.matter > 1, roteSkills: ['larceny', 'occult', 'subterfuge']},
  {name: 'Machine Invisibility (Matter 2)', requirements: spheres.matter > 1, roteSkills: ['larceny', 'science', 'stealth']},
  {name: 'Shaping (Matter 2)', requirements: spheres.matter > 1, roteSkills: ['crafts', 'expression', 'persuasion']},
  {name: 'Aegis (Matter 3)', requirements: spheres.matter > 2, roteSkills: ['crafts', 'athletics', 'science']},
  {name: 'Alter Conductivity (Matter 3)', requirements: spheres.matter > 2, roteSkills: ['computer', 'subterfuge', 'science']},
  {name: 'Alter Integrity (Matter 3)', requirements: spheres.matter > 2, roteSkills: ['crafts', 'subterfuge', 'medicine']},
  {name: 'Crucible (Matter 3)', requirements: spheres.matter > 2, roteSkills: ['crafts', 'occult', 'science']},
  {name: 'Negredo and Albedo (Matter 3)', requirements: spheres.matter > 2, roteSkills: ['crafts', 'brawl', 'medicine']},
  {name: 'Shrink and Grow (Matter 3)', requirements: spheres.matter > 2, roteSkills: ['crafts', 'expression', 'science']},
  {name: 'State Change (Matter 3)', requirements: spheres.matter > 2, roteSkills: ['crafts', 'persuasion', 'science']},
  {name: 'Windstrike (Matter 3)', requirements: spheres.matter > 2, roteSkills: ['crafts', 'athletics', 'brawl']},
  {name: 'Wonderful Machine (Matter 3)', requirements: spheres.matter > 2, roteSkills: ['crafts', 'politics', 'science']},
  {name: 'Ghostwall (Matter 4)', requirements: spheres.matter > 3, roteSkills: ['athletics', 'occult', 'stealth']},
  {name: 'Golem (Matter 4)', requirements: spheres.matter > 3, roteSkills: ['crafts', 'occult', 'expression']},
  {name: 'Piercing Earth (Matter 4)', requirements: spheres.matter > 3, roteSkills: ['athletics', 'brawl', 'crafts']},
  {name: 'Transubstantiation (Matter 4)', requirements: spheres.matter > 3, roteSkills: ['empathy', 'science', 'crafts']},
  {name: 'Annihilate Matter (Matter 5)', requirements: spheres.matter > 3, roteSkills: ['athletics', 'science', 'intimidation']},
  {name: 'Ex Nihilo (Matter 5)', requirements: spheres.matter > 3, roteSkills: ['crafts', 'science', 'expression']},
  {name: 'Self-Repairing Machine (Matter 5)', requirements: spheres.matter > 3, roteSkills: ['crafts', 'medicine', 'occult']}];
  let primeSpells = [{name: 'Dispel Magic (Prime 1)', requirements: spheres.prime > 0, roteSkills: ['athletics', 'intimidation', 'occult']},
  {name: 'Pierce Deception (Prime 1)', requirements: spheres.prime > 0, roteSkills: ['medicine', 'investigation', 'occult']},
  {name: 'Supernal Vision (Prime 1)', requirements: spheres.prime > 0, roteSkills: ['empathy', 'survival', 'occult']},
  {name: 'Scribe Grimoire (Prime 1)', requirements: spheres.prime > 0, roteSkills: ['crafts', 'expression', 'occult']},
  {name: 'Word of Command (Prime 1)', requirements: spheres.prime > 0, roteSkills: ['crafts', 'persuasion', 'occult']},
  {name: 'As Above So Below (Prime 2)', requirements: spheres.prime > 1, roteSkills: ['academics', 'politics', 'occult']},
  {name: 'Cloak Nimbus (Prime 2)', requirements: spheres.prime > 1, roteSkills: ['stealth', 'politics', 'subterfuge']},
  {name: 'Invisible Runes (Prime 2)', requirements: spheres.prime > 1, roteSkills: ['expression', 'intimidation', 'persuasion']},
  {name: 'Supernal Veil (Prime 2)', requirements: spheres.prime > 1, roteSkills: ['occult', 'subterfuge', 'survival']},
  {name: 'Wards and Signs (Prime 2)', requirements: spheres.prime > 1, roteSkills: ['occult', 'intimidation', 'survival']},
  {name: 'Words of Truth (Prime 2)', requirements: spheres.prime > 1, roteSkills: ['expression', 'intimidation', 'persuasion']},
  {name: 'Aetheric Winds (Prime 3)', requirements: spheres.prime > 2, roteSkills: ['expression', 'athletics', 'occult']},
  {name: 'Channel Mana (Prime 3)', requirements: spheres.prime > 2, roteSkills: ['politics', 'socialize', 'occult']},
  {name: 'Cleanse Pattern (Prime 3)', requirements: spheres.prime > 2, roteSkills: ['investigation', 'stealth', 'occult']},
  {name: 'Display of Power (Prime 3)', requirements: spheres.prime > 2, roteSkills: ['brawl', 'socialize', 'occult']},
  {name: 'Ephemeral Enchantment (Prime 3)', requirements: spheres.prime > 2, roteSkills: ['crafts', 'weaponry', 'occult']},
  {name: 'Geomancy (Prime 3)', requirements: spheres.prime > 2, roteSkills: ['academics', 'expression', 'occult']},
  {name: 'Platonic Form (Prime 3)', requirements: spheres.prime > 2, roteSkills: ['academics', 'expression', 'crafts']},
  {name: 'Stealing Fire (Prime 3)', requirements: spheres.prime > 2, roteSkills: ['larceny', 'expression', 'persuasion']},
  {name: 'Apocalypse (Prime 4)', requirements: spheres.prime > 3, roteSkills: ['occult', 'persuasion', 'socialize']},
  {name: 'Celestial Fire (Prime 4)', requirements: spheres.prime > 3, roteSkills: ['athletics', 'expression', 'occult']},
  {name: 'Destroy Tass (Prime 4)', requirements: spheres.prime > 3, roteSkills: ['brawl', 'intimidation', 'occult']},
  {name: 'Hallow Dance (Prime 4)', requirements: spheres.prime > 3, roteSkills: ['expression', 'survival', 'occult']},
  {name: 'Supernal Dispellation (Prime 4)', requirements: spheres.prime > 3, roteSkills: ['athletics', 'intimidation', 'occult']},
  {name: 'Blasphemy (Prime 5)', requirements: spheres.prime > 4, roteSkills: ['athletics', 'survival', 'occult']},
  {name: 'Create Truth (Prime 5)', requirements: spheres.prime > 4, roteSkills: ['expression', 'persuasion', 'occult']},
  {name: 'Eidolon (Prime 5)', requirements: spheres.prime > 4, roteSkills: ['academics', 'crafts', 'occult']},
  {name: 'Forge Purpose (Prime 5)', requirements: spheres.prime > 4, roteSkills: ['empathy', 'expression', 'medicine']},
  {name: 'Word of Unmaking (Prime 5)', requirements: spheres.prime > 4, roteSkills: ['intimidation', 'occult', 'weaponry']}];
  let fateSpells = [{name: 'Interconnections (Fate 1)', requirements: spheres.fate > 0, roteSkills: ['empathy', 'investigation', 'medicine']},
  {name: 'Oaths Fulfilled (Fate 1)', requirements: spheres.fate > 0, roteSkills: ['occult', 'politics', 'investigation']},
  {name: 'Quantum Flux (Fate 1)', requirements: spheres.fate > 0, roteSkills: ['occult', 'firearms', 'crafts']},
  {name: 'Reading the Outmost Eddies (Fate 1)', requirements: spheres.fate > 0, roteSkills: ['computer', 'persuasion', 'subterfuge']},
  {name: 'Serendipity (Fate 1)', requirements: spheres.fate > 0, roteSkills: ['academics', 'crafts', 'survival']},
  {name: 'Exceptional Luck (Fate 2)', requirements: spheres.fate > 1, roteSkills: ['intimidation', 'occult', 'socialize']},
  {name: 'Fabricate Fortune (Fate 2)', requirements: spheres.fate > 1, roteSkills: ['larceny', 'occult', 'subterfuge']},
  {name: 'Fools Rush In (Fate 2)', requirements: spheres.fate > 1, roteSkills: ['athletics', 'streetwise', 'socialize']},
  {name: 'Lucky Number (Fate 2)', requirements: spheres.fate > 1, roteSkills: ['investigation', 'larceny', 'science']},
  {name: 'Shifting the Odds (Fate 2)', requirements: spheres.fate > 1, roteSkills: ['investigation', 'politics', 'subterfuge']},
  {name: 'Warding Gesture (Fate 2)', requirements: spheres.fate > 1, roteSkills: ['brawl', 'occult', 'subterfuge']},
  {name: 'Grave Misfortune (Fate 3)', requirements: spheres.fate > 2, roteSkills: ['intimidation', 'occult', 'weaponry']},
  {name: 'Monkey\'s Paw (Fate 3)', requirements: spheres.fate > 2, roteSkills: ['drive', 'crafts', 'science']},
  {name: 'Shared Fate (Fate 3)', requirements: spheres.fate > 2, roteSkills: ['medicine', 'persuasion', 'politics']},
  {name: 'Superlative Luck (Fate 3)', requirements: spheres.fate > 2, roteSkills: ['athletics', 'crafts', 'occult']},
  {name: 'Sworn Oaths (Fate 3)', requirements: spheres.fate > 2, roteSkills: ['expression', 'politics', 'occult']},
  {name: 'Atonement (Fate 4)', requirements: spheres.fate > 3, roteSkills: ['academics', 'empathy', 'survival']},
  {name: 'Chaos Mastery (Fate 4)', requirements: spheres.fate > 3, roteSkills: ['occult', 'empathy', 'science']},
  {name: 'Divine Intervention (Fate 4)', requirements: spheres.fate > 3, roteSkills: ['occult', 'intimidation', 'subterfuge']},
  {name: 'Strings of Fate (Fate 4)', requirements: spheres.fate > 3, roteSkills: ['academics', 'persuasion', 'stealth']},
  {name: 'Sever Oaths (Fate 4)', requirements: spheres.fate > 3, roteSkills: ['occult', 'subterfuge', 'empathy']},
  {name: 'Forge Destiny (Fate 5)', requirements: spheres.fate > 4, roteSkills: ['occult', 'intimidation', 'persuasion']},
  {name: 'Pariah (Fate 5)', requirements: spheres.fate > 4, roteSkills: ['investigation', 'medicine', 'politics']},
  {name: 'Miracle (Fate 5)', requirements: spheres.fate > 4, roteSkills: ['academics', 'persuasion', 'subterfuge']},
  {name: 'Swarm of Locusts (Fate 5)', requirements: spheres.fate > 4, roteSkills: ['intimidation', 'occult', 'science']}
  ];
  let spaceSpells = [{name: 'Correspondence (Space 1)', requirements: spheres.space > 0, roteSkills: ['academics', 'empathy', 'medicine']},
  {name: 'Ground-Eater (Space 1)', requirements: spheres.space > 0, roteSkills: ['athletics', 'science', 'survival']},
  {name: 'Isolation (Space 1)', requirements: spheres.space > 0, roteSkills: ['academics', 'intimidation', 'subterfuge']},
  {name: 'Locate Object (Space 1)', requirements: spheres.space > 0, roteSkills: ['empathy', 'science', 'occult']},
  {name: 'The Outward and Inward Eye (Space 1)', requirements: spheres.space > 0, roteSkills: ['firearms', 'investigation', 'occult']},
  {name: 'Borrow Threads (Space 2)', requirements: spheres.space > 1, roteSkills: ['larceny', 'subterfuge', 'occult']},
  {name: 'Break Boundary (Space 2)', requirements: spheres.space > 1, roteSkills: ['larceny', 'athletics', 'persuasion']},
  {name: 'Lying Maps (Space 2)', requirements: spheres.space > 1, roteSkills: ['academics', 'politics', 'survival']},
  {name: 'Scrying (Space 2)', requirements: spheres.space > 1, roteSkills: ['computer', 'occult', 'subterfuge']},
  {name: 'Secret Door (Space 2)', requirements: spheres.space > 1, roteSkills: ['stealth', 'occult', 'subterfuge']},
  {name: 'Veil Sympathy (Space 2)', requirements: spheres.space > 1, roteSkills: ['politics', 'subterfuge', 'survival']},
  {name: 'Ward (Space 2)', requirements: spheres.space > 1, roteSkills: ['athletics', 'subterfuge', 'weaponry']},
  {name: 'Ban (Space 3)', requirements: spheres.space > 2, roteSkills: ['intimidation', 'science', 'stealth']},
  {name: 'Co-location (Space 3)', requirements: spheres.space > 2, roteSkills: ['athletics', 'firearms', 'science']},
  {name: 'Perfect Sympathy (Space 3)', requirements: spheres.space > 2, roteSkills: ['academics', 'empathy', 'larceny']},
  {name: 'Warp (Space 3)', requirements: spheres.space > 2, roteSkills: ['athletics', 'brawl', 'medicine']},
  {name: 'Web-Weaver (Space 3)', requirements: spheres.space > 2, roteSkills: ['crafts', 'empathy', 'persuasion']},
  {name: 'Alter Direction (Space 4)', requirements: spheres.space > 3, roteSkills: ['academics', 'firearms', 'persuasion']},
  {name: 'Collapse (Space 4)', requirements: spheres.space > 3, roteSkills: ['academics', 'firearms', 'intimidation']},
  {name: 'Cut Threads (Space 4)', requirements: spheres.space > 3, roteSkills: ['persuasion', 'politics', 'weaponry']},
  {name: 'Secret Room (Space 4)', requirements: spheres.space > 3, roteSkills: ['expression', 'science', 'survival']},
  {name: 'Teleportation (Space 4)', requirements: spheres.space > 3, roteSkills: ['larceny', 'science', 'persuasion']},
  {name: 'Create Sympathy (Space 5)', requirements: spheres.space > 4, roteSkills: ['empathy', 'politics', 'persuasion']},
  {name: 'Forge No Chains (Space 5)', requirements: spheres.space > 4, roteSkills: ['occult', 'subterfuge', 'survival']},
  {name: 'Pocket Dimension (Space 5)', requirements: spheres.space > 4, roteSkills: ['crafts', 'expression', 'survival']},
  {name: 'Pocket Dimension (Space 5)', requirements: spheres.space > 4, roteSkills: ['academics', 'larceny', 'socialize']},
  {name: 'Quarantine (Space 5)', requirements: spheres.space > 4, roteSkills: ['academics', 'larceny', 'socialize']}];
  let spiritSpells = [{name: 'Coaxing the Spirits (Spirit 1)', requirements: spheres.spirit > 0, roteSkills: ['politics', 'athletics', 'expression']},
  {name: 'Exorcists Eye (Spirit 1)', requirements: spheres.spirit > 0, roteSkills: ['occult', 'survival', 'socialize']},
  {name: 'Gremlins (Spirit 1)', requirements: spheres.spirit > 0, roteSkills: ['larceny', 'politics', 'subterfuge']},
  {name: 'Invoke Bane (Spirit 1)', requirements: spheres.spirit > 0, roteSkills: ['brawl', 'intimidation', 'occult']},
  {name: 'Know Spirit (Spirit 1)', requirements: spheres.spirit > 0, roteSkills: ['brawl', 'academics', 'socialize']},
  {name: 'Cap the Well (Spirit 2)', requirements: spheres.spirit > 1, roteSkills: ['politics', 'survival', 'persuasion']},
  {name: 'Channel Essence (Spirit 2)', requirements: spheres.spirit > 1, roteSkills: ['occult', 'survival', 'persuasion']},
  {name: 'Command Spirit (Spirit 2)', requirements: spheres.spirit > 1, roteSkills: ['medicine', 'athletics', 'persuasion']},
  {name: 'Ephemeral Shield (Spirit 2)', requirements: spheres.spirit > 1, roteSkills: ['medicine', 'animal ken', 'stealth']},
  {name: 'Gossamer Touch (Spirit 2)', requirements: spheres.spirit > 1, roteSkills: ['brawl', 'crafts', 'intimidation']},
  {name: 'Opener of the Way (Spirit 2)', requirements: spheres.spirit > 1, roteSkills: ['athletics', 'computers', 'socialize']},
  {name: 'Shadow Walk (Spirit 2)', requirements: spheres.spirit > 1, roteSkills: ['occult', 'stealth', 'streetwise']},
  {name: 'Slumber (Spirit 2)', requirements: spheres.spirit > 1, roteSkills: ['occult', 'expression', 'weaponry']},
  {name: 'Bolster Spirit (Spirit 3)', requirements: spheres.spirit > 2, roteSkills: ['occult', 'expression', 'medicine']},
  {name: 'Erode Resonance (Spirit 3)', requirements: spheres.spirit > 2, roteSkills: ['crafts', 'brawl', 'intimidation']},
  {name: 'Howl From Beyond (Spirit 3)', requirements: spheres.spirit > 2, roteSkills: ['expression', 'firearms', 'medicine']},
  {name: 'Place of Power (Spirit 3)', requirements: spheres.spirit > 2, roteSkills: ['expression', 'academics', 'survival']},
  {name: 'Reaching (Spirit 3)', requirements: spheres.spirit > 2, roteSkills: ['athletics', 'medicine', 'socialize']},
  {name: 'Rouse Spirit (Spirit 3)', requirements: spheres.spirit > 2, roteSkills: ['athletics', 'expression', 'investigation']},
  {name: 'Summon Spirit (Spirit 3)', requirements: spheres.spirit > 2, roteSkills: ['persuasion', 'occult', 'socialize']},
  {name: 'Banishment (Spirit 4)', requirements: spheres.spirit > 3, roteSkills: ['brawl', 'expression', 'occult']},
  {name: 'Bind Spirit (Spirit 4)', requirements: spheres.spirit > 3, roteSkills: ['brawl', 'crafts', 'intimidation']},
  {name: 'Craft Fetish (Spirit 4)', requirements: spheres.spirit > 3, roteSkills: ['occult', 'crafts', 'persuasion']},
  {name: 'Familiar (Spirit 4)', requirements: spheres.spirit > 3, roteSkills: ['athletics', 'expression', 'intimidation']},
  {name: 'Shadow Scream (Spirit 4)', requirements: spheres.spirit > 3, roteSkills: ['firearms', 'expression', 'medicine']},
  {name: 'Shape Spirit (Spirit 4)', requirements: spheres.spirit > 3, roteSkills: ['crafts', 'persuasion', 'medicine']},
  {name: 'Twilit Body (Spirit 4)', requirements: spheres.spirit > 3, roteSkills: ['occult', 'subterfuge', 'survival']},
  {name: 'World Walker (Spirit 4)', requirements: spheres.spirit > 3, roteSkills: ['athletics', 'persuasion', 'survival']},
  {name: 'Annihilate Spirit (Spirit 5)', requirements: spheres.spirit > 4, roteSkills: ['intimidation', 'science', 'weaponry']},
  {name: 'Birth Spirit (Spirit 5)', requirements: spheres.spirit > 4, roteSkills: ['crafts', 'medicine', 'expression']},
  {name: 'Create Locus (Spirit 5)', requirements: spheres.spirit > 4, roteSkills: ['crafts', 'empathy', 'survival']},
  {name: 'Essence Fountain (Spirit 5)', requirements: spheres.spirit > 4, roteSkills: ['expression', 'empathy', 'occult']},
  {name: 'Spirit Manse (Spirit 5)', requirements: spheres.spirit > 4, roteSkills: ['expression', 'crafts', 'survival']}];
  let mindSpells = [{name: 'Know Nature (Mind 1)', requirements: spheres.mind > 0, roteSkills: ['empathy', 'science', 'subterfuge']},
  {name: 'Mental Scan (Mind 1)', requirements: spheres.mind > 0, roteSkills: ['empathy', 'investigation', 'occult']},
  {name: 'One Mind, Two Thoughts (Mind 1)', requirements: spheres.mind > 0, roteSkills: ['academics', 'expression', 'science']},
  {name: 'Perfect Recall (Mind 1)', requirements: spheres.mind > 0, roteSkills: ['academics', 'expression', 'investigation']},
  {name: 'Dream Reaching (Mind 2)', requirements: spheres.mind > 1, roteSkills: ['empathy', 'medicine', 'persuasion']},
  {name: 'Alter Mental Pattern (Mind 2)', requirements: spheres.mind > 1, roteSkills: ['science', 'stealth', 'subterfuge']},
  {name: 'Emotional Urging (Mind 2)', requirements: spheres.mind > 1, roteSkills: ['empathy', 'intimidation', 'subterfuge']},
  {name: 'First Impressions (Mind 2)', requirements: spheres.mind > 1, roteSkills: ['crafts', 'socialize', 'subterfuge']},
  {name: 'Incognito Presence (Mind 2)', requirements: spheres.mind > 1, roteSkills: ['stealth', 'empathy', 'subterfuge']},
  {name: 'Memory Hole (Mind 2)', requirements: spheres.mind > 1, roteSkills: ['academics', 'medicine', 'subterfuge']},
  {name: 'Mental Shield (Mind 2)', requirements: spheres.mind > 1, roteSkills: ['academics', 'intimidation', 'survival']},
  {name: 'Psychic Domination (Mind 2)', requirements: spheres.mind > 1, roteSkills: ['expression', 'intimidation', 'subterfuge']},
  {name: 'Telepathy (Mind 2)', requirements: spheres.mind > 1, roteSkills: ['crafts', 'empathy', 'socialize']},
  {name: 'Augment Mind (Mind 3)', requirements: spheres.mind > 2, roteSkills: ['academics', 'expression', 'survival']},
  {name: 'Befuddle (Mind 3)', requirements: spheres.mind > 2, roteSkills: ['intimidation', 'persuasion', 'science']},
  {name: 'Clear Thoughts (Mind 3)', requirements: spheres.mind > 2, roteSkills: ['intimidation', 'persuasion', 'empathy']},
  {name: 'Enhance SKill (Mind 3)', requirements: spheres.mind > 2, roteSkills: ['academics', 'expression', 'survival']},
  {name: 'Goetic Summons (Mind 3)', requirements: spheres.mind > 2, roteSkills: ['persuasion', 'socialize', 'occult']},
  {name: 'Imposter (Mind 3)', requirements: spheres.mind > 2, roteSkills: ['persuasion', 'stealth', 'subterfuge']},
  {name: 'Psychic Assault (Mind 3)', requirements: spheres.mind > 2, roteSkills: ['academics', 'intimidation', 'medicine']},
  {name: 'Sleep of the Just (Mind 3)', requirements: spheres.mind > 2, roteSkills: ['academics', 'athletics', 'occult']},
  {name: 'Read the Depths (Mind 3)', requirements: spheres.mind > 2, roteSkills: ['empathy', 'investigation', 'medicine']},
  {name: 'Universal Language (Mind 3)', requirements: spheres.mind > 2, roteSkills: ['academics', 'investigation', 'persuasion']},
  {name: 'Gain Skill (Mind 4)', requirements: spheres.mind > 3, roteSkills: ['crafts', 'expression', 'science']},
  {name: 'Hallucination (Mind 4)', requirements: spheres.mind > 3, roteSkills: ['academics', 'persuasion', 'subterfuge']},
  {name: 'Mind Flay (Mind 4)', requirements: spheres.mind > 3, roteSkills: ['intimidation', 'persuasion', 'medicine']},
  {name: 'Posession (Mind 4)', requirements: spheres.mind > 3, roteSkills: ['subterfuge', 'persuasion', 'medicine']},
  {name: 'Psychic Projection (Mind 4)', requirements: spheres.mind > 3, roteSkills: ['academics', 'occult', 'socialize']},
  {name: 'Psychic Reprogramming (Mind 4)', requirements: spheres.mind > 3, roteSkills: ['intimidation', 'medicine', 'persuasion']},
  {name: 'Terrorize (Mind 4)', requirements: spheres.mind > 3, roteSkills: ['intimidation', 'medicine', 'expression']},
  {name: 'Amorality (Mind 5)', requirements: spheres.mind > 4, roteSkills: ['crafts', 'empathy', 'expression']},
  {name: 'No Exit (Mind 5)', requirements: spheres.mind > 4, roteSkills: ['persuasion', 'science', 'expression']},
  {name: 'Mind Wipe (Mind 5)', requirements: spheres.mind > 4, roteSkills: ['academics', 'intimidation', 'occult']},
  {name: 'Psychic Genesis (Mind 5)', requirements: spheres.mind > 4, roteSkills: ['academics', 'expression', 'science']},
  {name: 'Social Networking (Mind 5)', requirements: spheres.mind > 4, roteSkills: ['persuasion', 'politics', 'socialize']}];
  let timeSpells = [{name: 'Divination (Time 1)', requirements: spheres.time > 0, roteSkills: ['empathy', 'investigation', 'academics']},
  {name: 'Green Light/ Red Light (Time 1)', requirements: spheres.time > 0, roteSkills: ['computer', 'larceny', 'subterfuge']},
  {name: 'Momentary Flux (Time 1)', requirements: spheres.time > 0, roteSkills: ['investigation', 'streetwise', 'survival']},
  {name: 'Perfect Timing (Time 1)', requirements: spheres.time > 0, roteSkills: ['empathy', 'streetwise', 'socialize']},
  {name: 'Postcognition (Time 1)', requirements: spheres.time > 0, roteSkills: ['empathy', 'academics', 'investigation']},
  {name: 'Choose the Thread (Time 2)', requirements: spheres.time > 2, roteSkills: ['occult', 'science', 'subterfuge']},
  {name: 'Constant Presence (Time 2)', requirements: spheres.time > 1, roteSkills: ['occult', 'persuasion', 'survival']},
  {name: 'Hung Spell (Time 2)', requirements: spheres.time > 1, roteSkills: ['occult', 'persuasion', 'crafts']},
  {name: 'Shield of Chronos (Time 2)', requirements: spheres.time > 1, roteSkills: ['athletics', 'stealth', 'subterfuge']},
  {name: 'Tipping the Hourglass (Time 2)', requirements: spheres.time > 1, roteSkills: ['athletics', 'crafts', 'investigation']},
  {name: 'Veil of Moments (Time 2)', requirements: spheres.time > 1, roteSkills: ['medicine', 'subterfuge', 'investigation']},
  {name: 'Acceleration (Time 3)', requirements: spheres.time > 2, roteSkills: ['athletics', 'drive', 'stealth']},
  {name: 'Chrono\'s Curse (Time 3)', requirements: spheres.time > 2, roteSkills: ['academics', 'occult', 'intimidation']},
  {name: 'Shifting Sands (Time 3)', requirements: spheres.time > 2, roteSkills: ['academics', 'occult', 'survival']},
  {name: 'Temporal Summoning (Time 3)', requirements: spheres.time > 2, roteSkills: ['athletics', 'investigation', 'persuasion']},
  {name: 'Weight of Years (Time 3)', requirements: spheres.time > 2, roteSkills: ['crafts', 'intimidation', 'medicine']},
  {name: 'Present as Past (Time 4)', requirements: spheres.time > 3, roteSkills: ['empathy', 'investigation', 'streetwise']},
  {name: 'Prophecy (Time 4)', requirements: spheres.time > 3, roteSkills: ['academics', 'investigation', 'expression']},
  {name: 'Rend Lifespan (Time 4)', requirements: spheres.time > 3, roteSkills: ['athletics', 'medicine', 'intimidation']},
  {name: 'Rewrite History (Time 4)', requirements: spheres.time > 3, roteSkills: ['expresion', 'investigation', 'persuasion']},
  {name: 'Temporal Stutter (Time 4)', requirements: spheres.time > 3, roteSkills: ['intimidation', 'science', 'survival']},
  {name: 'Blink of an Eye (Time 5)', requirements: spheres.time > 4, roteSkills: ['academics', 'crafts', 'occult']},
  {name: 'Corridors of Time (Time 5)', requirements: spheres.time > 4, roteSkills: ['academics', 'investigation', 'persuasion']},
  {name: 'Temporal Pocket (Time 5)', requirements: spheres.time > 4, roteSkills: ['occult', 'science', 'stealth']}];
  switch (sphere) {
    case 'death':
      return deathSpells;
    case 'forces':
      return forcesSpells;
    case 'life':
      return lifeSpells;
    case 'matter':
      return matterSpells;
    case 'prime':
      return primeSpells;
    case 'fate':
      return fateSpells;
    case 'space':
      return spaceSpells;
    case 'spirit':
      return spiritSpells;
    case 'mind':
      return mindSpells;
    case 'time':
      return timeSpells;
  }
}

function spellToString(spellList, skillList = []){
  let str = '';
  if (skillList.length < 1) {
    str='<tr><th>Praxis</th><tr>'
    for (var p in spellList){
        if (spellList.hasOwnProperty(p)){
            str += "<tr><td>" + spellList[p] + '</td></tr>';
        }
    }
  } else {
    str='<tr><th>Rotes</th><tr>';
    for (var p in spellList){
        if (spellList.hasOwnProperty(p)){
            str += "<tr><td>" + spellList[p] + ' Rote Skill: ' + skillList[p] + '</td></tr>';
        }
    }
  }
  //console.log(str);
  return str;
}

function rotes(skills, spheres, powerLevel) {
  let numberRotes = 0;
  if (powerLevel === 'starting') {
    numberRotes = 5;
  } else if (powerLevel === 'disciple') {
    numberRotes = 6;
  } else if (powerLevel === 'adept') {
    numberRotes = 7;
  } else {
    numberRotes = 8;
  }
  let roteList = [];
  let roteSkillList = [];
  let availableSpheres = []
  let allSpheres = Object.keys(spheres);
  let sphereValues = Object.values(spheres);
  for (i in allSpheres) {
    if (sphereValues[i] > 0) {
      availableSpheres.push(allSpheres[i])
    }
  }
  while (numberRotes > 0) {
    let roll = Math.floor(Math.random() * availableSpheres.length);
    spellSphere = availableSpheres[roll];
    spellList = getSpells(spellSphere, spheres);
    roll = Math.floor(Math.random()*spellList.length);
    let spell = spellList[roll];
    if (spell.requirements) {
      if (roteList.includes(spell.name) === false) {
         roteList.push(spell.name);
         numberRotes -= 1;
         roteSkillList.push(getRoteSkill(spell, skills))
      }
    }
  } 
  return [roteList, roteSkillList];
}

function getRoteSkill (spell, skills) {   
  let possibleSkills = spell.roteSkills;
  valueOne = (skills[possibleSkills[0]]);
  valueTwo = (skills[possibleSkills[1]]);
  valueThree = (skills[possibleSkills[2]]);
  if (valueOne >= valueTwo && valueOne >= valueThree) {
    return possibleSkills[0];    
  } else if (valueTwo >= valueThree) {
      return possibleSkills[1];
  } else {
      return possibleSkills[2];
  }
}

function addSkills (skills, gnosis, level) {
  let skillsList = [];
  let zeroSkills = [];
  let skillPoints = 0;
  let roll = 0;
  for (const skill of Object.keys(skills)) {
    if (skills[skill] > 0) {
      skillsList.push(skill)
    } else {
      zeroSkills.push(skill)
    }
  }
  const skillMax = 5 + Math.max(0, gnosis - 5);
  if (level === 'starting') {
      skillPoints = 0;
    } else if (level === 'disciple') {
      skillPoints = Math.floor(Math.random()*20);
    } else if (level === 'adept') {
      skillPoints = 6 + Math.floor(Math.random()*30);
    } else if (level === 'master') {
      skillPoints = 7 + Math.floor(Math.random()*35);
    }
  while (skillPoints > 0) {
    roll = Math.floor(Math.random() * skillsList.length+1);
    if (roll < skillsList.length) {
      checkSkill = skillsList[roll];
      if (skills[checkSkill] < skillMax) {
        skills[checkSkill] += 1;
        skillPoints -= 1;
      }
    } else {
      roll = Math.floor(Math.random() * zeroSkills.length);
      newSkill = zeroSkills[roll];
      zeroSkills.splice(roll, 1);
      skillsList[newSkill] = 1;
      skillPoints -=1;
    }
  }
}

function mageCreator() {
    let meritList = document.querySelector(".merits");
    let praxisList = document.querySelector(".praxis");
    let roteList = document.querySelector(".rotes")
    let pathSelection = document.getElementById('path_selection').value;
    let orderSelection = document.getElementById('order_selection').value;
    let path = getPath(pathSelection);
    let faction = getFaction(orderSelection);
    let powerLevel = document.getElementById('power').value;
    let gnosis = generateGnosis(powerLevel);
    let attributes = randomAttributes(powerLevel, gnosis);
    let skills = randomSkill(powerLevel, gnosis);
    addSkills(skills, gnosis, powerLevel);
    let spheres = arcana(powerLevel, path);
    let others = calculated(attributes, gnosis, skills);
    let merits = randomMerits(gnosis, faction, skills, attributes, spheres, powerLevel);
    let finalMerits = meritCleanup(merits, skills, others);
    let meritString = meritToString(finalMerits);
    let praxes = praxis(path, gnosis, spheres);
    let praxisString = spellToString(praxes);
    let [rotesInitial, roteSkillsInitial] = rotes(skills, spheres, powerLevel);
    let roteString = spellToString(rotesInitial, roteSkillsInitial)
    addSkills(skills, gnosis, powerLevel);
    //display character labels
    document.getElementById('path').innerHTML = path.path;
    document.getElementById('virtue').innerHTML = others.virtue;
    document.getElementById('vice').innerHTML = others.vice;
    document.getElementById('faction').innerHTML = faction;
    //display attributes
    document.getElementById('int').innerHTML = attributes.inteligence;
    document.getElementById('wits').innerHTML = attributes.wits;
    document.getElementById('res').innerHTML = attributes.resolve;
    document.getElementById('str').innerHTML = attributes.strength;
    document.getElementById('dex').innerHTML = attributes.dexterity;
    document.getElementById('sta').innerHTML = attributes.stamina;
    document.getElementById('pres').innerHTML = attributes.presence;
    document.getElementById('manip').innerHTML = attributes.manipulation;
    document.getElementById('comp').innerHTML = attributes.composure;
    //display skills
    document.getElementById('aca').innerHTML = skills.academics;
    document.getElementById('com').innerHTML = skills.computer;
    document.getElementById('cra').innerHTML = skills.crafts;
    document.getElementById('inv').innerHTML = skills.investigation;
    document.getElementById('med').innerHTML = skills.medicine;
    document.getElementById('occ').innerHTML = skills.occult;
    document.getElementById('pol').innerHTML = skills.politics;
    document.getElementById('sci').innerHTML = skills.science;
    document.getElementById('ath').innerHTML = skills.athletics;
    document.getElementById('bra').innerHTML = skills.brawl;
    document.getElementById('dri').innerHTML = skills.drive;
    document.getElementById('fir').innerHTML = skills.firearms;
    document.getElementById('lar').innerHTML = skills.larceny;
    document.getElementById('ste').innerHTML = skills.stealth;
    document.getElementById('sur').innerHTML = skills.survival;
    document.getElementById('wea').innerHTML = skills.weaponry;
    document.getElementById('ani').innerHTML = skills.animalKen;
    document.getElementById('emp').innerHTML = skills.empathy;
    document.getElementById('exp').innerHTML = skills.expression;
    document.getElementById('intim').innerHTML = skills.intimidation;
    document.getElementById('per').innerHTML = skills.persuasion;
    document.getElementById('soc').innerHTML = skills.socialize;
    document.getElementById('street').innerHTML = skills.streetwise;
    document.getElementById('sub').innerHTML = skills.subterfuge;
    //display arcana
    document.getElementById('death').innerHTML = spheres.death;
    document.getElementById('fate').innerHTML = spheres.fate;
    document.getElementById('forces').innerHTML = spheres.forces;
    document.getElementById('life').innerHTML = spheres.life;
    document.getElementById('matter').innerHTML = spheres.matter;
    document.getElementById('mind').innerHTML = spheres.mind;
    document.getElementById('prime').innerHTML = spheres.prime;
    document.getElementById('space').innerHTML = spheres.space;
    document.getElementById('spirit').innerHTML = spheres.spirit;
    document.getElementById('time').innerHTML = spheres.time;
    //display other stats
    document.getElementById('gnosis').innerHTML = gnosis;
    document.getElementById('mana').innerHTML = others.mana;
    document.getElementById('wisdom').innerHTML = others.wisdom;
    document.getElementById('health').innerHTML = others.health;
    document.getElementById('willpower').innerHTML = others.willpower;
    document.getElementById('size').innerHTML = others.size;
    document.getElementById('speed').innerHTML = others.speed;
    document.getElementById('defense').innerHTML = others.defense;
    document.getElementById('initiative').innerHTML = others.initiative;
    meritList.innerHTML = meritString;
    praxisList.innerHTML = praxisString;
    roteList.innerHTML = roteString
}