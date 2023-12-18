#!name=一木清单

var linxi = $response.body;
 linxi = linxi.replace(/"memberType":".*?"/g, '"memberType":"PERMANENT"');
 linxi = linxi.replace(/ "memberExpiredTime":".*?"/g, '"memberExpiredTime":"1850170708000"');
 linxi = linxi.replace(/"totalStore"\s*:\s*\d+/g, '"totalStore":"10485746725"');
$done({ body:linxi});
