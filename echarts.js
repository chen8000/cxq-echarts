
    // 基于准备好的dom，初始化echarts实例
    var myChart = echarts.init(document.getElementById('main'));

    var option = {
        backgroundColor: '#000',
        title: {
            text: '10000000 GPS Points',
                left: 'center',
            textStyle: {
                color: '#fff'
            }
        },
        geo: {
            map: 'world',
            roam: true,
            label: {
                emphasis: {
                    show: false
                }
            },
            silent: true,
            itemStyle: {
                normal: {
                    areaColor: '#323c48',
                    borderColor: '#111'
                },
                emphasis: {
                    areaColor: '#2a333d'
                }
            }
        },
        series: [{
            name: '弱',
            type: 'scatterGL',
            progressive: 1e6,
            coordinateSystem: 'geo',
            symbolSize: 1,
            zoomScale: 0.002,
            blendMode: 'lighter',
            large: true,
            itemStyle: {
                color: 'rgb(20, 15, 2)'
            },
            postEffect: {
                enable: true
            },
            silent: true,
            dimensions: ['lng', 'lat'],
            data: new Float32Array()
        }]
    }
    myChart.setOption(option);