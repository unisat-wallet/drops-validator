function seededRandom(seed: number) {
  const m = 233280;
  const a = 9301;
  const c = 49297;
  const random = function () {
    seed = (a * seed + c) % m;
    return seed / m;
  };
  return random;
}

export function getWinnerAddresses(
  addresses: string[],
  hash: string,
  winnerCount: number
) {
  if (winnerCount >= addresses.length) {
    return [...addresses];
  }

  const seed = parseInt("0x" + hash.substring(hash.length - 6));

  const random = seededRandom(seed);

  const clone = [...addresses];

  for (let i = 0; i < clone.length; i++) {
    const j = Math.floor(random() * (i + 1));
    [clone[i], clone[j]] = [clone[j], clone[i]];
  }

  return clone.slice(0, winnerCount);
}
