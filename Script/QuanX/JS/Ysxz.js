/*************************************

项目功能：云上写作 解锁会员功能
下载地址：https://apps.apple.com/cn/app/id1297143857
脚本作者：林夕
电报频道：https://t.me/Linxi01
使用说明：非一次性解锁，先开启规则，在进入软件即可！如果无效按[恢复购买]进行恢复！

**************************************

[rewrite_local]
^http?:\/\/www\.yunshangxiezuo\.com\/api\/getAuthenticate url script-response-body https://raw.githubusercontent.com/Linqinxi/Linxi/main/Script/QuanX/JS/Ysxz.js

[mitm]
hostname = www.yunshangxiezuo.com

*************************************/

var linxi = $response.body;
 linxi = linxi.replace(/"vip"\s*:\s*\d+/g, '"vip":"1"');
 linxi = linxi.replace(/ "vip_forever"\s*:\s*\d+/g, '"vip_forever":"1"');
 linxi = linxi.replace(/"vip_last"\s*:\s*\d+/g, '"vip_last":"2028-08-18 08:18:28"');
$done({ body:linxi});
