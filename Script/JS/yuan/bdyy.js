#!name=波点音乐

# > 波点音乐去广告
#波点音乐开屏广告，hostname = pgdt.gtimg.cn, us.l.qq.com
^https?:\/\/pgdt\.gtimg\.cn\/141\/20204\/snscosdownload\/SZ url reject

^https?:\/\/us\.l\.qq\.com\/exapp\?spsa=1&posid url reject

# > 波点音乐主页排行榜，hostname = bd-api.kuwo.cn
^https?:\/\/bd-api\.kuwo\.cn\/api\/service\/v2\/finds\/index\?uid= url reject-dict

# 波点音乐搜索
^https?:\/\/bd-api\.kuwo\.cn\/api\/search\/topic\/word\/list\?uid url reject-dict

# 波点音乐我的
^https?:\/\/bd-api\.kuwo\.cn\/api\/service\/banner\/myPage\?uid url reject-dict

# 波点音乐播放器页面"对你感兴趣"
^https?:\/\/bd-api\.kuwo\.cn\/api\/play\/listening\/entrance\/music\?musicId url reject-dict

# 播放器页面“邀请好友送VIP”
^https?:\/\/bd-api\.kuwo\.cn\/api\/play\/advert\/info\?musicId url reject-dict

hostname = bd-api.kuwo.cn