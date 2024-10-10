import * as d3 from "d3";
import React from "react";

export default function LinePlot({
  data,
  width = 640,
  height = 400,
  marginTop = 20,
  marginRight = 20,
  marginBottom = 20,
  marginLeft = 20
}) {
  // Set up the scales properly using domain and range
  const x = d3
    .scaleLinear()
    .domain([0, data.length - 1]) // Domain is based on the length of the data
    .range([marginLeft, width - marginRight]); // Range is based on the width of the plot

  const y = d3
    .scaleLinear()
    .domain(d3.extent(data)) // Domain is the min/max of the data
    .range([height - marginBottom, marginTop]); // Range is the height of the plot (inverted)

  // Create the line generator function
  const line = d3
    .line()
    .x((d, i) => x(i)) // X accessor
    .y((d) => y(d)); // Y accessor

  return (
    <svg width={width} height={height}>
      {/* Line path */}
      <path
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        d={line(data)}
      />
      {/* Circles on data points */}
      <g fill="white" stroke="currentColor" strokeWidth="1.5">
        {data.map((d, i) => (
          <circle key={i} cx={x(i)} cy={y(d)} r="2.5" />
        ))}
      </g>
    </svg>
  );
}
