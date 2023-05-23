const loopyLighthouse = function(range, multiples, words) {
  const start = range[0];
  const end = range[1];
  const x = multiples[0];
  const y = multiples[1];
  const word1 = words[0];
  const word2 = words[1];
  const results = [];

  for (let i = 0 + start; i <= end; i++) {
    if (i % x === 0 && i % y === 0) {
      results.push((word1) + (word2));
    } else if (i % x === 0 && i % y !== 0){
      results.push(word1);
    } else if (i % x !== 0 && i % y === 0) {
      results.push(word2);
    } else {
      results.push(i);
    }
    console.log(results);
  }

  return results;
};
loopyLighthouse([15, 90], [2, 5], ["Batty", "Beacon"]);