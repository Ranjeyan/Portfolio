import React from 'react';
import '../Styles/Demo.css';
import LinePlot from './LinePlot'; 

const data = [10, 20, 15, 25, 30, 45, 50, 40, 35, 60, 55, 70]; 

function Demo() {
  return (
    <div className="demo">
      <h2>Euro 2024 Insights - Power BI Dashboard</h2>
      <div className="dashboard-container">
        <iframe 
          title="euro-2024"
          width="600" 
          height="373.5" 
          src="https://app.powerbi.com/view?r=eyJrIjoiNmJjZDEzNDMtZDA1MC00ZGJlLWI3NGMtNGJkOTg1NjIzZjM0IiwidCI6IjYzZmYzZjIzLTE1ZjgtNDY3ZS1iM2RmLTM1NzliYTVkYzQxZSJ9" 
          allowFullScreen="true">
        </iframe>
      </div>
      
      <h2>Line Plot Analysis</h2>
      <div className="lineplot-container">
        <LinePlot data={data} width={600} height={400} /> 
      </div>
    </div>
  );
}

export default Demo;
