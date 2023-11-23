/*

项目功能：口袋写作 解锁会员功能
下载地址：https://apps.apple.com/cn/app/id6443521349
脚本作者：林夕
电报频道：https://t.me/Linxi01
使用说明：非一次性解锁，先开启规则，在进入软件即可！如果无效按[恢复购买]进行恢复！
特别说明：感谢MCdasheng的帮助

**************************************

[rewrite_local]
^https?:\/\/app\.kdwrite\.cn\/kdwrite\/app\/user\/get url script-response-body https://raw.githubusercontent.com/Linqinxi/Linxi/main/Script/QuanX/JS/Kdxz.js

[mitm]
hostname = app.kdwrite.cn

*/
 var linxi = JSON.parse($response.body);
linxi.data.vipTime=1850170708000;
$done({ body: JSON.stringify(linxi) });

