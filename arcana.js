function arcana(powerLevel, path) {
    let arcanum = {'death': 0, 'fate':0, 'forces':0, 'life':0,
    'matter':0, 'mind':0, 'prime':0, 'space':0, 'spirit':0, 'time':0};
    let dots = 6;
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

function addArcana (gnosis, powerLevel, spheres) {
  let highSphere = 0;
  let otherSphere = 0;
  let sphereList = [];
  let zeroSpheres = [];
  for (const sphere of Object.keys(spheres)) {
    if (spheres[sphere] > 0) {
      sphereList.push(sphere)
    } else {
      zeroSpheres.push(sphere)
    }
  };
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
  let dots = 0;
  if (powerLevel ==='starting') {
      dots = 0;
    } else if (powerLevel === 'disciple') {
      dots = 1 + Math.floor(Math.random()*4);
    } else if (powerLevel === 'adept') {
      dots = 2 + Math.floor(Math.random()*8);
    } else if (powerLevel === 'master') {
      dots = 4 + Math.floor(Math.random()*7);
    }
  let sphereMax = 3;
  while (dots > 0) {
    sphereMax = (Math.max(Object.values(spheres)) < highSphere) ? highSphere : otherSphere;
    roll = Math.floor(Math.random()*sphereList.length + 1);
    if (roll < sphereList.length) {
      const checkSphere = sphereList[roll];
      if (spheres[checkSphere] < sphereMax) {
        spheres[checkSphere] += 1;
        dots -= 1;
      }
    } else {
      roll = Math.floor(Math.random()*zeroSpheres.length);
      spheres[zeroSpheres[roll]] = 1;
      dots -= 1;
      zeroSpheres.splice(roll, 1);
    }
  }
}