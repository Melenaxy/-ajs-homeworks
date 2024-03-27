import checkHealth from '../script';

test('testing checkHealth function', () => {
  const result = checkHealth({name: 'Маг', health: 90});

  expect(result).toBe('healthy');
});

test.each([
  [{name: 'Маг', health: 53}, 'healthy'],
  [{name: 'Маг', health: 40}, 'wounded'],
  [{name: 'Маг', health: 14}, 'critical']
])('testing checkHealth function for %s player', (player, expectedStatus) => {
  let result = checkHealth(player);
  expect(result).toBe(expectedStatus);
})