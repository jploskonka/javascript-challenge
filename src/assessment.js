import DIM from './dimensions.js';
import { combination } from 'js-combinatorics';

const dimensions = DIM.map(d => d.name);

const answersByDim = DIM.reduce((res, dim) => {
  res[dim.name] = dim.answers;
  return res;
}, {});

function buildQuestion(el, a1, a2) {
  return {
    text: "questions label?",
    a1: {
      val: a1[0],
      dim: el[0]
    },
    a2: {
      val: a2[0],
      dim: el[1]
    }
  };
}
const cmb = combination(dimensions, 2);
const cmbDup = cmb.toArray().reduce((r, c) => r.concat([c, c]), []);

function prepareQuestions() {
  let questions = [];

  cmbDup.forEach((el) => {
    const ans1 = answersByDim[el[0]];
    const ans2 = answersByDim[el[1]];
    const randI1 = Math.floor(Math.random()*ans1.length)
    const randI2 = Math.floor(Math.random()*ans2.length)
    let a1 = ans1.splice(randI1, 1)
    let a2 = ans2.splice(randI2, 1)

    questions.push(buildQuestion(el, a1, a2))
  });

  return questions.sort(() => Math.random() - 0.5);;
}

function prepareResult() {
  let result = {}
  dimensions.forEach((d) => { result[d] = 0 })
  return result;
}

class Assessment {
  constructor() {
    this.questions = prepareQuestions();
    this.result = prepareResult();
  }

  selectAnswer(answer) {
    this.result[answer.dim] += 1;
  }
}

export default Assessment;
