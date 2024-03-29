function reverseNumber(num) {
    let n = Math.abs(num);
    let revnum = 0;
    const a = 10;
    while(n) {
        rem = n % a;
        revnum = revnum * a + rem;
        n = Math.floor(n/a);
    }
    return Math.sign(num)*revnum;
}

function forEach(arr, func) {
    arr.forEach(func);
}

function map(arr, func) {
    let result = [];
  forEach(arr, function(el) {
    result.push(func(el));
  });
  return result;
}

function filter(arr, func) {
    let result = [];
  forEach(arr, function(el) {
    if (func(el)) {
      result.push(el);
    }
  });
  return result;
}

function getAdultAppleLovers(data) {
    const a = 18;
    return map(
        filter(data, function(person) {
          return person.age >= a && person.favoriteFruit === 'apple';
        }),
        function(person) {
          return person.name;
        }
      );
}

function getKeys(obj) {
    return Object.keys(obj);
}

function getValues(obj) {
    return Object.values(obj);
}


