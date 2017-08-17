Page({
    data: {
        imgUrls: [
            '/image/lunbotu4.jpg',
            '/image/lunbotu5.jpg',
            '/image/lunbotu6.jpg',
            '/image/lunbotu7.jpg',
            '/image/lunbotu8.jpg',
            '/image/lunbotu9.jpg'
        ],
        Image:[
            '/image/11.jpg',
            '/image/18.jpg',
            '/image/13.jpg',
            '/image/14.jpg',
            '/image/15.jpg',
            '/image/16.jpg'
        ],
        jion:[
            '/image/jion.jpg',
            '/image/jion2.jpg',
            '/image/jion3.jpg',
            '/image/jion4.jpg'
        ],
        sgsheji: [
            '/image/xgsheji.jpg',
            '/image/xgsheji1.jpg',
            '/image/xgsheji2.jpg',
            '/image/xgsheji3.jpg'
        ],
        "sheji":"/image/sheji.png",
        "iconHot":"/image/hot.png",
        indicatorDots: true,
        autoplay: true,
        interval: 6000,
        duration: 600,
        xgjs:'/image/xgjs.jpg',
        circular: true,
    },
    onShareAppMessage: function () {
        return {
            title: '北京鲜果时光',
            path: '/pages/index/index?id=0',
            success: function (res) {
                console.log('转发成功');
            },
            fail: function (res) {
                console.log('转发失败', res);
            }
        }
    },
    //下拉刷新
    onPullDownRefresh() {
    　　wx.showNavigationBarLoading();          
            setTimeout(function(){
                wx.hideNavigationBarLoading();
                wx.stopPullDownRefresh();
            },1000);
       }
})
