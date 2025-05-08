const fs = require('fs');
const path = './stock_log.txt';

test('Log file should contain username when stock is added', () => {
  const logData = fs.readFileSync(path, 'utf8');
  expect(logData).toMatch(/Added stock by:/);
});
