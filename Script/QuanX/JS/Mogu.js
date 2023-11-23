/*
项目名称：墨咕
下载地址：https://apps.apple.com/app/id1618194025
脚本作者：林夕
电报频道：https://t.me/Linxi01
使用说明：非一次性解锁，每次使用需要开启，先开启规则，再进入软件即可！

[rewrite_local]
^https?:\/\/goapi\.mogugu\.co\/api\/user\/v1\/findUserInfo url script-response-body https://raw.githubusercontent.com/Linqinxi/Linxi/main/Script/QuanX/JS/Mogu.js

[MITM]
hostname = goapi.mogugu.co

*/

var linxi = $response.body;
 linxi = linxi.replace(/"vip":".*?"/g, '"vip":"1"');
 linxi = linxi.replace(/"endTime"\s*:\s*\d+/g, '"endTime":"1850170708000"');
$done({ body:linxi});
