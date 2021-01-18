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

const product = { name: 'name', price: 14.99, off: 0.25 };

const forceDefaultTextLength = textWithLengthBetween(5)(255);
const forceInvalidProductName = forceDefaultTextLength('Invalid product name!');

forceInvalidProductName(product.name);
