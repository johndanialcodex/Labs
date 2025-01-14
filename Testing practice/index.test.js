const {
countLetters,
calculateChange,
isSufficientPayment

} = require ("./index")



describe("countLetters(word, letter)", () => {
	it("takes in 'hello' and 'h' and returns 1", () => {
		expect(countLetters("hello", "h")).toBe(1)
	})
	it("takes in 'hello' and 'l' and returns 2", () => {
		expect(countLetters("hello", "l")).toBe(2)
	})
	it("takes in 'suspicious' and 's' and returns 3", () => {
		expect(countLetters("suspicious", "s")).toBe(3)
	})
	it("takes in 'Apple' and 'P' and returns 2", () => {
		expect(countLetters("Apple", "P")).toBe(2)
	})
	it("takes in 'San Francisco' and 's' and returns 2", () => {
		expect(countLetters("San Francisco", "s")).toBe(2)
	})
})

describe("calculateChange(total, payment)", () => {
	it("takes in '5' and '6' and returns 1", () => {
		expect(calculateChange(5, 6)).toBe(1)
	})

    it("takes in '12.30' and '13.03' and returns 0.73", () => {
		expect(calculateChange(12.30, 13.03)).toBe(0.73)
	})

    it("takes in '45' and '55' and returns 10", () => {
		expect(calculateChange(45, 55)).toBe(10)
	})

})

describe("isSufficientPayment(total, payment)", () => {
	it("takes in '5' and '6' and returns true", () => {
		expect(isSufficientPayment(5, 6)).toBe(true)
	})

    it("takes in '10' and '7' and returns true", () => {
		expect(isSufficientPayment(10, 7)).toBe(false)
	})

    it("takes in '3' and '3' and returns true", () => {
		expect(isSufficientPayment(3, 3)).toBe(true)
	})

    it("takes in '60' and '50' and returns true", () => {
		expect(isSufficientPayment(60, 50)).toBe(false)
	})



})