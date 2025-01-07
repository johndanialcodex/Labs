const translate = require('./translate');

describe('Pig Latin Translator', () => {
    
  test('translates a word starting with a single consonant', () => {
    expect(translate('hello')).toBe('ellohay');
  });

  test('translates a word starting with multiple consonants', () => {
    expect(translate('world')).toBe('orldway');
  });

  test('translates a word starting with a vowel', () => {
    expect(translate('apple')).toBe('appleway');
  });

  test('handles mixed case words', () => {
    expect(translate('Hello')).toBe('ellohay');
  });

  test('translates a sentence', () => {
    expect(translate('Hello World')).toBe('ellohay orldway');
  });
});
