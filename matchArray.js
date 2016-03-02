/*var tony = {
name: 'tony',
age: 4
};
var keysArr = ['name','age'];*/

function matchArray(obj, array) {
   var objKeys = Object.keys(obj);
   if (objKeys.length != array.length) {
      return false;
    }
   for (var i = 0; i < objKeys.length; i++) {
      if (objKeys[i] != array[i]) {
        return false;
      }
      else {
        return true;
      }
   }
}

//matchArray(tony, keysArr);