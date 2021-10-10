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

function randomMerits(gnosis, faction, skills, attributes, spheres, level, allMerits = allMerits) {
  let merits = {};
  let meritPoints = Math.max(0, (15 - ((gnosis) * 5)));
  let roll = 0;
  if (faction != 'Apostate') {
    merits['High Speech'] = 1;
    merits['Order Status('+faction+')'] = 1;
  }
while (meritPoints > 0) {
  for (const merit of allMerits) {
    if (merit.requirements) {
      merit.requirements = true;
    }
  }
  roll = Math.floor(Math.random()*allMerits.length);
    check = allMerits[roll]
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
  let currentMerits = [];
  if (level === 'starting') {
    meritPoints = 0;
  } else if (level === 'disciple') {
    meritPoints = 10 + Math.floor(Math.random()*13);
  } else if (level === 'adept') {
    meritPoints = 10 + Math.floor(Math.random()*27);
  } else if (level === 'master') {
    meritPoints = 15 + Math.floor(Math.random()*22); 
  }
  for (const merit in merits) {
    currentMerits.push(merit);
  }
  while (meritPoints > 0) {
    //console.log('Current merits: ' + currentMerits);
    let meritInfo = {};
    roll = Math.floor(Math.random() * currentMerits.length + 1);
    if (roll < currentMerits.length) {
      const check = currentMerits[roll];
      //console.log('Existing merit: ' + check);
      for (const merit of allMerits) {
        if (merit.name === check) {
          meritInfo = merit;
          //console.log('Merit info found.');
        }
      }
      if (merits[check] <= (meritInfo.max - meritInfo.increment)) {
        merits[check] += meritInfo.increment;
        meritPoints -= meritInfo.increment;
      }
    } else {
      roll = Math.floor(Math.random()*allMerits.length);
      check = allMerits[roll]
      if (!merits[check.name] && check.requirements) {
        if (meritPoints >= (check.min)) {
          merits[check.name] = check.min;
          meritPoints -= check.min;
          currentMerits.push(check.name);
        }
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