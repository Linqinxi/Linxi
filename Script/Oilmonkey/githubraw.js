// ==UserScript==

// @name         GitHub原始链接

// @icon         https://raw.githubusercontent.com/Linqinxi/Linxi/main/Icon/github.png

// @namespace    https://github.com/Linqinxi/Linxi

// @version      1.4

// @description  添加一个按钮来打开GitHub上的原始链接。

// @author       林夕

// @match        https://github.com/*


// @grant        none

// ==/UserScript==

(function() {

    'use strict';

    function openRawLink() {

        var rawUrl = window.location.href.replace('/blob', '').replace('github.com', 'raw.githubusercontent.com');

        window.location.href = rawUrl;
      
    }

    var rawButton = document.createElement('button');

    rawButton.innerHTML = '打开raw';//按钮名字

    rawButton.style.transform = 'scale(1.5)';//按钮大小

    rawButton.style.position = 'fixed';

    rawButton.style.right = '140px';//按钮左右

    rawButton.style.bottom = '100px';//按钮上下

    rawButton.addEventListener('click', openRawLink);

    document.body.appendChild(rawButton);

})();

