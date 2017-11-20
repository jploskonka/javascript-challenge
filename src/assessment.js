import DIM from './dimensions.js';
import { combination } from 'js-combinatorics';

class Assessment {
  constructor() {
    this.questions = [];

    const dimensions = DIM.map(d => d.name);
    const answersByDim = DIM.reduce((res, dim) => {
      res[dim.name] = dim.answers;
      return res;
    }, {});

    let a;
    const cmb = combination(dimensions, 2);
    const cmbDup = cmb.toArray().reduce((r, c) => r.concat([c, c]), []);

    let result = {};

    cmbDup.forEach((el) => {
      const ans1 = answersByDim[el[0]];
      const ans2 = answersByDim[el[1]];
      const randI1 = Math.floor(Math.random()*ans1.length)
      const randI2 = Math.floor(Math.random()*ans2.length)
      let a1 = ans1.splice(randI1, 1)
      let a2 = ans2.splice(randI2, 1)

      this.questions.push({
        text: "questions label?",
        a1: {
          val: a1[0],
          dim: el[0]
        },
        a2: {
          val: a2[0],
          dim: el[1]
        }
      })
    });

    // randomize questions
    this.questions = this.questions.sort(() => Math.random() - 0.5);
    this.result = {}
    dimensions.forEach((d) => { this.result[d] = 0 })
  }

  selectAnswer(a) {
    this.result[a.dim] += 1;
  }
}

export default Assessment;
