#!name=波点音乐

var obj = JSON.parse($response.body);

obj.data.moduleList = obj.data.moduleList.filter(item => item.name !== "轮播图" && item.name !== "波点实验室");

$done({body : JSON.stringify(obj)});
