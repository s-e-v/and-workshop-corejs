test('property access', () => {
  //RULE: USE key access
  const obj = {
    name: 'Julian',
    lastname: 'Brown',
    age: '35'
  };

  expect(obj.name).toBe('Julian');
  expect(obj.lastname).toBe('Brown');
  expect(obj.age).toBe('35');
});

test('key access', () => {
  //RULE: USE property access
  const obj = {
    name: 'Julian',
    lastname: 'Brown',
    age: 35
  };

  expect(obj.name).toBe('Julian');
  expect(obj.lastname).toBe('Brown');
  expect(obj.age).toBe(35);
});

test('computed property names', () => {
  //RULE: USE computed property names
  const real = 'real';
  const fake = 'fake';

  const vip = {
    real_name: 'Kelly',
    real_lastname: 'White',
    fake_name: 'Pink',
    fake_lastname: 'Venn',
    age: '35'
  };

  expect(vip[real + '_name']).toBe('Kelly');
  expect(vip[real + '_lastname']).toBe('White');
  expect(vip[fake + '_name']).toBe('Pink');
  expect(vip[fake + '_lastname']).toBe('Venn');
  expect(vip['age']).toBe('35');
});

test('define object properties', () => {
  //RULE: USE Object.defineProperty
  const vip = {
    name: 'Kelly',
    lastname: 'White',
    age: '35'
  };

  Object.defineProperty(vip, 'age', {
    value: '37',
    writable: true,
    configurable: true,
    enumerable: true
  });

  expect(vip.name).toBe('Kelly');
  expect(vip.lastname).toBe('White');
  expect(vip.age).toBe('37');
});

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object

it('should return an array of keys from an object', () => {
  const vip = {
    name: 'Kelly',
    lastname: 'White',
    age: 35
  };

  expect(Object.keys(vip)).toEqual(['name', 'lastname', 'age']);
});

it('should return an array of values from an object', () => {
  const vip = {
    name: 'Kelly',
    lastname: 'White',
    age: 35
  };

  expect(Object.values(vip)).toEqual(['Kelly', 'White', 35]);
});
