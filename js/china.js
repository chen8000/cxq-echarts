
function chinaMap(data) {

    // 默认渲染省份
    provinceMap(data[0])
    let max = 0;
    data.forEach(v => {
        let value = Number(v.value)
        max < value && (max = value)
    })
    var myChart = echarts.init(document.getElementById('china'))
    option = {
        
        tooltip: {
            trigger: 'item',
            formatter: function(params) {

                console.log(params)
                
                if (params.seriesType === 'scatter' || !params.data) {
                    return ''
                }
                // return `${params.name} <br/> ${params.value ? params.value : '暂无数据'}`
                let style = 'display:inline-block;margin-right:5px;border-radius:10px;width:10px;height:10px;background-color:'
                return `
                    <span>${params.data.name}</span><br/>
                    <span style="${style}rgb(255, 0, 0);"></span>新增确诊：${params.data.conadd}<br/>
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
        
        geo: {
            map: "china",
            roam: !1,
            scaleLimit: {
                min: 1,
                max: 2
            },
            zoom: 1.23,
            top: 120,
            label: {
                normal: {
                    show: !0,
                    fontSize: "14",
                    color: "rgba(0,0,0,0.7)"
                }
            },
            itemStyle: {
                normal: {
                    //shadowBlur: 50,
                    //shadowColor: 'rgba(0, 0, 0, 0.2)',
                    borderColor: "rgba(0, 0, 0, 0.2)"
                },
                emphasis: {
                    areaColor: "#f2d5ad",
                    shadowOffsetX: 0,
                    shadowOffsetY: 0,
                    borderWidth: 0
                }
            }
        },
        series: [{
            type: "map",
            geoIndex: 0,
            data: data
        }]
    };
    myChart.setOption(option);

    // 点击事件
    myChart.on('click', function (params) {
        provinceMap(params.data)
    })

}