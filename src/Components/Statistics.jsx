import React from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";


const Statistics = () => {

  const marksArry = [
    {
      assignment: "Assignment : 1",
      marks: 50,
    },
    {
      assignment: "Assignment : 2 Skipped",
      marks: 0,
    },
    {
      assignment: "Assignment : 3",
      marks: 30,
    },
    {
      assignment: "Assignment : 4",
      marks: 55,
    },
    {
      assignment: "Assignment : 5",
      marks: 45,
    },
    {
      assignment: "Assignment : 6",
      marks: 53,
    },
    {
      assignment: "Assignment : 7",
      marks: 60,
    },
    {
      assignment: "Assignment : 8",
      marks: 54,
    },
  ];

    return (
      <div className=''>
        <LineChart width={1300} height={300} data={marksArry}>
          <Line dataKey="marks"></Line>
          <XAxis dataKey="assignment" />
          <YAxis></YAxis>
          <Tooltip></Tooltip>
          <Legend></Legend>
          <CartesianGrid ></CartesianGrid>
        </LineChart>
      </div>
    );
};

export default Statistics;