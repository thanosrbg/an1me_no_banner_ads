// ==UserScript==
// @name         An1me.nl
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       Thanos Arampatzis
// @match        https://an1me.nl/
// @match        https://an1me.nl/*
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    var selectors = [
    /* By ID: */
    '#sidebar-wrap', '#advert', '#xrail', '#middle-article-advert-container',
    '#sponsored-recommendations', '#around-the-web', '#sponsored-recommendations',
    '#taboola-content', '#taboola-below-taboola-native-thumbnails', '#inarticle_wrapper_div',
    '#rc-row-container', '#ads', '#at-share-dock', '#at4-share', '#at4-follow', '#right-ads-rail',
    'div#ad-interstitial', 'div#advert-article', 'div#ac-lre-player-ph','ins#aswift_3_anchor',
    /* By Class: */
    '.ad', '.avert', '.avert__wrapper', '.middle-banner-ad', '.advertisement',
    '.GoogleActiveViewClass', '.advert', '.cns-ads-stage', '.teads-inread', '.ad-banner',
    '.ad-anchored', '.js_shelf_ads', '.ad-slot', '.antenna', '.xrail-content',
    '.advertisement__leaderboard', '.ad-leaderboard', '.trc_rbox_outer', '.ks-recommended',
    '.article-da', 'div.sponsored-stories-component', 'div.addthis-smartlayers',
    'div.article-adsponsor', 'div.signin-prompt', 'div.article-bumper', 'div.video-placeholder',
    'div.top-ad-container', 'div.header-ad', 'div.ad-unit', 'div.demo-block', 'div.OUTBRAIN',
    'div.ob-widget', 'div.nwsrm-wrapper', 'div.announcementBar', 'div.partner-resources-block',
    'div.arrow-down', 'div.m-ad', 'div.story-interrupt', 'div.taboola-recommended',
    'div.ad-cluster-container', 'div.ctx-sidebar', 'div.incognito-modal', '.OUTBRAIN', '.subscribe-button',
    '.ads9', '.leaderboards', '.GoogleActiveViewElement', '.mpu-container', '.ad-300x600', '.tf-ad-block',
    '.sidebar-ads-holder-top', '.ads-one', '.FullPageModal__scroller',
    '.content-ads-holder', '.widget-area', '.social-buttons', '.ac-player-ph','.adsbygoogle-adsbygoogle-noablate',
    /* Other: */
    'script', 'iframe', 'aside#sponsored-recommendations', 'aside[role="banner"]', 'aside',
    'amp-ad', 'span[id^=ad_is_]', 'div[class*="indianapolis-optin"]', 'div[id^=google_ads_iframe]',
    'div[data-google-query-id]', 'section[data-response]', 'ins.adsbygoogle', 'div[data-google-query-id]',
    'div[data-test-id="fullPageSignupModal"]', 'div[data-test-id="giftWrap"]','ins.aswift_1_anchor' ];

    for(let i in selectors) {
        let nodesList = document.querySelectorAll(selectors[i]);
        for(let i = 0; i < nodesList.length; i++) {
            let el = nodesList[i];
            if(el && el.parentNode) {
                el.parentNode.removeChild(el);
            }
        }
    }

})();