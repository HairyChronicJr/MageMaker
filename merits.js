

function randomMerits(gnosis, faction, skills, attributes, spheres, level) {
  //initialize empty merits object
  let merits = {};
  //list of all available merits
  const allMerits = [{name: "Imbued Item", min: 1, max: 10, increment: 1, requirements: true},
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
  //calculate starting merits based on Gnosis
  let meritPoints = Math.max(0, (15 - ((gnosis) * 5)));
  //initialize roll variable
  let roll = 0;
  //add starting auto merits for faction members
  if (faction != 'Apostate') {
    merits['High Speech'] = 1;
    merits['Order Status('+faction+')'] = 1;
  }
  //check which merits are available based on requirements
while (meritPoints > 0) {
  for (const merit of allMerits) {
    if (merit.requirements) {
      merit.requirements = true;
    }
  }
  //roll for random merit
  roll = Math.floor(Math.random()*allMerits.length);
    //cache rolled merit in variable
    check = allMerits[roll]
    //check if character already has merit
    if (merits[check.name]) {
      //check if character has enough available points for increase
      if (meritPoints >= check.increment) {
        //check if merit can be increased
        if (merits[check.name] < (check.max - check.increment)) {
          merits[check.name] += check.increment;
          meritPoints -= check.increment;
        }
      }
    //check if character meets requirements for new merit
    } else if (check.requirements) {
      //check if character has enough points for merit
      if (meritPoints >= (check.min)) {
        merits[check.name] = check.min;
        meritPoints -= check.min;
      }
    }
  }
  //initialize current merits array
  let currentMerits = [];
  //set additional merit points based on power level
  if (level === 'starting') {
    meritPoints = 0;
  } else if (level === 'disciple') {
    meritPoints = 10 + Math.floor(Math.random()*13);
  } else if (level === 'adept') {
    meritPoints = 10 + Math.floor(Math.random()*27);
  } else if (level === 'master') {
    meritPoints = 15 + Math.floor(Math.random()*22); 
  }
  //add merits to current merits array
  for (const merit in merits) {
    currentMerits.push(merit);
  }
  while (meritPoints > 0) {
    //cache variable for potential merit
    let meritInfo = {};
    //roll to see if increasing existing merit or adding new
    roll = Math.floor(Math.random() * currentMerits.length + 1);
    if (roll < currentMerits.length) {
      //put rolled merit in cache variable
      const check = currentMerits[roll];
      //get merit info from all merits array
      for (const merit of allMerits) {
        if (merit.name === check) {
          meritInfo = merit;
        }
      }
      //check if character has enough points for increase
      if (merits[check] <= (meritInfo.max - meritInfo.increment)) {
        merits[check] += meritInfo.increment;
        meritPoints -= meritInfo.increment;
      }
    } else {
      //roll new merit from all merits array
      roll = Math.floor(Math.random()*allMerits.length);
      //stashed rolled merit in cach variable
      check = allMerits[roll]
      //verify if character has merit and meets requirements
      if (!merits[check.name] && check.requirements) {
        //verify if character has enough points to add merit
        if (meritPoints >= (check.min)) {
          merits[check.name] = check.min;
          meritPoints -= check.min;
          currentMerits.push(check.name);
        }
      //reset requirements based on new merit values
      for (const merit of allMerits) {
        if (merit.requirements) {
        merit.requirements = true;
        }
      }
      }
    }
  }
  return merits;
}

function meritCleanup (merits, skills, others, vice, virtue) {
  //Array of factions for faction specific merits
  let factions = ['Politics', 'Medical', 'Scholars', 'Criminals','Media', 'Homeless', 'Artists', 'Occult', 'Business', 'Supernatural', 'Police', 'Church']
  //Initialize empty merits array
  let newMerits = {};
  //Check each item in existing merits array
  for (i in merits) {
  if (i === 'Allies') {
    //Roll random faction and append it to Allies
    let roll = Math.floor(Math.random() * factions.length);
    let area = factions[roll];
    let newMeritName = "Allies(" + area +")";
    newMerits[newMeritName] = merits['Allies'];
  } else if (i === 'Contacts') {
    //Roll random faction for each dot of Contacts
    for (a = 0; a < merits['Contacts']; a++) {
      let roll = Math.floor(Math.random() * factions.length);
      let area = factions[roll];
      let newMeritName = "Contacts(" + area +")";
      newMerits[newMeritName] = 1;
    }
  } else if (i === 'Defensive Combat') {
    //Check if Brawl or Weaponry is higher than Athletics
    if (skills.brawl > skills.athletics || skills.weaponry > skills.athletics) {
      //set Defense to higher skill
      let newDefense = Math.max(skills.brawl, skills.weaponry);
      others.defense = others.defense - skills.athletics + newDefense;
      //Add defensive combat to new merits object
      newMerits[i] = merits[i];
    }
  } else if (i === 'Library') {
    //Extract mental skills from skills array
    let mentalSkills = {'Academics': skills.academics, 'Crafts': skills.crafts, 'Computer': skills.computer,
    'Investigation': skills.investigation, 'Medicine': skills.medicine, 'Occult': skills.occult,
    'Politics': skills.politics, 'Science': skills.science};
    //find value of highest mental skill
let max = Math.max.apply(null,Object.keys(mentalSkills).map(function(x){ return mentalSkills[x] }));
//find name of highest mental skill
let maxString = (Object.keys(mentalSkills).filter(function(x){ return mentalSkills[x] == max; })[0]);
//set Library subject to highest mental skill
    let newMeritName = "Library(" + maxString +")";
    newMerits[newMeritName] = merits['Library'];
  } else if (i === 'Status') {
    //roll random faction and append it to Status
    let roll = Math.floor(Math.random() * factions.length);
    let area = factions[roll];
    let newMeritName = "Status(" + area +")";
    newMerits[newMeritName] = merits['Status'];
  } else if (i === 'Fast Reflexes') {
    //add Fast Reflexes value to initiative
    others.initiative += merits['Fast Reflexes'];
    newMerits[i] = merits[i];
  } else if (i === 'Vice Ridden') {
    //Add second vice for Vice Ridden
    let newVice = getVice();
    while (newVice === others.vice) {
      newVice = getVice();
    } 
    newVice = others.vice + '/ ' + newVice;
    others.vice = newVice;
    newMerits[i] = merits[i];
  } else if (i === 'Virtuous') {
    //add second virtue for Virtuous
    let newVirtue = getVirtue();
    while (newVirtue === others.virtue) {
      newVirtue = getVirtue();
    } 
    newVirtue = others.virtue + '/ ' + newVirtue;
    others.virtue = newVirtue;
    newMerits[i] = merits[i];
  } else if (i === 'Fleet of Foot') {
    //Add Fleet of Foot value to Speed
    others.speed += merits['Fleet of Foot'];
    newMerits[i] = merits[i];
  } else if (i === 'Giant') {
    //Increase size and health boxes for Giant
    others.size += 1;
    others.health += 1;
    newMerits[i] = merits[i];
  } else if (i === 'Small Framed') {
    //decrease size and health boxes for Small Framed
    others.size -= 1;
    others.health -= 1;
    newMerits[i] = merits[i];
  } else {
    //Add all other merits to new merits object
    newMerits[i] = merits[i];
  }
  }
  return newMerits;
}

function meritToString (merits) {
  //Set header for merits table
  let str = '<th>Merits</th>';
  //Convert elements in merits object to html table
  for (var p in merits) {
    if (merits.hasOwnProperty(p)) {
      str += "<tr><td>" + p + ': ' + merits[p] + '</td></tr>';
    }
  }
  return str;
}
