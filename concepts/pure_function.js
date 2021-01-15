// A pure function is a function in which the return value
// is determined ONLY by its input values,
// with no observable side effects

//This principle must be followed in order not
// to depend as much as possible on external factors

const PI = 3.14

// Impure Function
// This function has a low level of impurity because PI
// is a very stable value

function circleArea(radius) {
  return radius * radius * PI;
}

// Pure function
function pureCircleArea(radius, pi) {
  return radius * radius * pi;
}

console.log(circleArea(10));
console.log(pureCircleArea(10, 3.14));
