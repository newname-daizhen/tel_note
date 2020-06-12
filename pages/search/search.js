// pages/search/search.js
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
    dataFlag: false, //有无搜索结果（后台返回）
    searchValue: '', // 搜索
    iconClearShow: false //清除搜索框按钮/搜索内容展示
  },

  closeBtnShow: function (e) {
    var _this = this;
    var value = e.detail.value;
    if(value.length > 0){
      this.setData({
        searchValue: e.detail.value,
        iconClearShow: true
      });
    }else{
      this.setData({
        searchValue: e.detail.value,
        iconClearShow: false
      });
    }
  },
  searchInputClear: function (e) {
    this.setData({
      searchValue: '',
      iconClearShow: false
    });
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