var recipes = {};

function updateObjectWithKeyAndValue(object, key_v, value){
  return Object.assign({}, object, {[key_v]: value});
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
   object[key] = value;
   return object;
}

function deleteFromObjectByKey(object, key) {
  var other = Object.assign({}, object);
  delete other[key];
  return other;
}

function destructivelyDeleteFromObjectByKey(object, key){
  delete object.key;
  return object;
}
