import React from "react";
import { ResponsiveBar } from "@nivo/bar";
import "./index.scss"


const Graph = ({ results }) => {
  return (
    <div className="graph-container">
      <ResponsiveBar
        data={results.map((result) => (
          {
            save: result.target.save ? result.target.save.toString() : '-',
            averageDamage: result.average_damage
          }
        ))}
        indexBy="save"
        keys={["averageDamage"]}
        groupMode="grouped"
        axisBottom={{
          tickSize: 7,
          tickPadding: 5,
          tickRotation: 0,
          legend: 'Save',
          legendPosition: 'middle',
          legendOffset: 32
        }}
        axisLeft={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: 'Average Damage',
          legendPosition: 'middle',
          legendOffset: -40
        }}
        margin={{ top: 50, right: 50, bottom: 50, left: 60 }}
        padding={0.3}
        colors={{ scheme: 'nivo' }}
      />
    </div>
  )
}


export default Graph