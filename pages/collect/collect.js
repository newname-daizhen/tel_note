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
        urls:"../detail/detail",
        rightNum: 0
      },{
        id: 1,
        title: '合肥环保中心',
        address: '望江东路519号',
        phone: "0551 384 4810",
        urls:"../detail/detail",
        rightNum: 0
      },{
        id: 2,
        title: '合肥环保中心',
        address: '望江东路119号',
        phone: "0551 384 8463",
        urls:"../detail/detail",
        rightNum: 0
      },{
        id: 3,
        title: '合肥环保中心',
        address: '望江东路119号',
        phone: "0551 384 8463",
        urls:"../detail/detail",
        rightNum: 0
      }
    ],
    maskShow: false,
    deleteId: null,
    delBtnWidth:160,
    isScroll:true,
    windowHeight:0,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },
  drawStart: function (e) {
    // console.log("drawStart"); 
    var that = this;
    var touch = e.touches[0]
    for(var index in that.data.resultData) {
      var item = that.data.resultData[index]
      item.rightNum = 0
    }
    that.setData({
      resultData: that.data.resultData,
      startX: touch.clientX,
    })
  },
  drawMove: function (e) {
    var touch = e.touches[0]
    var item = this.data.resultData[e.currentTarget.dataset.index]
    var disX = this.data.startX - touch.clientX
    if (disX >= 20) {
      if (disX > this.data.delBtnWidth) {
        disX = this.data.delBtnWidth
      }
      item.rightNum = disX
      this.setData({
        isScroll: false,
        resultData: this.data.resultData
      })
    } else {
      item.rightNum = 0
      this.setData({
        isScroll: true,
        resultData: this.data.resultData
      })
    }
  },  
  drawEnd: function (e) {
    var item = this.data.resultData[e.currentTarget.dataset.index]
    if (item.rightNum >= this.data.delBtnWidth/2) {
      item.rightNum = this.data.delBtnWidth
      this.setData({
        isScroll: true,
        resultData: this.data.resultData,
      })
    } else {
      item.rightNum = 0
      this.setData({
        isScroll: true,
        resultData: this.data.resultData,
      })
    }
  },
  // 删除收藏
  delItem:function(e){
    var that = this;
    console.log("删除收藏id"+e.currentTarget.dataset.id);
  },
  
  // 点击
  navTo:function(e){
    var that = this;
    console.log("点击")
    let urls = e.currentTarget.dataset.url;
    wx.navigateTo({
      url: urls,
    })
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