// location 对象是很特别的一个对象，因为它既是 window 对象的属性，也是
// document 对象的属性；换句话说，window.location 和 document.location 引用的是同一个对象。
// location 对象的用处不只表现在它保存着当前文档的信息，还表现在它将 URL 解析为独立的片段，让
// 开发人员可以通过不同的属性访问这些片段

// 每次修改 location 的属性（hash 除外），页面都会以新 URL 重新加载
// 如果调用 reload() 时不传递任何参数，页面就会以最有效的方式重新加载
// location.reload(); //重新加载（有可能从缓存中加载）
// location.reload(true); //重新加载（从服务器重新加载）


function getQueryStringArgs() {
    //取得查询字符串并去掉开头的问号
    var qs = (location.search.length > 0 ? location.search.substring(1) : ""),

        //保存数据的对象
        args = {},

        //取得每一项
        items = qs.length ? qs.split("&") : [],
        item = null,
        name = null,
        value = null,
        //在 for 循环中使用
        i = 0,
        len = items.length;
    //逐个将每一项添加到 args 对象中
    for (i = 0; i < len; i++) {
        item = items[i].split("=");
        name = decodeURIComponent(item[0]);
        value = decodeURIComponent(item[1]);
        if (name.length) {
            args[name] = value;
        }
    }

    return args;
}

console.log(getQueryStringArgs());