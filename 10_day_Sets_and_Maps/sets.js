
// 集合是一个元素的合集，集合只包含不重复的元素


// 创建集合
let companies = new Set();
console.log(companies);

// 依据列表创建集合，可用于去重
const languages = [
    'English',
    'Finnish',
    'English',
    'French',
    'Spanish',
    'English',
    'French',
  ]
  
  const setOfLanguages = new Set(languages)
  console.log(setOfLanguages)

//   js中的集合是可变元素，可以添加
const company = new Set()
console.log(company.size) // 0
company.add('Google')
company.add('Facebook')
company.add('Amazon')
company.add('Oracle')
company.add('Microsoft')
console.log(company.size)
console.log(company)

console.log('xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx');
// 另外一种添加方式
companies = ['Google', 'Facebook', 'Amazon', 'Oracle', 'Microsoft']
setOfCompanies = new Set()
for (const company of companies) {
  setOfCompanies.add(company)
}
console.log(setOfCompanies)


console.log("删除集合中元素");
setOfCompanies.delete("Google")
console.log(setOfCompanies)


console.log("检查集合是否包含元素");
console.log(setOfCompanies.has("Google"));
console.log(setOfCompanies.has("Oracle"));

console.log("集合的并集")
const a = new Set([1,2,3])
const b = new Set([4,5,6])
const c = new Set([...a, ...b])
console.log(c);
