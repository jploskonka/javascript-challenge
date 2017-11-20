import { randomAnswer, answersByDimension, combineDimensions } from './dimensions'

const QUESTION_LABEL = 'Pick the answer that describes you best: (this question title is the same for all questions)';

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

export function prepareQuestions() {
  let questions = [];

  combineDimensions().forEach((combination) => {
    let a1 = randomAnswer(combination[0]);
    let a2 = randomAnswer(combination[1]);

    questions.push(buildQuestion(combination, a1[0], a2[0]))
  });

  return questions.sort(() => Math.random() - 0.5);;
}
