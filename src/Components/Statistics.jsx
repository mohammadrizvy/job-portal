import React from "react";
import { PieChart, Pie, Tooltip } from "recharts";

const marks = [
  { name: "Assingment 1", value: 50 },
  { name: "Assingmen 2 skipped", value: 0 },
  { name: "Assingment 3 ", value: 30 },
  { name: "Assingment 4", value: 55 },
  { name: "Assingment 5", value: 45 },
  { name: "Assingment 6", value: 53 },
  { name: "Assingment 7", value: 60 },
  { name: "Assingment 8", value: 54 },
];

export default function App() {
  return (
    <div className="text-center">
      <h1 className="mt-5 bg-purple-950 text-white p-6 font-bold text-3xl w-[45%] m-auto">Assingment Marks Statistics</h1>
      <PieChart width={1000} height={400}>
        <Pie
          dataKey="value"
          isAnimationActive={false}
          data={marks}
          cx={200}
          cy={200}
          outerRadius={80}
          fill="purple"
          label
        />

        <Tooltip />
      </PieChart>
    </div>
  );
}
