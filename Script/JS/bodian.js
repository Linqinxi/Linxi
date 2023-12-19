#!name=波点音乐

var body = $response.body;
var obj = JSON.parse(body);
const ad = /api\/service\/(home\/index|banner\/myPage)/;
const adv = /api\/play\/(advert\/info|listening\/entrance\/music)/;
const to = /api\/search\/topic\/word\/list/;

if (ad.test($request.url)) {
   obj.data.bannerList = [];
  obj.data.moduleList = obj.data.moduleList.filter(item => item.name !== "轮播图" && item.name !== "波点实验室");
}

if (adv.test($request.url)) {
   obj.data.entranceMusic = {};
   obj.data.advert = {};
}
if (to.test($request.url)) {
   obj.data = {};
}

$done({ body: JSON.stringify(obj) });
