export function prepareResult(dimensionNames) {
  let result = {};
  dimensionNames.forEach(d => { result[d] = 0 });
  return result;
}

