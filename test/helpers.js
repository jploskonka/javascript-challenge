export function questionWithCombination(question, combination) {
  return question.a1.dim == combination[0] && question.a2.dim == combination[1] ||
    question.a2.dim == combination[0] && question.a1.dim == combination[1]
}

export function selectRandomAnswer(assessment, question) {
  const index = Math.floor(Math.random() * 2) + 1
  const answer = question[`a${index}`]

  assessment.selectAnswer(answer);
}

export function allAnswers(questions) {
  return questions
    .map(q => [q.a1.val, q.a2.val])
    .reduce((r, c) => r.concat(c));
}
