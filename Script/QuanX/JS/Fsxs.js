/*

项目功能：番薯小说
下载地址1：https://apps.apple.com/cn/app/id1489960199
下载地址2：https://apps.apple.com/cn/app/id1407163092
脚本作者：林夕
电报频道：https://t.me/Linxi01
使用说明：非一次性解锁，每次使用需要开启，先开启规则，再进入软件即可！

**************************************

[rewrite_local]
^https?:\/\/(ggs|g20)\.manmeng168\.com url script-response-body https://raw.githubusercontent.com/Linqinxi/Linxi/main/Script/QuanX/JS/Fsxs.js

[mitm]
hostname = ggs.manmeng168.com, g20.manmeng168.com

*/
 
var linxi = JSON.parse($response.body);
linxi.data.vip=true;
linxi.data.vip_start_time=1695014518000;
linxi.data.vip_end_time=1850170708000;
$done({ body: JSON.stringify(linxi) });
