export const irv = `
/**
  * @TODO
  *
  *  Каждый избиратель выбирает несколько кандидатов в порядке предпочтения.
  *   Голоса подсчитываются по первому выбору каждого избирателя.
  *   Если кандидат, занявший первое место, набрал более половины голосов, он побеждает.
  *   В противном случае найдите кандидата, набравшего наименьшее количество голосов, и удалите его из списка для голосования каждого человека.
  *   В случае ничьей, по крайней мере, удалите всех кандидатов с равным числом.
  *   В случае полного совпадения между каждым кандидатом верните undefined
  *   Начать сначала.
  *   Продолжайте, пока кто-то не наберет больше половины голосов; они победители.
 */


function irv(stages) {
  const candidates = stages[0];

  const votersByName = stages.reduce((acc, [v]) => {
    return acc.set(v, (acc.get(v) || 0) + 1);
  }, new Map(candidates.map((name) => [name, 0])));

  const votersByGroup = [...votersByName].reduce((acc, [name, value]) => {
    return acc.set(value, [...(acc.get(value) || []), name]);
  }, new Map());

  if (votersByGroup.size === 1 && candidates.length > 1) {
    return undefined;
  }

  const maxVotes = Math.max(...votersByGroup.keys());

  if (maxVotes * 2 > stages.length) {
    return votersByGroup.get(maxVotes)[0];
  }

  const minVotes = Math.min(...votersByGroup.keys());

  return irv(
    stages.map((names) =>
      names.filter((n) => !votersByGroup.get(minVotes).includes(n))
    )
  );
}

console.log(
  irv([
    ["d", "a", "c", "e", "b"],
    ["b", "e", "a", "d", "c"],
    ["c", "e", "b", "d", "a"],
    ["c", "a", "b", "e", "d"],
    ["e", "c", "b", "d", "a"],
  ])
); // => c

//<!!>

const time = window.performance.now();



const result = {
    'irv() =>': irv([
    ["d", "a", "c", "e", "b"],
    ["b", "e", "a", "d", "c"],
    ["c", "e", "b", "d", "a"],
    ["c", "a", "b", "e", "d"],
    ["e", "c", "b", "d", "a"],
  ]),
}
return { ...result, timeEnd: window.performance.now() - time }
`;
