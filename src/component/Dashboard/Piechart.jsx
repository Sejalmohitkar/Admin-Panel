import React from 'react'
import { Card, Button } from "react-bootstrap";
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from "recharts";
import { 
  CircleHelp, Calendar
} from "lucide-react";



function Piechart() {

    const data = [
        { name: "Deals", value: 51, color: "#8A7DF0" },
        { name: "Education", value: 18, color: "#F4C861" },
        { name: "Reviews", value: 31, color: "#F77C92" }
      ];

  return (
    <div>
      <Card className="p-4 shadow-lg rounded-3 text-center bg-dark text-light">
      <div className="d-flex justify-content-between">
        <h5>Aquisition <span className="text-muted"><CircleHelp/></span></h5>
        <Button variant="outline-light" size="sm">This Week</Button>
      </div>

      <ResponsiveContainer width="100%" height={170}>
        <PieChart>
          <Pie data={data} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={80} label>
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
          </Pie>
          <Tooltip />
        </PieChart>
      </ResponsiveContainer>

      <div className="d-flex justify-content-around ">
        <div>
          <h4>12,912</h4>
          <p className="text-muted">Reviews</p>
        </div>
        <div>
          <h4>544</h4>
          <p className="text-muted">Education</p>
        </div>
        <div>
          <h4>3,179</h4>
          <p className="text-muted">Deals</p>
        </div>
      </div>
    </Card>
    </div>
  )
}

export default Piechart
