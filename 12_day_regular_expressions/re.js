
// without flag
// let pattern = 'love'
// let regEx = new regExp(pattern)
//
// // with flag
// let flag = 'gi'
// regEx = new RegExp(pattern, flag)


// const str = 'I love JavaScript'
// const pattern = /love/
// const result = pattern.test(str)
// console.log(result)

// 匹配字段
// const str = 'I love JavaScript'
// const pattern = /love/
// const result = str.match(pattern)
// console.log(result)

// 全部数据
// const str = 'I love JavaScript'
// const pattern = /love/g
// const result = str.match(pattern)
// console.log(result)


// 下表
// const str = 'I love JavaScript'
// const pattern = /love/g
// const result = str.search(pattern)
// console.log(result)


// 全局替换

// const txt = 'Python is the most beautiful language that a human begin has ever created.\
// I recommend python for a first programming language'
//
// matchReplaced = txt.replace(/Python|python/g, 'JavaScript')
// console.log(matchReplaced)

// 字体边界
// const txt = 'This regular expression example was made in December 6,  2019.'
// const pattern = /\b\w{4}\b/g  //  exactly four character words
// const matches = txt.match(pattern)
// console.log(matches)  //['This', 'made', '2019']


const txt = 'This regular expression example was made in December 6,  2019.'
const pattern = /\b[a-zA-Z]{4}\b/g  //  exactly four character  words without numbers
const matches = txt.match(pattern)
console.log(matches)  //['This', 'made']