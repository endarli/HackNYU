import React from 'react';
import { PieChart, Pie, Cell} from 'recharts';
import './App.css';

function App() {

  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#FF8042'];

  const data = [
    {name: 'food', cost: 323.40},
    {name: 'clothing', cost: 100.40},
    {name: 'appliances', cost: 42.40},
    {name: 'appliances', cost: 3.40},
    {name: 'other', cost: 452.40}
  ]

  return (
    <div className="App">
      <header className="App-header">
        <PieChart width={700} height={700}>
          <Pie data={data} dataKey="cost" outerRadius={250} fill="8884d8">
              {data.map((entry, index) => <Cell fill={COLORS[index % COLORS.length]}/>)}
          </Pie>
        </PieChart>
      </header>
    </div>
  );
}

export default App;
