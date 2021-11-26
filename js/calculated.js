function calculated (attributes, gnosis, skills){
  //Initial size, virtue and vice
    let size = 5;
    let virtue = getVirtue()
    let vice = getVice()
    //Set defense based on higher of wits or dex
    if (attributes.wits <= attributes.dexterity) {
      defense = attributes.wits + skills.athletics;
    } else {
      defense = attributes.dexterity + skills.athletics;
    }
    //create values object
    let values = {size: size, health: attributes.stamina+size, willpower: attributes.resolve + attributes.composure, initiative: attributes.dexterity + attributes.composure, speed: attributes.strength + attributes.dexterity + 5,  defense: defense, wisdom: 7, mana: (10 + (gnosis - 1)), virtue: virtue, vice: vice};
    return values;
  }