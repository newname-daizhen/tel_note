// pages/collect/collect.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    resultData:[
      {
        id: 0,
        title: '合肥环保中心',
        address: '望江西路519号',
        phone: "0551 284 4810",
        urls:"../detail/detail"
      },{
        id: 1,
        title: '合肥环保中心',
        address: '望江东路519号',
        phone: "0551 384 4810",
        urls:"../detail/detail"
      },{
        id: 2,
        title: '合肥环保中心',
        address: '望江东路119号',
        phone: "0551 384 8463",
        urls:"../detail/detail"
      },{
        id: 3,
        title: '合肥环保中心',
        address: '望江东路119号',
        phone: "0551 384 8463",
        urls:"../detail/detail"
      }
    ],
    maskShow: false,
    deleteId: null,
    // 触摸开始时间
    touchStartTime: 0,
    // 触摸结束时间
    touchEndTime: 0,  
    // 最后一次单击事件点击发生时间
    lastTapTime: 0, 
    // 单击事件点击后要触发的函数
    lastTapTimeoutFunc: null
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },
  /// 按钮触摸开始触发的事件
  bindTouchStart:function(e) {
    this.setData({
      touchStartTime: e.timeStamp
    })
  },
  /// 按钮触摸结束触发的事件
  bindTouchEnd:function(e) {
    this.setData({
      touchEndTime: e.timeStamp
    })
  },
  // 长按
  bindLongDelete:function(e){
    let idx = e.currentTarget.dataset.id;
    console.log("准备删除收藏id为"+idx);
    this.setData({
      maskShow: true,
      deleteId: idx
    })
  },
  // 删除收藏
  itemDelete:function(){
    var that = this;
    console.log("删除收藏id"+that.data.deleteId);
    this.setData({
      maskShow: false
    })
  },
  // 取消删除
  closeDelete:function(){
    this.setData({
      maskShow: false
    })
  },
  // 点击
  navTo:function(e){
    var that = this
    let urls = e.currentTarget.dataset.url;
    // 控制点击事件在350ms内触发，为了防止长按时会触发点击事件
    if (that.data.touchEndTime - that.data.touchStartTime < 350) {
      wx.navigateTo({
        url: urls,
      })
    }
   
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})