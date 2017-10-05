var recipes = {};

<<<<<<< HEAD
function updateObjectWithKeyAndValue(recipes, ingredient, value) {
  //recipes[ingredient] = value;
  return Object.assign({}, recipes, {[ingredient]: value});
}

function destructivelyUpdateObjectWithKeyAndValue(recipes, ingredient, value) {
  recipes[ingredient] = value;
  return recipes;
}

function deleteFromObjectByKey(recipes, ingredient) {
    var newRecipes = Object.assign({}, recipes);
    //Object.assign({}, recipes, {[ingredient]: value});
    delete newRecipes[ingredient];
    return newRecipes;
}

function destructivelyDeleteFromObjectByKey(recipes, ingredient) {
  //return recipes;
  delete recipes[ingredient];
  return recipes;
}
=======
function updateObjectWithKeyAndValue(object, key, value) {
  object[key] = value;
  return object;
}

function UpdateObjectWithKeyAndValue(object, key, value) {
  var newObj = Object.assign({key: value}, object);

  return newObj;
}


// function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
//   var object = Object.assign({}, object):
//   return object;
// }
>>>>>>> 60bc3e7e245c991df48931b9413965c28323c572
