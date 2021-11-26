function generateGnosis(level) {
  //initialize starting variable
  let roll = 0;
  if (level === 'adept') {
    //Gnosis from 4-6 for adept
    roll = Math.floor(Math.random()*3)+4;
  } else if (level === 'master') {
    //Gnosis from 7-9 for master
    roll = Math.floor(Math.random()*3)+7;
  } else {
    //Gnosis from 1-3 for starting and disciple
    roll = Math.floor((Math.random()*3+1));
  }
    return roll;
}