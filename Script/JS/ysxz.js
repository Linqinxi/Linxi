#!name=云上写作

var linxi = $response.body;
 linxi = linxi.replace(/"vip"\s*:\s*\d+/g, '"vip":"1"');
 linxi = linxi.replace(/ "vip_forever"\s*:\s*\d+/g, '"vip_forever":"1"');
 linxi = linxi.replace(/"vip_last"\s*:\s*\d+/g, '"vip_last":"2028-08-18 08:18:28"');
$done({ body:linxi});
