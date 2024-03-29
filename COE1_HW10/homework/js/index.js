'use strict';

/**
 * Represents a Pizza object.
 * @constructor
 * @param {string} size - The size of the pizza.
 * @param {string} type - The type of the pizza.
 * @throws {PizzaException} - Thrown when improper use is detected.
 */
function Pizza(size, type) {
  if (arguments.length !== 2) {
    throw new PizzaException('Required 2 arguments, given: ' + arguments.length);
  }

  if (!Object.keys(Pizza.allowedSizes).includes(size)) {
    throw new PizzaException('Invalid size.');
  }

  if (!Object.keys(Pizza.allowedTypes).includes(type)) {
    throw new PizzaException('Invalid type.');
  }

  this.size = size;
  this.type = type;
  this.extraIngredients = [];
}

// Constants
Pizza.SIZE_S = 'S';
Pizza.SIZE_M = 'M';
Pizza.SIZE_L = 'L';

Pizza.TYPE_VEGGIE = 'VEGGIE';
Pizza.TYPE_MARGHERITA = 'MARGHERITA';
Pizza.TYPE_PEPPERONI = 'PEPPERONI';

Pizza.EXTRA_TOMATOES = 'TOMATOES';
Pizza.EXTRA_CHEESE = 'CHEESE';
Pizza.EXTRA_MEAT = 'MEAT';

// Allowed properties
Pizza.allowedSizes = {
  'S': 25,
  'M': 35,
  'L': 50
};

Pizza.allowedTypes = {
  'VEGGIE': 25,
  'MARGHERITA': 30,
  'PEPPERONI': 35
};

Pizza.allowedExtraIngredients = {
  'TOMATOES': 3,
  'CHEESE': 4,
  'MEAT': 5
};

/**
 * Represents an error while working with a Pizza.
 * @constructor
 * @param {string} log - Information about the error.
 */
function PizzaException(log) {
  this.log = log;
}

/**
 * Adds an extra ingredient to the pizza.
 * @param {string} ingredient - The extra ingredient to add.
 * @throws {PizzaException} - Thrown when improper use is detected.
 */
Pizza.prototype.addExtraIngredient = function(ingredient) {
  if (!Object.keys(Pizza.allowedExtraIngredients).includes(ingredient)) {
    throw new PizzaException('Invalid ingredient.');
  }

  if (this.extraIngredients.includes(ingredient)) {
    throw new PizzaException('Duplicate ingredient.');
  }

  this.extraIngredients.push(ingredient);
};

/**
 * Removes an extra ingredient from the pizza.
 * @param {string} ingredient - The extra ingredient to remove.
 * @throws {PizzaException} - Thrown when improper use is detected.
 */
Pizza.prototype.removeExtraIngredient = function(ingredient) {
  const index = this.extraIngredients.indexOf(ingredient);
  if (index === -1) {
    throw new PizzaException('Ingredient not found.');
  }

  this.extraIngredients.splice(index, 1);
};

/**
 * Gets the size of the pizza.
 * @returns {string} - The size of the pizza.
 */
Pizza.prototype.getSize = function() {
  return this.size;
};

/**
 * Gets the total price of the pizza.
 * @returns {number} - The total price of the pizza.
 */
Pizza.prototype.getPrice = function() {
  let price = Pizza.allowedSizes[this.size] + Pizza.allowedTypes[this.type];
  this.extraIngredients.forEach(ingredient => {
    price += Pizza.allowedExtraIngredients[ingredient];
  });
  return price;
};

/**
 * Gets information about the pizza.
 * @returns {string} - Information about the pizza.
 */
Pizza.prototype.getPizzaInfo = function() {
  const extraIngredientsStr = this.extraIngredients.join(',');
  return `Size: ${this.size}, type: ${this.type}; extra ingredients: ${extraIngredientsStr}; price: ${this.getPrice()} UAH.`;
};

// Examples of errors
try {
  let pizza1 = new Pizza(Pizza.SIZE_S); // Required two arguments, given: 1
} catch (error) {
  console.error(error.log);
}

try {
  let pizza2 = new Pizza(Pizza.SIZE_S, Pizza.SIZE_S); // Invalid type
} catch (error) {
  console.error(error.log);
}

try {
  let pizza3 = new Pizza(Pizza.SIZE_S, Pizza.TYPE_VEGGIE);
  pizza3.addExtraIngredient(Pizza.EXTRA_MEAT);
  pizza3.addExtraIngredient(Pizza.EXTRA_MEAT); // Duplicate ingredient
} catch (error) {
  console.error(error.log);
}

try {
  let pizza4 = new Pizza(Pizza.SIZE_S, Pizza.TYPE_VEGGIE);
  pizza4.addExtraIngredient(Pizza.EXTRA_CORN); // Invalid ingredient
} catch (error) {
  console.error(error.log);
}
