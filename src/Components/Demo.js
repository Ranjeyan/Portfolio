import React from 'react';
import '../Styles/Demo.css';


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
      
      
    </div>
  );
}

export default Demo;
