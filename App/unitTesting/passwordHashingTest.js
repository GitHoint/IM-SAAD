const bcrypt = require('bcrypt');

test('Password should be hashed and match original on compare', async () => {
  const password = 'secure123';
  const hashed = await bcrypt.hash(password, 10);
  const match = await bcrypt.compare(password, hashed);
  expect(match).toBe(true);
});
