function textWithLengthBetween(min, max, error, text) {
  const length = (text || '').trim().length;

  if (length < min || length > max) {
    throw error;
  }
}

const product = { name: 'name', price: 14.99, off: 0.25 };

textWithLengthBetween(5, 255, 'Invalid name!', product.name);
