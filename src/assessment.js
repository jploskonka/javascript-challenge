import dimensions from './dimensions'
import { prepareResult } from './result';
import { prepareQuestions } from './questions';

class Assessment {
  constructor() {
    this.questions = prepareQuestions(dimensions);
    this.result = prepareResult(dimensions);
  }

  selectAnswer(answer) {
    this.result[answer.dim] += 1;
  }
}

export default Assessment;
