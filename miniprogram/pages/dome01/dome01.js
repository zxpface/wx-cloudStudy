// pages/dome01/dome01.js
const db=wx.cloud.database();
Page({

  /**
   * 页面的初始数据
   */
  data: {
myVlu:''
  },
  //根据id doc修改数据
  // updateData(){
  //   db.collection("domelist").doc("b00064a760696af10d352d587904a78b").update({
  //     data:{
  //       author:'狗仔'
  //     }
  //   }).then(res=>{
  //     console.log(res);
  //   })

  //where 在title字段"jj"【要双引号】，修改author
  // updateData(){
  //   db.collection("domelist").where({
  //     title:"jj"
  //   }).update({
  //     data:{
  //       author:'狗仔',
  //       time:'2020-90-22'
  //     }
  //   }).then(res=>{
  //     console.log(res);
  //   })

//只是更新data内的 而原本的其他字段都删除了。where不会
  updateData(){
    db.collection("domelist").doc("cbddf0af60696c1500851b6b37a6ee25").set({
      data:{
        author:'狗仔',
        time:'2020-90-22'
      }
    }).then(res=>{
      console.log(res);
    })

  },

  // delData(){
  //   db.collection('domelist')
  //   .doc("cbddf0af60696c1500851b6b37a6ee25")
  //   .remove()
  //   .then(res=>{console.log(res);})
  // },

  myipt(res){
console.log(res);
this.myVlu=res.detail.value

  },
  delData(){
    db.collection('domelist')
    .doc(myVlu)
    .remove()
    .then(res=>{console.log(res);})
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