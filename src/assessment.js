import dimensions from './dimensions'
import { prepareResult } from './result';
import { prepareQuestions } from './questions';

const dimensionNames = dimensions.map(d => d.name);

class Assessment {
  constructor() {
    this.questions = prepareQuestions(dimensionNames);
    this.result = prepareResult(dimensionNames);
  }

  selectAnswer(answer) {
    this.result[answer.dim] += 1;
  }
}

export default Assessment;
