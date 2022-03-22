export const generate = () => {
  const lower = [
    'a',
    'b',
    'c',
    'd',
    'e',
    'f',
    'g',
    'h',
    'i',
    'j',
    'k',
    'l',
    'm',
    'n',
    'o',
    'p',
    'q',
    'r',
    's',
    't',
    'u',
    'v',
    'w',
    'x',
    'y',
    'z',
  ];
  const upper = [
    'A',
    'B',
    'C',
    'D',
    'E',
    'F',
    'G',
    'H',
    'I',
    'J',
    'K',
    'L',
    'M',
    'N',
    'O',
    'P',
    'Q',
    'R',
    'S',
    'T',
    'U',
    'V',
    'W',
    'X',
    'Y',
    'Z',
  ];
  const nums = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];
  const symbols = [
    '!',
    '@',
    '#',
    '$',
    '%',
    '^',
    '&',
    '*',
    '(',
    ')',
    '-',
    '_',
    '=',
    '+',
    '`',
    '~',
    '<',
    '>',
    ',',
    '.',
    '/',
    '?',
    '[',
    '{',
    ']',
    '}',
    '|',
  ];

  const length = 16;

  const all = [...lower, ...upper, ...nums, ...symbols];

  const res: string[] = [];

  for (let i = 0; i < length; i++) {
    res.push(all[Math.floor(Math.random() * all.length)]);
  }

  return res.join('');
};
