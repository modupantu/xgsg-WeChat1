Page({
    data: {
        lunbotu: [
            '/image/lunbotu0.jpg',
            '/image/lunbotu.jpg',
            '/image/lunbotu3.jpg',
            '/image/lunbotu1.jpg',
            '/image/lunbotu2.jpg',
            '/image/lunbotu10.jpg'
        ],
        "gongs":"/image/gongs.png",
        "iconHot":"/image/hot.png",
        "xianguo":"/image/yinliao.png",
        "yufen":"/image/xiaochi.png",
        "pinpai":"/image/pinpai.png",
        indicatorDots: true,
        autoplay: true,
        interval: 6000,
        duration: 600,
        videoSrc: "http://61.61.50.1/ix_qqvideo/vhot2.qqvideo.tc.qq.com/APb2YBxo1EGFqu176F4j0Rjvvpv88jlkjiq9lYxaz4zs/r0534r3hxax.p712.1.mp4",
        xgjs:'/image/xgjs.jpg',
        circular: true
    },
    onShareAppMessage:function(){
        return {
            title: '北京鲜果时光甜品饮料制作技术开发有限公司',
            path: '/pages/fruits/index',
            success: function (res) {
                console.log('转发成功');
            },
            fail: function (res) {
                console.log('转发失败',res);
            }
        }
    },
    onPullDownRefresh() {
        wx.showNavigationBarLoading();  
        setTimeout(function () {
            wx.hideNavigationBarLoading()
            wx.stopPullDownRefresh()
        }, 1000);
    }
})
