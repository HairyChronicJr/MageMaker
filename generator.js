

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
    // Add additional options to merits
    let finalMerits = meritCleanup(merits, skills, others);
    //Generate spells
    let praxes = praxis(path, gnosis, spheres);
    let [rotesInitial, roteSkillsInitial] = rotes(skills, spheres, powerLevel);
    //Convert spell, and merit objects to strings
    let meritString = meritToString(finalMerits);
    let praxisString = spellToString(praxes);
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