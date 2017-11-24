const facebookResp = `
<html>
<head>
<meta property="og:url" content="URL_HERE">
<meta property="og:image" content="IMAGE_HERE">
<meta property="og:title" content="TITLE_HERE">
<meta property="og:description" content="DESCRIPTION_HERE">
<meta property="og:type" content="website">
<meta property="fb:app_id" content="FB_APP_ID">
</head>
<body>
BODY_HERE
</body>
</html>
`;

const twitterResp = `
<html>
<head>
<meta property="twitter:card" content="summary">
<meta property="twitter:site" content="TWITTER_HANDLE">
<meta property="twitter:image" content="IMAGE_HERE">
<meta property="twitter:title" content="TITLE_HERE">
<meta property="twitter:description" content="DESCRIPTION_HERE">
</head>
<body>
BODY_HERE
</body>
</html>
`;

let getResponseForTwitter = function(params) {
    let resp = twitterResp.replace('TWITTER_HANDLE', params.tw_handle);
    resp = twitterResp.replace('IMAGE_HERE', params.tw_image_url);
    resp = twitterResp.replace('TITLE_HERE', params.tw_title);
    resp = twitterResp.replace('DESCRIPTION_HERE', params.tw_description);
    return resp;
}

let getResponseForFB = function(params) {
    let resp = facebookResp.replace('URL_HERE',params.og_url);
    resp = resp.replace('IMAGE_HERE', params.og_image_url);
    resp = resp.replace('TITLE_HERE', params.og_title);
    resp = resp.replace('DESCRIPTION_HERE', params.og_description);
    resp = resp.replace('FB_APP_ID', params.fb_app_id);
    return resp;
}

module.exports = {
    getResponseForFB: getResponseForFB,
    getResponseForTwitter: getResponseForTwitter
}