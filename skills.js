function randomSkill(level, gnosis) {
  let allSkills = {academics: 0, computer: 0, crafts: 0, investigation: 0, medicine: 0, 
  occult: 0, politics: 0, science: 0, athletics: 0, 
  brawl: 0, drive: 0, firearms: 0, larceny: 0, stealth: 0, survival: 0, weaponry: 0, animalKen: 0,empathy: 0, expression: 0, intimidation: 0, persuasion: 0, socialize: 0, streetwise: 0, subterfuge: 0};
  let primary = 11;
  let secondary = 7;
  let tertiary = 4;
  const skillMax = 5 + Math.max(0, gnosis - 5);
  let roll = Math.floor(Math.random()*3);
  if (roll === 0) {
    assignMentalSkills(primary, skillMax, allSkills);
    if (roll === 0) {
      assignPhysicalSkills(secondary, skillMax, allSkills);
      assignSocialSkills(tertiary, skillMax, allSkills);
    } else {
      assignSocialSkills(secondary, skillMax, allSkills);
      assignPhysicalSkills(tertiary, skillMax, allSkills);
    }
  } else if (roll === 1) {
    assignPhysicalSkills(primary, skillMax, allSkills);
    roll = Math.floor(Math.random()*2);
    if (roll === 0) {
      assignSocialSkills(secondary, skillMax, allSkills);
      assignMentalSkills(tertiary, skillMax, allSkills);
    } else {
      assignMentalSkills(secondary, skillMax, allSkills);
      assignSocialSkills(tertiary, skillMax, allSkills);
    }
  } else if (roll === 2) {
    assignSocialSkills(primary, skillMax, allSkills);
    roll = Math.floor(Math.random()*2);
    if (roll === 0) {
      assignPhysicalSkills(secondary, skillMax, allSkills);
      assignMentalSkills(tertiary, skillMax, allSkills);
    } else {
      assignMentalSkills(secondary, skillMax, allSkills);  
      assignPhysicalSkills(tertiary, skillMax, allSkills);
    }
  }
  return allSkills;
}

  function assignPhysicalSkills(points, skillMax, allSkills) {
    skills = assignSkills(points, skillMax);
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
    skills = assignSkills(points, skillMax);
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
    let skills = assignSkills(points, skillMax);
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