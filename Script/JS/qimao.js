/*

# 开屏广告
^https:\/\/api-cfg\.wtzw\.com\/v1\/splash\/ url reject-dict
# 签到
^https:\/\/xiaoshuo\.wtzw\.com\/api\/v1\/user\/red-point url reject-dict
^https:\/\/api-gw\.wtzw\.com\/legacy\/api\/v1\/user\/red-point\?act_time url reject-dict

//重定向福利活动页面，链接可以改成想改的网页
//^https:\/\/xiaoshuo\.wtzw\.com\/app-h5\/freebook\/welfare-center.*$ url 302 https://m.qidian.com
#我的页面净化和阅读界面活动按钮
^https:\/\/(api-ks|xiaoshuo)\.wtzw\.com\/api\/(v1\/extra\/init|v3\/user\/my-center) url script-response-body https://raw.githubusercontent.com/Linqinxi/Linxi/main/Script/JS/qimao.js

hostname = api-cfg.wtzw.com, xiaoshuo.wtzw.com, api-ks.wtzw.com, api-gw.wtzw.com

*/
var body = $response.body;
var url = $request.url;

if (url.includes("/api/v1/extra/init")) {
var obj = JSON.parse(body);
    obj.data.reader_floats = [];
    obj.data.reader_top_banner = [];
    $done({ body: JSON.stringify(obj) });
} else if (url.includes("/api/v3/user/my-center")) {
try {
var obj = JSON.parse(body);
if (obj.data.func_area && obj.data.func_area.length > 0) {
var topicIndex = obj.data.func_area.findIndex(item => item.type === "topic");
if (topicIndex !== -1) {
    obj.data.func_area.splice(topicIndex, 1);
 }
if (obj.data.func_area.length === 4) {
    obj.data.func_area[1].list = [];
    obj.data.func_area[2].list = [];
    obj.data.func_area[3].list = obj.data.func_area[3].list.filter((_, index) => ![2, 3, 5, 6].includes(index));
} else if (obj.data.func_area.length === 5) {
    obj.data.func_area[1].list = [];
    obj.data.func_area[2].list = [];
    obj.data.func_area[3].list = [{}];
    obj.data.func_area[4].list = obj.data.func_area[4].list.filter((_, index) => ![2, 3, 5, 6].includes(index));
 }
    obj.data.func_area = obj.data.func_area.filter(item => item.type !== "banner" && item.type !== "download" && item.type !== "ads");
} else {
console.log("func_area is missing or empty.");
}
$done({ body: JSON.stringify(obj) });
} catch (error) {
console.error("Error parsing JSON:", error.message);
$done({});
 }
} else {
$done({});
}
