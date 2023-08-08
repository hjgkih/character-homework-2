const types = ['Bowerman', 'Swordsman', 'Magician', 'Daemon', 'Undead', 'Zombie'];

export default class Character {
  constructor(name, type) {
    if (typeof name !== 'string' || name.length < 2 || name.length > 10) {
      throw new Error('Имя должно содержать не менее двух и не более десяти символов и состоять из букв!');
    }
    if (!types.includes(type)) {
      throw new Error('Не корректное имя персонажа');
    }
    this.name = name;
    this.type = type;
    this.health = 100;
    this.level = 1;
  }

  levelup() {
    if (this.health < 0) {
      throw new Error('Нельзя повысить уровень умершего');
    }
    this.level += 1;
    this.health = 100;
    this.attack *= 1.2;
    this.defence *= 1.2;
  }

  damage(points) {
    if (this.health < 0) {
      throw new Error('Нельзя нанести урон умершему');
    }

    this.health -= points * (1 - this.defence / 100);
  }
}
