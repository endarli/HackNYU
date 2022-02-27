import React from 'react';
import { PieChart, Pie, Cell} from 'recharts';
import './App.css';

function App() {

  const COLORS = ['#2085EC', '#72B4EB', '#0E59AA', '#8464A0', '#F9CFF2'];

  var food = 323.00;
  var clothing = 223.42;
  var appliances = 25.03;
  var entertainment = 400.32;
  var other = 62.34;

  const data = [
    {name: 'Food', cost: food},
    {name: 'Clothing', cost: clothing},
    {name: 'Appliances', cost: appliances},
    {name: 'Entertainment', cost: entertainment},
    {name: 'Other', cost: other}
  ]

  const RADIAN = Math.PI / 180;
  const renderCustomizedLabel = ({cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 1.3;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
      <text x={x} y={y} fill={COLORS[index % COLORS.length]} fontFamily='verdana' fontSize={24} textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
        {data[index].name + ": $" + data[index].cost.toFixed(2)}
      </text>
    );
  };

  return (
    <div className="App">
      <header className="App-header">
        <PieChart width={950} height={600}>
          <Pie data={data} dataKey="cost" isAnimationActive={true} innerRadius={100} outerRadius={200} fill="8884d8" label={renderCustomizedLabel}>
              {data.map((entry, index) => <Cell fill={COLORS[index % COLORS.length]}/>)};
          </Pie>
        </PieChart>
      </header>
    </div>
  );
}

export default App;
