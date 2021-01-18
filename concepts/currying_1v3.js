function textWithLengthBetween(min) {
  return function(max) {
    return function(error) {
      return function(text) {
        // Lazy Evaluation
        const length = (text || '').trim().length;

        if (length < min || length > max) {
          throw error;
        }
      }
    }
  }
}

function applyValidation(fn, value) {
  return function(value) {
    // Lazy Evaluation
    try {
      fn(value);
    } catch (e) {
      return { error: e };
    }
  }
}

const product = { name: 'name', price: 14.99, off: 0.25 };

const forceDefaultTextLength = textWithLengthBetween(5)(255);
const forceValidProductName = forceDefaultTextLength('Invalid product name!');
const validateProductName = applyValidation(forceValidProductName)

console.log(validateProductName(product.name));
