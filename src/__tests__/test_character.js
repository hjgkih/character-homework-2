import Character from '../js/character';
import Bowerman from '../js/bowerman';

test('name should be more than 2 characters', () => {
  function character() {
    new Character('S', 'Bowerman');
  }

  expect(character).toThrow(/не менее двух/);
});

test('name should be less than 10 characters', () => {
  function character() {
    new Character('Stasikdurachek', 'Bowerman');
  }

  expect(character).toThrow(/не более десяти/);
});

test('name should be a string', () => {
  function character() {
    new Character(32243, 'Bowerman');
  }

  expect(character).toThrow(/состоять из букв/);
});

test('type of character must be one of used in game', () => {
  function character() {
    new Character('stas', 'Witcher');
  }

  expect(character).toThrow(/Не корректное имя персонажа/);
});

test('cant levelup already dead character', () => {
  function character() {
    const result = new Character('stas', 'Bowerman');
    result.health = -1;
    result.levelup();
  }

  expect(character).toThrow(/Нельзя повысить уровень умершего/);
});

test('method levelup works', () => {
  const characterCorrect = {
    name: 'stas',
    type: 'Bowerman',
    health: 100,
    level: 2,
    attack: 30,
    defence: 30,
  };

  const result = new Bowerman('stas', 'Bowerman');
  result.levelup();

  expect(result).toEqual(characterCorrect);
});

test('cant do damage to already dead character', () => {
  function result() {
    const character = new Bowerman('stas', 'Bowerman');
    character.health = -10;
    character.damage(30);
  }

  expect(result).toThrow(/Нельзя нанести урон умершему/);
});

test('method damage works', () => {
  const characterDamaged = {
    name: 'stas',
    type: 'Bowerman',
    health: 77.5,
    level: 1,
    attack: 25,
    defence: 25,
  };

  const result = new Bowerman('stas', 'Bowerman');
  result.damage(30);

  expect(result).toEqual(characterDamaged);
});
