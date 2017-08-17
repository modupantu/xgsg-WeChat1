Page({
    data: {
        "logo":"/image/huorejiameng.jpg",
        "liucheng":"/image/jiameng.jpg",
        "xianguotu":"/image/xianguoLogo1.png",
        "iconHot":"/image/hot.png"
    },
    onShareAppMessage: function (res) {
        return {
            title: '鲜果时光火爆招商',
            path: '/pages/jione/index',
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
            wx.hideNavigationBarLoading()
            wx.stopPullDownRefresh()
        }, 1000);
    }
})
