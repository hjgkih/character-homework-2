import Undead from '../js/undead';

test('object created in a right way', () => {
  const undead = new Undead('stas', 'Undead');
  const correct = {
    name: 'stas',
    type: 'Undead',
    health: 100,
    level: 1,
    attack: 25,
    defence: 25,
  };

  expect(undead).toEqual(correct);
});
