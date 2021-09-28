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