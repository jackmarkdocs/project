
function my(){
var x=document.getElementsByTagName("input")[0];
var q=document.getElementsByTagName("form")[0];
x.style.backgroundColor="white";
q.style.backgroundColor="white";
q.style.outlineStyle="solid";
q.style.outlineWidth="5px";
q.style.outlineColor="#c3d0f8";
}

function mm(){
var x=document.getElementsByTagName("input")[0];
var q=document.getElementsByTagName("form")[0];
x.style.backgroundColor="#ddebf9";
q.style.backgroundColor="#ddebf9";
q.style.outlineStyle="none";
}
var ww=1;
function gg(){
ww+=1;
var x=document.getElementById("gg");
if(ww%2==0){

x.style.animation="move 0.5s forwards"
}else{
x.style.animation="move1 0.5s forwards"
}

}


<!--------------------------图表-------------------->
 var myChart = echarts.init(document.getElementById('one'));
 
        // 指定图表的配置项和数据
        var option = {
            title: {
                text: '第一个 ECharts 实例'
            },
            tooltip: {},
            legend: {
                data:['销量']
            },
            xAxis: {
                data: ["衬衫","羊毛衫","雪纺衫","裤子","高跟鞋","袜子"]
            },
            yAxis: {},
            series: [
		
			{
                name: '销量',
                type: 'bar',
                data: [5, 20, 36, 10, 10, 20]
            }]
        };
 
        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);
var myChartOne=echarts.init(document.getElementById('two'));

var optionOne={
series:{
	name:'数据源',
	type:'pie',
	radius:'50%',
	roseType:'angle',
	data:[
		{value:300,name:'视频'},
		{value:200,name:'联盟'},
		{value:30,name:'邮件'},
		{value:100,name:'访问'},
		{value:200,name:'广告'},
	],
	itemStyle:{
	normal:{
		shadowBlur:200,
		shadowColor:'red'
	}
	}
	
}
	

}
myChartOne.setOption(optionOne);

//three echart-------------------------
var myChartThree=echarts.init(document.getElementById('three'));

optionThree = {
  title: {
    text: 'Radar'
  },
  legend: {
    data: ['qq', 'ww']
  },
  radar: {
    // shape: 'circle',
    indicator: [
      { name: 'female', max: 6500 },
      { name: 'male', max: 16000 },
      { name: 'technology', max: 30000 },
      { name: 'my', max: 38000 },
      { name: 'development', max: 52000 },
      { name: 'market', max: 25000 }
    ]
  },
  series: [
    {
      name: 'Budget vs spending',
      type: 'radar',
      data: [
        {
          value: [4200, 3000, 20000, 35000, 50000, 18000],
          name: 'qq'
        },
        {
          value: [5000, 14000, 28000, 26000, 42000, 21000],
          name: 'ww'
        }
      ]
    }
  ]
};
myChartThree.setOption(optionThree);

//four echarts----------------------------
var myChartFour=echarts.init(document.getElementById('four'));
var data = [
  {
    name: 'Grandpa',
    children: [
      {
        name: 'Uncle Leo',
        value: 15,
        children: [
          {
            name: 'Cousin Jack',
            value: 2
          },
          {
            name: 'Cousin Mary',
            value: 5,
            children: [
              {
                name: 'Jackson',
                value: 2
              }
            ]
          },
          {
            name: 'Cousin Ben',
            value: 4
          }
        ]
      },
      {
        name: 'Father',
        value: 10,
        children: [
          {
            name: 'Me',
            value: 5
          },
          {
            name: 'Brother Peter',
            value: 1
          }
        ]
      }
    ]
  },
  {
    name: 'Nancy',
    children: [
      {
        name: 'Uncle Nike',
        children: [
          {
            name: 'Cousin Betty',
            value: 1
          },
          {
            name: 'Cousin Jenny',
            value: 2
          }
        ]
      }
    ]
  }
];
optionFour = {
  series: {
    type: 'sunburst',
    // emphasis: {
    //     focus: 'ancestor'
    // },
    data: data,
    radius: [0, '90%'],
    label: {
      rotate: 'radial'
    }
  }
};

myChartFour.setOption(optionFour);