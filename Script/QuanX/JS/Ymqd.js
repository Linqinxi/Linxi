/*
项目名称：一木清单
下载地址：https://apps.apple.com/app/id1672171155
脚本作者：林夕
电报频道：https://t.me/Linxi01
使用说明：非一次性解锁，每次使用需要开启，先开启规则，再进入软件即可！

[rewrite_local]
^https?:\/\/yimutodo\.com\/api\/v\/mtop url script-response-body https://raw.githubusercontent.com/Linqinxi/Linxi/main/Script/QuanX/JS/Ymqd.js

[MITM]
hostname = yimutodo.com

*/

var linxi = $response.body;
 linxi = linxi.replace(/"memberType":".*?"/g, '"memberType":"PERMANENT"');
 linxi = linxi.replace(/ "memberExpiredTime":".*?"/g, '"memberExpiredTime":"1850170708000"');
 linxi = linxi.replace(/"totalStore"\s*:\s*\d+/g, '"totalStore":"10485746725"');
$done({ body:linxi});
