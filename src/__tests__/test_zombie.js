import Zombie from '../js/zombie';

test('object created in a right way', () => {
  const zombie = new Zombie('stas', 'Zombie');
  const correct = {
    name: 'stas',
    type: 'Zombie',
    health: 100,
    level: 1,
    attack: 40,
    defence: 10,
  };

  expect(zombie).toEqual(correct);
});
