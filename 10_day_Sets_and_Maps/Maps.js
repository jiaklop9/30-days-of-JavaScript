// JavaScript中的Map是一种内置对象，用于存储键值对。

// 在JavaScript中，Map对象与普通对象类似，但提供了更多的功能和更强的控制能力。以下是Map对象的主要特点：

// 键的类型：Map对象允许任何类型的值作为键，包括对象和基本类型。而普通对象的键只能是字符串或符号。
// 插入顺序：Map对象保留了键值对的插入顺序，因此迭代时会按照插入的顺序返回元素。
// 大小信息：可以使用size属性直接获取Map对象中键值对的数量。
// 迭代：Map对象支持forEach方法进行迭代，也支持使用for...of循环进行迭代。
// 性能：在某些情况下，如频繁添加和删除操作，Map可能比对象有更好的性能表现。
// 不可重复性：Map对象保证了每个键的唯一性，如果多次添加相同的键，后面的值不会覆盖前面的值。
// 无原型链：Map对象不是基于原型链的，因此不具有__proto__属性。
// 同步API：Map对象提供了一系列同步API，如set、get、has、delete等，用于操作键值对。
// 总的来说，Map对象是JavaScript中一个非常有用的集合类型，它提供了比普通对象更丰富的功能，特别适合于需要存储键值对且关心插入顺序的场景。


countries = [
    ['Finland', 'Helsinki'],
    ['Sweden', 'Stockholm'],
    ['Norway', 'Oslo'],
    ['Norway', 'dumplication'],
  ]
  const map = new Map(countries)
  console.log(map)
  console.log(map.size)

  console.log("获取Map中的键值");
  console.log(map.get('Norway'));

  
  console.log("检查Map中的是否存在键值");
  console.log(map.has('Sweden'));