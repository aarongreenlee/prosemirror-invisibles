import textBetween from '../utils/text-between';
import createDeco from '../utils/create-deco';

export default (from, to, doc, decos) =>
  textBetween(from, to, doc).reduce(
    (decos1, { pos, text }) =>
      text
        .split('')
        .reduce(
          (decos2, char, i) =>
            char === ' '
              ? decos2.add(doc, [createDeco(pos + i, 'space')])
              : decos2,
          decos1
        ),
    decos
  );