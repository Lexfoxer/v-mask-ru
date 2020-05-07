/**
 * A special object to identify next character as optional
 * For example `?`
 *
 * @type {Object}
 */
export const NEXT_CHAR_OPTIONAL = {
  __nextCharOptional__: true,
};

/**
 * @type {Object<String,RegExp|NEXT_CHAR_OPTIONAL>}
 */
export const defaultMaskReplacers = {
  '#': /\d/,
  A: /[a-z]/i,
  B: /[а-яА-Я]/i,
  C: /[АВЕКМНОРСТУХ]/i,
  N: /[a-zA-Zа-яА-Я0-9]/i,
  '?': NEXT_CHAR_OPTIONAL,
  X: /./,
};
