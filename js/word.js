function echartsWord (data) {
  // word_code
  let renderData = []
  data.forEach(v => {
    let zhen = word_code.filter(res => res.zh === v.name)
    
    if (zhen.length > 0) {
      renderData.push({
        name: zhen[0].en,
        value: v.value,
        showName: v.name,
        conNum: v.conNum,
        susNum: v.susNum,
        cureNum: v.cureNum,
        deathNum: v.deathNum,
        conadd: v.conadd,
        susadd: v.susadd,
        cureadd: v.cureadd,
        deathadd: v.deathadd
      })
    }
  })

  var myChart = echarts.init(document.getElementById('word'))
  myChart.setOption({
    tooltip: {
      trigger: 'item',
      formatter: function(params) {
          if (params.seriesType === 'scatter' || !params.data) {
              return ''
          }
          // return `${params.name} <br/> ${params.value ? params.value : '暂无数据'}`
          let style = 'display:inline-block;margin-right:5px;border-radius:10px;width:10px;height:10px;background-color:'
          return `
              <span>${params.data.showName}</span><br/>
              ${params.data.conadd ? `<span style="${style}rgb(255, 0, 0);"></span>新增确诊：${params.data.conadd}<br/>`: ''}
              <span style="${style}rgb(245, 35, 35);"></span>累计确诊：${params.data.value}<br/>
              <span style="${style}rgb(35, 245, 35);"></span>治愈：${params.data.cureNum}<br/>
              <span style="${style}rgb(0, 0, 0);"></span>死亡：${params.data.deathNum}
          `
      }
  },
  visualMap: {
          min: 0,
          max: 1000,
          left: 26,
          bottom: 40,
          showLabel: !0,
          text: ["高", "低"],
          pieces: [{
              gt: 1000,
              label: "> 1000 人",
              color: "rgb(255, 0, 0)"
          }, {
              gte: 100,
              lte: 1000,
              label: "100 - 1000 人",
              color: "rgba(255, 74, 74, .8)"
          },{
              gte: 10,
              lte: 100,
              label: "10 - 100 人",
              color: "rgb(253, 147, 147)"
          }, {
              gte: 1,
              lt: 10,
              label: "1 - 10 人",
              color: "rgb(250, 204, 204)"
          }, {
              gt: 0,
              lt: 1,
              label: "疑似",
              color: "#ffd768"
          }, {
              value: 0,
              color: "#f8f8f8"
          }],
          show: !0
      },
  series: [
      {
          type: 'map',
          mapType: 'world',
          zoom: 1.23,
          top: 180,
          roam: false,
          itemStyle:{
              emphasis:{label:{show:true}}
          },
          data: renderData
      }
  ]
  });
}