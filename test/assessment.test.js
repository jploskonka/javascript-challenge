import Assessment from '../src/assessment'
import DIM from '../src/dimensions'

// Feel free to rewrite this test suite. This is provided as guidance.
describe('The Assessment', () => {
  const a = new Assessment();

  it('should have 30 questions', () => {
    expect(a.questions.length).toBe(30);
  });

  it('should not show the same answer twice', () => {
    const flatAns = a.questions.map(q => [q.a1.val, q.a2.val]).reduce((r, c) => r.concat(c));
    const uniqAns = new Set(flatAns)

    expect(flatAns.length).toEqual(uniqAns.size)
  });

  it('should match each dimension to the other dimensions exactly 2 times', () => {
    let combinations = [];

    a.questions.forEach(q => {
      combinations.push([q.a1.dim, q.a2.dim]);
    });

    combinations.forEach(c => {
      const l = a.questions.filter(q => {
        return q.a1.dim == c[0] && q.a2.dim == c[1] ||
          q.a2.dim == c[0] && q.a1.dim == c[1]
      })
      expect(l.length).toEqual(2)
    })
  });

  it('should provide ipsative questions (two possible answers)', () => {
    a.questions.forEach(q => {
      expect(q.a1).toBeDefined();
      expect(q.a2).toBeDefined();
    });
  });

  describe('when completed', () => {
    a.questions.forEach(q => {
      const ansi = Math.floor(Math.random() * 2) + 1
      const ans = q[`a${ansi}`]
      a.selectAnswer(ans);
    });

    it('should represent the results based on 6 dimensions', () => {
      const expObj = {};
      DIM.forEach(d => (expObj[d.name] = expect.any(Number)));
      expect(a.result).toMatchObject(expObj)
    });
  });
});
