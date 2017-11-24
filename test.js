let crawler = require('./index');

let fb_params = {
    og_url: 'https://www.facebook.com',
    og_image_url: 'Test Image url',
    og_title: 'Test title',
    og_description: 'Test description',
    fb_app_id: 'abcd'
}

let tw_params = {
    tw_handle: 'Test TW handle',
    tw_image_url: 'Test TW Image url',
    tw_title: 'Test TW Title',
    tw_description: 'Test description'
}
console.log(crawler.getResponseForFB(fb_params));
console.log(crawler.getResponseForTwitter(tw_params));