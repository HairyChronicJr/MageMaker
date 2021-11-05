//Assign arcanum for starting level characters
function arcana(powerLevel, path) {
    //Declare empty arcana object
    let arcanum = {'death': 0, 'fate':0, 'forces':0, 'life':0,
    'matter':0, 'mind':0, 'prime':0, 'space':0, 'spirit':0, 'time':0};
    //Set starting dots
    let dots = 6;
    //Assign one dot to each ruling arcanum
    for (sphere in arcanum) {
      if (path.ruling.includes(sphere)) {
        arcanum[sphere] += 1;
        dots -= 1;
      }
    }
    //Assign extra dot to one ruling arcanum
    let roll = Math.floor(Math.random()*2);
    arcanum[path.ruling[roll]] += 1;
    dots -= 1;
    //Assign remaing dots to non-inferior spheres
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

//Add extra arcan dots for higher level characters
function addArcana (gnosis, powerLevel, spheres) {
  //Initialize starting values
  let highSphere = 0;
  let otherSphere = 0;
  let sphereList = [];
  let zeroSpheres = [];
  let dots = 0;
  //Seperate spheres into 0 and non-0
  for (const sphere of Object.keys(spheres)) {
    if (spheres[sphere] > 0) {
      sphereList.push(sphere)
    } else {
      zeroSpheres.push(sphere)
    }
  };
  //Set max sphere values based on gnosis
  switch (gnosis) {
    case 1:
      highSphere = 3;
      otherSphere = 2;
      break;
    case 2:
      highSphere = 3;
      otherSphere = 3;
      break;
    case 3:
      highSphere = 4;
      otherSphere = 3;
      break;
    case 4:
      highSphere = 4;
      otherSphere = 4;
      break;
    case 5:
      highSphere = 5;
      otherSphere = 4;
      break;
    default:
      highSphere = 5;
      otherSphere = 5;
  }
  //Assign number of extra dots based on level
  if (powerLevel ==='starting') {
      dots = 0;
    } else if (powerLevel === 'disciple') {
      dots = 1 + Math.floor(Math.random()*4);
    } else if (powerLevel === 'adept') {
      dots = 2 + Math.floor(Math.random()*8);
    } else if (powerLevel === 'master') {
      dots = 4 + Math.floor(Math.random()*7);
    }
  //Set starting sphere maximum
  let sphereMax = 3;
  while (dots > 0) {
    //determine max value based on highest sphere
    sphereMax = (Math.max(Object.values(spheres)) < highSphere) ? highSphere : otherSphere;
    //Roll to determine if increasing sphere or 
    //adding new sphere
    roll = Math.floor(Math.random()*sphereList.length + 1);
    if (roll < sphereList.length) {
      //check if rolled sphere is less than max
      const checkSphere = sphereList[roll];
      if (spheres[checkSphere] < sphereMax) {
        spheres[checkSphere] += 1;
        dots -= 1;
      }
    } else {
      //add new sphere
      roll = Math.floor(Math.random()*zeroSpheres.length);
      spheres[zeroSpheres[roll]] = 1;
      dots -= 1;
      zeroSpheres.splice(roll, 1);
    }
  }
}