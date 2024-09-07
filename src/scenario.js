/**
 * Function to introduce a scenario.
 *
 * @param {Object} scenario - The scenario object.
 * @returns {void}
 */
async function introduceScenario(rl, scenarios, scenarioId) {
  const scenario = scenarios[scenarioId];
  console.log(scenario.title);
  console.log(scenario.description);
  let next;

  while (true) {
    const rawAnswer = await rl.question("> ");
    const answer = rawAnswer.trim().toLowerCase();

    if (["exit", "quit", "stop"].includes(answer)) {
      console.log("The end!");
      return;
    }

    const answerOption = scenario.options.find(
      (option) => option.text.toLowerCase() == answer
    );
    if (answerOption) {
      next = answerOption.next;
      break;
    }

    console.log("It is not yet possible to do this.");
  }

  if (next) {
    await introduceScenario(rl, scenarios, next);
  }
}

export { introduceScenario };
