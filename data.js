
$.ajax({
  url: 'https://interface.sina.cn/news/wap/fymap2020_data.d.json',
  dataType:'jsonp',
  data:{},
  success:function(result){
    console.log(result)
  } ,
  error:function(err){
    console.log('获取数据异常！')
  }
})
