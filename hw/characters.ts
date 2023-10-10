abstract class Character {
  collectGold(): void {
    console.log("Your character collected some gold");
  }
  abstract attack(): void;
  abstract defend(): void;
}

class Ogre extends Character {
  attack(): void {
    console.log("Attacks with a club");
  }
  defend(): void {
    console.log("Defends with a shield");
  }
}

class Peon extends Character {
  attack(): void {
    console.log("Attacks with a club");
  }
  defend(): void {
    console.log("Defends with a shield");
  }
}
class Knight extends Character {
  attack(): void {
    console.log("Attacks with a sword");
  }
  defend(): void {
    console.log("Defends with armor");
  }
}
class Archer extends Character {
  attack(): void {
    console.log("Attacks with a bow and arrow");
  }
  defend(): void {
    console.log("Defends with a tunic");
  }
}
