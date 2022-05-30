class Hero {
  constructor(hero_name, hitpoint, special_ability) {
    this.hero_name = hero_name;
    this.hitpoint = hitpoint;
    this.special_ability = special_ability;
    this.health = 200;
  }

  depleteHealth() {
    this.health = this.health - 50;
    console.log(this.hero_name, "health is now", this.health);
    if (this.health == 0) {
      console.log(this.hero_name, " has died.");
    } else {
      return;
    }
  }
}
let heroName1 = new Hero("Berserker", 200, "none");
let heroName2 = new Hero("Valkyrie", 150, "Spin Attack");
let heroName3 = new Hero("Knight", 250, "Charge Attack");
