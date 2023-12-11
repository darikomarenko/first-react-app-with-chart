import logo from './logo.svg';
import './App.css';
import { Chart } from "react-google-charts";


export const data = [
  ["Task", "Hours per Day"],
  ["Work", 11],
  ["Eat", 2],
  ["Walk", 2],
  ["Instagram", 2],
  ["Sleep", 7],
];

export const options = {
  title: "My Daily Activities",
  is3D: true,
};

export function App() {
  return (
    <Chart
      chartType="PieChart"
      data={data}
      options={options}
      width={"100%"}
      height={"400px"}
    />
  );
}

export default App;
