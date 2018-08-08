// page/tabBar/msg/index.js
Page({
  data: {
    
  },
  onLoad: function () {
   
  },
 tabClick: function(event){
   var tabValue = event.currentTarget.dataset.tab;
   if(tabValue == 1){
     console.log(tabValue)
   }
 }
})