import React from 'react';
import { PageHeaderWrapper } from '@ant-design/pro-layout';
import { Card, Select } from 'antd';
import echarts from 'echarts/lib/echarts';
// 引入柱状图
import 'echarts/lib/chart/bar';
// 引入提示框和标题组件
import 'echarts/lib/component/tooltip';
import 'echarts/lib/component/title';
// 使用样式
import 'echarts/theme/macarons';
import './charts.less';

const { Option } = Select;
function Check() {
  // const [ checked ] = useState(0);

  return (
    <Select defaultValue="line" style={{ width: 120 }}>
      <Option value="line">折线图</Option>
      <Option value="bar">柱状图</Option>
      <Option value="pie">饼状图</Option>
    </Select>
  );
}

function componentDidMount() {
  // 基于准备好的dom，初始化echarts实例
  const myChart = echarts.init(document.getElementById('charts'), 'macarons');
  // 绘制图表
  myChart.setOption({
    title: { text: 'ECharts 入门示例' },
    tooltip: {},
    xAxis: {
        data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子'],
    },
    yAxis: {},
    series: [{
        name: '销量',
        type: 'bar',
        data: [5, 20, 36, 10, 10, 20],
    }],
  });
}
export default () => (
  <PageHeaderWrapper>
    <Card>
      {Check()}
      <div id="charts"></div>
      {componentDidMount()}
    </Card>
  </PageHeaderWrapper>
)
