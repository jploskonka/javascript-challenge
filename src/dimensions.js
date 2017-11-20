import dimensions from './data/dimensions';
import { combination } from 'js-combinatorics';

const dimensionNames = dimensions.map(d => d.name);

export function combineDimensions() {
  return combination(dimensionNames, 2)
    .toArray()
    // duplicate combinations to show every dimensions pair twice
    .reduce((r, c) => r.concat([c, c]), []);
}

export function answersByDimension(dimensionName) {
  return dimensions.filter(d => d.name == dimensionName)[0].answers;
}

export function randomAnswer(dimensionName) {
  const answers = answersByDimension(dimensionName);
  const index = Math.floor(Math.random() * answers.length);

  return answers.splice(index, 1);
}

