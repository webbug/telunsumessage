
     //根据QueryString参数名称获取值
     function getQueryStringByName(name) {
         var result = location.search.match(new RegExp("[\?\&]" + name + "=([^\&]+)", "i"));
         if (result == null || result.length < 1) {
             return "";
         }
         return result[1];
     }
     var pengyouquanTitle = "十年金牌品质   回馈千万豪礼 9月1日至10月31日 活动期间 箱箱返10元    天天赢4999旅游基金";
     var wxtitle = "十年金牌品质   回馈千万豪礼 9月1日至10月31日 活动期间 箱箱返10元    天天赢4999旅游基金";
     var wxdesc = "十年金牌品质   回馈千万豪礼   箱箱返10元    天天赢4999旅游基金";
     var src = getQueryStringByName("src");
     var wxlink = "http://weixin.telunsu.net/10/index.aspx?src=" + src;
     var wximgUrl = "http://wx.fractalist.com.cn/dongfeng/images/share201508308S.jpg";
     window.addEventListener('load', onloadFun, false);
     function onloadFun() {
         $.ajax({
             async: false,
               url: '../10/GetWXJsApiByAjax.aspx?urlStr=' + encodeURIComponent(window.location.href),
             type: "GET",
             dataType: 'json',
             jsonp: 'callback',
             timeout: 5000,
             beforeSend: function () {
             },
             success: function (json) {
                 wx.config({
                     debug: false,
                     appId: json["appId"],
                     timestamp: json["timestamp"],
                     nonceStr: json["nonceStr"],
                     signature: json["signature"],
                     jsApiList: [
                            'checkJsApi',
                            'onMenuShareTimeline',
                            'onMenuShareAppMessage'
                          ]
                 });

                 wx.ready(function () {
                     wx.onMenuShareAppMessage({
                         title: wxtitle,
                         desc: wxdesc,
                         link: wxlink,
                         imgUrl: wximgUrl,
                         trigger: function (res) {

                         },
                         success: function (res) {

                             // alert("分享成功"); 分享给好友
                         },
                         cancel: function (res) {
                             // alert("cancel");
                         },
                         fail: function (res) {
                         }
                     });

                     wx.onMenuShareTimeline({
                         title: pengyouquanTitle,
                         link: wxlink,
                         desc: wxdesc,
                         imgUrl: wximgUrl,
                         trigger: function (res) {

                         },
                         success: function (res) {

                             // alert("ok"); 分享到朋友圈
                         },
                         cancel: function (res) {
                             // alert("cancel");
                         },
                         fail: function (res) {
                             // alert("fail");
                         }
                     });
                 });
             },
             complete: function (XMLHttpRequest, textStatus) {

             },
             error: function (xhr, textStatus) {
                 alert(textStatus);
             }
         });
     }