import DIM from './dimensions';
import { combination } from 'js-combinatorics';

const answersByDim = DIM.reduce((res, dim) => {
  res[dim.name] = dim.answers;
  return res;
}, {});

const QUESTION_LABEL = 'Pick the answer that describes you best: (this question title is the same for all questions)';

const dimensionNames = DIM.map(d => d.name);

function buildQuestion(combination, a1, a2) {
  return {
    text: QUESTION_LABEL,
    a1: {
      val: a1,
      dim: combination[0],
    },
    a2: {
      val: a2,
      dim: combination[1],
    }
  };
}

function combinations(dimensionNames) {
  return combination(dimensionNames, 2)
    .toArray()
    .reduce((r, c) => r.concat([c, c]), []);
}

function randomAnswer(dimensionName) {
  const answers = answersByDim[dimensionName];
  const index = Math.floor(Math.random() * answers.length);

  return answers.splice(index, 1);
}

export function prepareQuestions(dimensions) {
  let questions = [];

  combinations(dimensions.map(d => d.name)).forEach((combination) => {
    let a1 = randomAnswer(combination[0]);
    let a2 = randomAnswer(combination[1]);

    questions.push(buildQuestion(combination, a1[0], a2[0]))
  });

  return questions.sort(() => Math.random() - 0.5);;
}
