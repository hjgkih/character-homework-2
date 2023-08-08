import Magician from '../js/magican';

test('object created in a right way', () => {
  const magican = new Magician('stas', 'Magician');
  const correct = {
    name: 'stas',
    type: 'Magician',
    health: 100,
    level: 1,
    attack: 10,
    defence: 40,
  };

  expect(magican).toEqual(correct);
});
