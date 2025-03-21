import React from 'react'
import { Card, Button } from "react-bootstrap";
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";
import { 
  CircleHelp, Calendar
} from "lucide-react";

const Graph = () => {
  const data = [
    { name: "Mon", current: 12000, previous: 10000 },
    { name: "Tue", current: 25000, previous: 22000 },
    { name: "Wed", current: 30000, previous: 28000 },
    { name: "Thu", current: 22000, previous: 25000 },
    { name: "Fri", current: 39312, previous: 38315 },
    { name: "Sat", current: 41000, previous: 34000 },
    { name: "Sun", current: 38000, previous: 32000 }
  ];
  return (
    <div>
      <Card className="p-4 shadow-lg rounded-3">
      <div className="d-flex justify-content-between align-items-center">
        <h5>Sales Overview <span className="text-muted"><CircleHelp/>
          </span></h5>
        <Button variant="outline-light" size="md" style={{backgroundColor:"#8F85F8",border:"none"}}><Calendar size={18} className='mx-2'/>This Week</Button>
      </div>
      <div className="d-flex gap-3 my-3">
        <span className="text-success fw-bold">$69,524 <small>(Current week)</small></span>
        <span className="text-primary fw-bold">$58,254 <small>(Previous week)</small></span>
      </div>
      <ResponsiveContainer width="100%" height={190}>
        <LineChart data={data}>
          <XAxis dataKey="name" stroke="#adb5bd" />
          <YAxis stroke="#adb5bd" />
          <Tooltip />
          <Line type="monotone" dataKey="current" stroke="#1abc9c" strokeWidth={2} dot={{ r: 5 }} />
          <Line type="monotone" dataKey="previous" stroke="#6a5acd" strokeWidth={2} dot={{ r: 5 }} />
        </LineChart>
      </ResponsiveContainer>
    </Card>
    </div>
  )
}

export default Graph
