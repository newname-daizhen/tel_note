// pages/note/note.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    noteData:[
      {id: 0,name: "合肥环保中心",time: "2018.21.11 13"},
      {id: 1,name: "合肥环保中心",time: "2018.21.11 13"},
      {id: 2,name: "合肥环保中心",time: "2018.21.11 13"},
      {id: 3,name: "合肥环保中心",time: "2018.21.11 13"},
      {id: 4,name: "合肥环保中心",time: "2018.21.11 13"},
      {id: 5,name: "合肥环保中心",time: "2018.21.11 13"},
      {id: 6,name: "合肥环保中心",time: "2018.21.11 13"},
      {id: 7,name: "合肥环保中心",time: "2018.21.11 13"},
      {id: 8,name: "合肥环保中心",time: "2018.21.11 13"},
      {id: 9,name: "合肥环保中心",time: "2018.21.11 13"},
      {id: 10,name: "合肥环保中心",time: "2018.21.11 13"},
      {id: 11,name: "合肥环保中心",time: "2018.21.11 13"}
    ],
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
    for(var index in that.data.noteData) {
      var item = that.data.noteData[index]
      item.rightNum = 0
    }
    that.setData({
      noteData: that.data.noteData,
      startX: touch.clientX,
    })
  },
  drawMove: function (e) {
    var touch = e.touches[0]
    var item = this.data.noteData[e.currentTarget.dataset.index]
    var disX = this.data.startX - touch.clientX
    if (disX >= 20) {
      if (disX > this.data.delBtnWidth) {
        disX = this.data.delBtnWidth
      }
      item.rightNum = disX
      this.setData({
        isScroll: false,
        noteData: this.data.noteData
      })
    } else {
      item.rightNum = 0
      this.setData({
        isScroll: true,
        noteData: this.data.noteData
      })
    }
  },  
  drawEnd: function (e) {
    var item = this.data.noteData[e.currentTarget.dataset.index]
    if (item.rightNum >= this.data.delBtnWidth/2) {
      item.rightNum = this.data.delBtnWidth
      this.setData({
        isScroll: true,
        noteData: this.data.noteData,
      })
    } else {
      item.rightNum = 0
      this.setData({
        isScroll: true,
        noteData: this.data.noteData,
      })
    }
  },
  // 删除收藏
  delItem:function(e){
    var that = this;
    console.log("删除收藏id"+e.currentTarget.dataset.id);
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