Object.defineProperty(Pokemon.prototype, 'type', {
  get: function() {
    return this._type;
  },
});