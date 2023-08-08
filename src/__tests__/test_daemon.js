import Daemon from '../js/daemon';

test('object created in a right way', () => {
  const daemon = new Daemon('stas', 'Daemon');
  const correct = {
    name: 'stas',
    type: 'Daemon',
    health: 100,
    level: 1,
    attack: 40,
    defence: 10,
  };

  expect(daemon).toEqual(correct);
});
