function translate(text) {

    const pigLatinWord = (word) => {
    const vowels = ['a', 'e', 'i', 'o', 'u'];
      word = word.toLowerCase();

      if (vowels.includes(word[0])) {
        return word + 'way';
      } else {
        const consonantWords = word.match(/^[^aeiou]+/)[0];
        return word.slice(consonantWords.length) + consonantWords + 'ay';
      }
    };
  
    return text
      .split(' ')
      .map(pigLatinWord)
      .join(' ');
  }
  
  module.exports = translate;

  console.log(translate("Johndanial"));
  console.log(translate("BMW-CAR"));
  console.log(translate("iPhone"));
  console.log(translate("Batman"));
  console.log(translate("JavaCoding"));

  