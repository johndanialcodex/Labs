
/*   Area Of Circle   */

const getAreaOfCircle = (radius) => {
    return Math.PI * radius ** 2;
}

let circleArea = getAreaOfCircle(25)
console.log(circleArea)

/*      Circumference Of Circle        */

const getCircumferenceOfCircle = (radius) => {
    return 2 * Math.PI * radius
}
let circumfernce = getCircumferenceOfCircle(25)
console.log(circumfernce)

/*           Area Of Square           */

const getAreaOfSquare = (sideLengh) => {
return sideLengh * sideLengh

}
let areaSquare = getAreaOfSquare(10)
console.log(areaSquare)

/*         Area Of Triangle           */

const getAreaOfTriangle = (base, height) => {
return base * height /2

}
let areaTriangle = getAreaOfTriangle (25, 50)
console.log(areaTriangle)