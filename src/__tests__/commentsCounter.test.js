import commentsCounter from "../commentsCounter";

jest.mock("../commentsCounter");

test('assert that the number of comments is 4', () => {
  const comments = ['comment1', 'comment2', 'comment3', 'comment4'];

  expect(commentsCounter((comments))).toBe(comments.length);
})