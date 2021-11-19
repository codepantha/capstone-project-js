/**
 * @jest-environment jsdom
 */

import itemCounter from '../itemCounter';

jest.mock('../itemCounter');

test('should return 5 as the total items', () => {
  const items = ['item1', 'item2', 'item3', 'item4', 'item5'];
  expect(itemCounter(items)).toBe(items.length);
});