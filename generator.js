
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

function mageCreator() {
    //Fetch variables for assignment after list generation
    let meritList = document.querySelector(".merits");
    let praxisList = document.querySelector(".praxis");
    let roteList = document.querySelector(".rotes")
    //Transfer user selected values to variables
    let pathSelection = document.getElementById('path_selection').value;
    let orderSelection = document.getElementById('order_selection').value;
    let powerLevel = document.getElementById('power').value;
    //Generate path and fetch associated data
    let path = getPath(pathSelection);
    //Generate path and fetch associated data
    let faction = getFaction(orderSelection);
    //Randomized data generation
    let gnosis = generateGnosis(powerLevel);
    let attributes = randomAttributes(powerLevel, gnosis);
    let skills = randomSkill(powerLevel, gnosis);
    addSkills(skills, gnosis, powerLevel);
    let spheres = arcana(powerLevel, path);
    addArcana (gnosis, powerLevel, spheres);
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