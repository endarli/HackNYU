import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Legend} from 'recharts';
import {useForm} from "react-hook-form";
import './App.css';
//import axios from 'axios';

function App() {
  const {register, handleSubmit} = useForm();

  const onSubmit = (data, e) => {

    var Type = document.getElementById('Type').value;
    var Item = document.getElementById('Item').value;
    var Amount = document.getElementById('Amount').value;
    var key = document.getElementById('key').value;
    console.log(key);

    const item = {
        Type: Type,
        Item: Item,
        Amount: Amount,
    }

    window.localStorage.setItem(key, JSON.stringify(item));  
    //converting object to string
  };

  const onError = (errors, e) => {
    console.log(errors, e)
  };

  const getStorage = (data, e) => {
    var key =  parseInt(document.getElementById('key1').value);
    var item = localStorage.getItem(key);
    var paragraph = document.createElement("p");
    var infor = document.createTextNode(item);
    paragraph.appendChild(infor);
    var element = document.getElementById("retrieve");
    element.appendChild(paragraph);
  }

  const clearStorage = () => {
    //clears the entire localStorage
    localStorage.clear();
}

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
          <div className='headercard'> <h1>SmartSpend</h1> </div>
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
              
              <form onSubmit={handleSubmit(onSubmit)}>
                <h1>Scan Receipt</h1>
                <input {...register("picture")} className="notfield" type="file"/>
                <button className="button button1">Upload image of receipt</button>
              </form>

              <form onSubmit={handleSubmit(onSubmit, onError)}>
                <h1>Manual Receipt</h1>
                <p>
                  Item #: <input id="key" type="number" placeholder="#"/>
                  &nbsp;Type: <select id="Type" placeholder="N/A">
                    <option>Food</option>
                    <option>Clothing</option>
                    <option>Appliance</option>
                    <option>Entertainment</option>
                    <option>Other</option>

                  </select>
                </p>
                <p>
                  Item: <input id="Item" type="text" placeholder="Item Name"/>
                  &nbsp;Amount: <input id="Amount" type="number" placeholder="0￠"/>
                </p>
                <button className="button button1" type="submit">Upload component of receipt</button>
              </form>

              <form onSubmit={handleSubmit(clearStorage)}>
                <h1>Clear Local Storage</h1>
                <button className="button button1" type="submit">Clear</button>
              </form>
              <form onSubmit={handleSubmit(getStorage)}>
                <h1>Get Local Storage</h1>
                <p>Item #: <input id="key1" type="number" placeholder="#"/></p>
                <button className="button button1" type="submit">Get item</button>
              </form>
              <div id="retrieve"></div>
            </div>
          </div>
        </div>
    </body>
  );
}

export default App;