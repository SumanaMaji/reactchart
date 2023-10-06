import React, { useState, useEffect } from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend
} from "recharts";
import Select from 'react-select';


//console.log(data1);

//const data = [];


export default function App() {
  //let [result, setResult] = useState([]);
  const [selectedOption, setSelectedOption] = useState('7');
  const [selectedDay, setSelectedDay] = useState(null);
  const data = [
    {
      name: "Page A",
      uv: 4000,
      pv: 2400,
      amt: 2400
    },
    {
      name: "Page B",
      uv: 3000,
      pv: 1398,
      amt: 2210
    },
    {
      name: "Page C",
      uv: 2000,
      pv: 9800,
      amt: 5000
    },
    {
      name: "Page D",
      uv: 2780,
      pv: 3908,
      amt: 2000
    },
    {
      name: "Page E",
      uv: 1890,
      pv: 4800,
      amt: 2181
    },
    {
      name: "Page F",
      uv: 2390,
      pv: 3800,
      amt: 2500
    },
    {
      name: "Page G",
      uv: 3490,
      pv: 4300,
      amt: 2100
    }
  ];
  const result = "[{\"id\":\"1\",\"hoz_name\":\"Page A\",\"uv\":\"4000\",\"pv\":\"2400\",\"amt\":\"2500\",\"added_on_datetime\":\"2022-11-24 16:13:58\"},{\"id\":\"2\",\"hoz_name\":\"Page B\",\"uv\":\"3000\",\"pv\":\"1398\",\"amt\":\"2230\",\"added_on_datetime\":\"2022-11-27 16:14:13\"},{\"id\":\"3\",\"hoz_name\":\"Page C\",\"uv\":\"2780\",\"pv\":\"3908\",\"amt\":\"2000\",\"added_on_datetime\":\"2022-11-28 16:15:28\"},{\"id\":\"4\",\"hoz_name\":\"Page D\",\"uv\":\"1890\",\"pv\":\"4800\",\"amt\":\"2181\",\"added_on_datetime\":\"2022-12-03 16:15:28\"},{\"id\":\"7\",\"hoz_name\":\"Page E\",\"uv\":\"2390\",\"pv\":\"4800\",\"amt\":\"2100\",\"added_on_datetime\":\"2022-12-05 16:17:28\"},{\"id\":\"8\",\"hoz_name\":\"Page F\",\"uv\":\"2390\",\"pv\":\"3800\",\"amt\":\"2500\",\"added_on_datetime\":\"2022-12-14 16:17:28\"}]";
  
const options = [
  { value: '7', label: '7 Days' },
  { value: '15', label: '15 Days' },
  { value: '30', label: '30 Days' },
];

  const handleChange = (e)=> {
    console.log("day1--"+e.target.value.value);
   // setSelectedDay(e.target.value.value);
    fetchData(e.target.value.value);
}
  useEffect(() => {
    //fetchData();
  }, [])
  const fetchData = (day) => {
    console.log("day2----"+day)
    // fetch(`http://localhost/test/wp-json/wp/v2/reactchart/31`)
    //   .then(response => response.json())
    //   .then(json => 
    //   console.log(result)
    //   )
  }
// Added to filter out zero values form the API
//data = data.filter(a => (a.Active !== 0 && a.Recovered !== 0 &          a.Deaths !== 0 ));
console.log(JSON.parse(result));
  return (
    <div className="container">
      <div className="card">
        <div className="card-header">
          <div className="row">
            <div className="col"><h2 className="pb-2 border-bottom">Columns with icons</h2></div>
            <div className="col-md-2">
              <div className="dropdown mt-3">
                <button className="btn btn-secondary btn-sm dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                  7 Days
                </button>
                <Select
                defaultValue={selectedOption}
               // onChange={setSelectedOption}
              
               onChange={(selectedOptions) => {
                let e = { target: {value: selectedOptions } };
                handleChange(e);
                //handleChangeIndex(index)(selectedOptions);
            }}
                options={options}
              />
                <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                  <li><a className="dropdown-item" href="#">Action</a></li>
                  <li><a className="dropdown-item" href="#">Another action</a></li>
                  <li><a className="dropdown-item" href="#">Something else here</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="card-body">
          <LineChart
            width={500}
            height={300}
            data={JSON.parse(result)}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line
              type="monotone"
              dataKey="pv"
              stroke="#8884d8"
              activeDot={{ r: 8 }}
            />
            <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
          </LineChart>
         
        </div>
      </div>

    </div>
  );
}

