import commentCounter from '../commentsCounter';

jest.mock('../itemCounter');

test('assert that the number of comments is 4', () => {
  const comments = ['comment1', 'comment2', 'comment3', 'comment4'];
  expect(commentCounter((comments))).toBe(comments.length);
});