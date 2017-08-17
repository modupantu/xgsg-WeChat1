Page({
    data: {
        imgUrls: [
            '/image/rotate2.jpg',
            '/image/rotate3.jpg',
            '/image/rotate1.jpg'
        ],
        HGImg:[
            '/image/shouce4.jpg',
            '/image/shouce5.jpg',
            '/image/shouce3.jpg',
            '/image/shouce2.jpg'
        ],
        "yufen":"/image/xiaochi.png",
        "heguyufeng":"/image/hglogo.jpg",
        "sheji":"/image/sheji.png",
        "jiaru":"/image/jiaru.png",
        indicatorDots: true,
        autoplay: true,
        interval: 6000,
        duration: 600,
        circular: true
    },
    onShareAppMessage: function () {
        return {
            title: '北京鲜果时光旗下产品--禾谷渔粉',
            path: '/pages/fishpowder/index?id=0',
            success: function (res) {
                console.log('转发成功');
            },
            fail: function (res) {
                console.log('转发失败', res);
            }
        }
    },
    onPullDownRefresh() {
        wx.showNavigationBarLoading();     
        setTimeout(function () {
            wx.hideNavigationBarLoading();
            wx.stopPullDownRefresh();
        }, 1000);
    }  
})
