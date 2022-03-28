import React from "react";
import {
	LineChart,
	XAxis,
	YAxis,
	Tooltip,
	Legend,
	CartesianGrid,
	Line,
} from "recharts";

const MyLineChart = () => {
	const data = [
		{
			name: "Oil",
			price: 4000,
			sells: 2400,
			amt: 2400,
		},
		{
			name: "Fruits",
			price: 3000,
			sells: 1398,
			amt: 2210,
		},
		{
			name: "Rice",
			price: 2000,
			sells: 9800,
			amt: 2290,
		},
		{
			name: "Books",
			price: 2780,
			sells: 3908,
			amt: 2000,
		},
		{
			name: "Dress",
			price: 1890,
			sells: 4800,
			amt: 2181,
		},
		{
			name: "Phones",
			price: 2390,
			sells: 3800,
			amt: 2500,
		},
		{
			name: "Laptop",
			price: 3490,
			sells: 4300,
			amt: 2100,
		},
	];

	return (
		<div>
			<h4>Line Chart</h4>
			<LineChart
				width={900}
				height={350}
				data={data}
				margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
				<CartesianGrid strokeDasharray='3 3' />
				<XAxis dataKey='name' />
				<YAxis />
				<Tooltip />
				<Legend />
				<Line type='monotone' dataKey='price' stroke='#42eff5' />
				<Line type='monotone' dataKey='sells' stroke='#f542da' />
			</LineChart>
		</div>
	);
};

export default MyLineChart;
