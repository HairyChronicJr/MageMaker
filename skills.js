function randomSkill(level, gnosis) {
  //intialize starting skill values
  let allSkills = {academics: 0, computer: 0, crafts: 0, investigation: 0, medicine: 0, 
  occult: 0, politics: 0, science: 0, athletics: 0, 
  brawl: 0, drive: 0, firearms: 0, larceny: 0, stealth: 0, survival: 0, weaponry: 0, animalKen: 0,empathy: 0, expression: 0, intimidation: 0, persuasion: 0, socialize: 0, streetwise: 0, subterfuge: 0};
  //set starting skill points
  let primary = 11;
  let secondary = 7;
  let tertiary = 4;
  //set skill max based on gnosis
  const skillMax = 5 + Math.max(0, gnosis - 5);
  //roll for skill category priority
  let roll = Math.floor(Math.random()*3);
  if (roll === 0) {
    //assign mental primary
    assignMentalSkills(primary, skillMax, allSkills);
    if (roll === 0) {
      //assign physical secondary, social tertiary
      assignPhysicalSkills(secondary, skillMax, allSkills);
      assignSocialSkills(tertiary, skillMax, allSkills);
    } else {
      //assign social secondary, physical tertiary
      assignSocialSkills(secondary, skillMax, allSkills);
      assignPhysicalSkills(tertiary, skillMax, allSkills);
    }
  } else if (roll === 1) {
    //assign physical primary
    assignPhysicalSkills(primary, skillMax, allSkills);
    roll = Math.floor(Math.random()*2);
    if (roll === 0) {
      //assign social secondary, mental tertiary
      assignSocialSkills(secondary, skillMax, allSkills);
      assignMentalSkills(tertiary, skillMax, allSkills);
    } else {
      //assign mental secondary, social tertiary
      assignMentalSkills(secondary, skillMax, allSkills);
      assignSocialSkills(tertiary, skillMax, allSkills);
    }
  } else if (roll === 2) {
    //assign social primary
    assignSocialSkills(primary, skillMax, allSkills);
    roll = Math.floor(Math.random()*2);
    if (roll === 0) {
      //assign physical secondary, mental tertiary
      assignPhysicalSkills(secondary, skillMax, allSkills);
      assignMentalSkills(tertiary, skillMax, allSkills);
    } else {
      //assign mental secondary, social tertiary
      assignMentalSkills(secondary, skillMax, allSkills);  
      assignPhysicalSkills(tertiary, skillMax, allSkills);
    }
  }
  return allSkills;
}

  function assignPhysicalSkills(points, skillMax, allSkills) {
    //assign skill point generically
    skills = assignSkills(points, skillMax);
    //tranfer generic skills to specific physical skills
    allSkills.athletics = skills.skillOne;
    allSkills.brawl = skills.skillTwo;
    allSkills.drive = skills.skillThree;
    allSkills.firearms = skills.skillFour;
    allSkills.larceny = skills.skillFive; 
    allSkills.stealth = skills.skillSix;
    allSkills.survival = skills.skillSeven;
    allSkills.weaponry = skills.skillEight;
  }

  function assignMentalSkills(points, skillMax, allSkills) {
    //assign skill points generically
    skills = assignSkills(points, skillMax);
    //transfer generic skills to specific mental skills
    allSkills.academics = skills.skillOne;
    allSkills.computer = skills.skillTwo;
    allSkills.crafts = skills.skillThree;
    allSkills.investigation = skills.skillFour;
    allSkills.medicine = skills.skillFive; 
    allSkills.occult = skills.skillSix;
    allSkills.politics = skills.skillSeven;
    allSkills.science = skills.skillEight;
  }

  function assignSocialSkills(points, skillMax, allSkills) {
    //assign skill points generically
    let skills = assignSkills(points, skillMax);
    //transfer generic skills to specific social skills
    allSkills.animalKen = skills.skillOne;
    allSkills.empathy = skills.skillTwo;
    allSkills.expression = skills.skillThree;
    allSkills.intimidation = skills.skillFour;
    allSkills.persuasion = skills.skillFive; 
    allSkills.socialize = skills.skillSix;
    allSkills.streetwise = skills.skillSeven;
    allSkills.subterfuge = skills.skillEight;
  }

  function assignSkills(points, skillMax) {
    //initialize empty skill array
    let skills = {skillOne: 0, skillTwo: 0, skillThree: 0, skillFour: 0,
    skillFive: 0, skillSix: 0, skillSeven: 0, skillEight: 0}
    //extract keys from generic skill object
    let skillKeys = Object.keys(skills);
    //assign points to generic skills
    do {
      roll = Math.floor(Math.random()*8);
      if (skills[skillKeys[roll]] < skillMax ){
          skills[skillKeys[roll]] += 1
          points -= 1
      }
    } while (points > 0);
    return skills;
}


function addSkills (skills, gnosis, level) {
  //initialize starting empty variables
  let skillsList = [];
  let zeroSkills = [];
  let skillPoints = 0;
  let roll = 0;
  //divide skills based on if character has points in them
  for (const skill of Object.keys(skills)) {
    if (skills[skill] > 0) {
      skillsList.push(skill)
    } else {
      zeroSkills.push(skill)
    }
  }
  //set skill max based on gnosis
  const skillMax = 5 + Math.max(0, gnosis - 5);
  //set skill points based on power level
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
    //roll for existing skill or new skill
    roll = Math.floor(Math.random() * skillsList.length+1);
    if (roll < skillsList.length) {
      //put existing skill in cache variable
      checkSkill = skillsList[roll];
      //check if skill is at max
      if (skills[checkSkill] < skillMax) {
        skills[checkSkill] += 1;
        skillPoints -= 1;
      }
    } else {
      //roll for new skill
      roll = Math.floor(Math.random() * zeroSkills.length);
      newSkill = zeroSkills[roll];
      //add point in new skill
      zeroSkills.splice(roll, 1);
      skillsList[newSkill] = 1;
      skillPoints -=1;
    }
  }
}