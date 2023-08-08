import Swordsman from '../js/swordsman';

test('object created in a right way', () => {
  const swordsman = new Swordsman('stas', 'Swordsman');
  const correct = {
    name: 'stas',
    type: 'Swordsman',
    health: 100,
    level: 1,
    attack: 40,
    defence: 10,
  };

  expect(swordsman).toEqual(correct);
});
