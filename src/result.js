export function prepareResult(dimensions) {
  let result = {};
  dimensions.forEach(d => { result[d.name] = 0 });
  return result;
}

