import { prepareResult } from './result';
import { prepareQuestions } from './questions';

class Assessment {
  constructor() {
    this.questions = prepareQuestions();
    this.result    = prepareResult();
  }

  selectAnswer(answer) {
    this.result[answer.dim] += 1;
  }
}

export default Assessment;
