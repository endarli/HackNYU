import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Legend} from 'recharts';
import './App.css';

function App() {

  const colors = ['#2085EC', '#72B4EB', '#0E59AA', '#8464A0', '#ba7ba1'];

  var food = 100;
  var clothing = 250;
  var appliances = 30;
  var entertainment = 430;
  var other = 320;

  const data = [
    {name: 'Food', cost: food},
    {name: 'Clothing', cost: clothing},
    {name: 'Appliances', cost: appliances},
    {name: 'Entertainment', cost: entertainment},
    {name: 'Other', cost: other}
  ]

  const RADIAN = Math.PI / 180;
  const renderCustomizedLabel = ({cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 1.4;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);
    return (
      <text x={x} y={y} fill={colors[index % colors.length]} fontFamily='verdana' fontSize={18} textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
        {"$" + data[index].cost.toFixed(2)}
      </text>
    );
  };

  return (
    <body>
        <div className='header'>
          <div className='headercard'> <h1>RCPT</h1> </div>
        </div>

        <div className="row">
          <div className="leftcolumn">
            <div className="card">
              <h1>Total Spendings</h1>
              <div style={{width: "100%", height: 400}}>
              <ResponsiveContainer>
                <PieChart width={850} height={400}>
                  <Pie 
                    cx="50%" cy="50%" 
                    data={data} 
                    dataKey="cost" 
                    isAnimationActive={true} 
                    innerRadius={75} 
                    outerRadius={150} 
                    fill="8884d8" 
                    legendType='circle'
                    label={renderCustomizedLabel}>
                      {data.map((entry, index) => <Cell fill={colors[index % colors.length]}/>)};
                  </Pie>
                  <Legend verticalAlign='bottom' height={36}/>
                </PieChart>
              </ResponsiveContainer>
              </div>
            </div>
          </div>
          <div className="rightcolumn">
            <div className="card">
              <h1>Scan Receipt</h1> 
              <div className="button button1">
              Upload image of receipt
              </div>
            </div>
          </div>
        </div>
    </body>
  );
}

export default App;
