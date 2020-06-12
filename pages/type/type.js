// pages/type/type.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    typeData:[
      {id:0,name:"火车站"},
      {id:1,name:"汽车站"},
      {id:2,name:"地铁站"},
      {id:23,name:"机场"},
      {id:4,name:"医院"},
      {id:5,name:"消防"},
      {id:6,name:"电信"},
      {id:7,name:"移动"},
      {id:8,name:"联通"},
      {id:9,name:"派出所"},
      {id:10,name:"查电费"},
      {id:11,name:"高考分数"}
    ],
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
    typeIndex: 0
  },

  typeClick:function(e){
    let idx = e.currentTarget.dataset.index;
    this.setData({
      typeIndex: idx
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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