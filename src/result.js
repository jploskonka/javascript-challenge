import dimensions from './data/dimensions'

export function prepareResult() {
  let result = {};
  dimensions.forEach(d => { result[d.name] = 0 });
  return result;
}

