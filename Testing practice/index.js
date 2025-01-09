
const countLetters = (word, letter) => {
	word = word.toLowerCase()
	letter = letter.toLowerCase()
	let count = 0
	// for (const char of word.split(""))
	for (let i = 0; i < word.length; i++) {
		const char = word[i]
		if (char === letter) {
			count++
		}
	}
	return count
}

const calculateChange = (total, payment) => {
    return parseFloat((payment - total).toFixed(2))
}


const isSufficientPayment = (total, payment) => {

if (payment >= total) {
    return true
}
else {
    return false
}
}




module.exports = {

countLetters,
calculateChange,
isSufficientPayment
}