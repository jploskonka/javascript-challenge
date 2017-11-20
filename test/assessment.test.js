import dimensions from '../src/data/dimensions';
import Assessment from '../src/assessment';
import { questionWithCombination, selectRandomAnswer, allAnswers } from './helpers';

// Feel free to rewrite this test suite. This is provided as guidance.
describe('The Assessment', () => {
  const assessment = new Assessment();
  const { questions, result } = assessment;

  it('should have 30 questions', () => {
    expect(questions.length).toBe(30);
  });

  it('should not show the same answer twice', () => {
    const answers = allAnswers(questions);
    const uniqAns = new Set(answers);

    expect(answers.length).toEqual(uniqAns.size)
  });

  it('should match each dimension to the other dimensions exactly 2 times', () => {
    let combinations = [];

    questions.forEach(q => {
      combinations.push([q.a1.dim, q.a2.dim]);
    });

    combinations.forEach(c => {
      expect(
        questions
          .filter(q => questionWithCombination(q, c))
          .length
      ).toEqual(2);
    })
  });

  it('should provide ipsative questions (two possible answers)', () => {
    questions.forEach(q => {
      expect(q.a1).toBeDefined();
      expect(q.a2).toBeDefined();
    });
  });

  describe('when completed', () => {
    questions.forEach(q => selectRandomAnswer(assessment, q));

    const expObj = {};
    dimensions.forEach(d => (expObj[d.name] = expect.any(Number)));

    it('should represent the results based on 6 dimensions', () => {
      expect(result).toMatchObject(expObj)
    });
  });
});
