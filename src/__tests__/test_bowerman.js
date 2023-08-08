import Bowerman from '../js/bowerman';

test('object created in a right way', () => {
  const bowerman = new Bowerman('stas', 'Bowerman');
  const correct = {
    name: 'stas',
    type: 'Bowerman',
    health: 100,
    level: 1,
    attack: 25,
    defence: 25,
  };

  expect(bowerman).toEqual(correct);
});
