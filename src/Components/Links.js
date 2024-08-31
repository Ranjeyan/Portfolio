import React from 'react';
import '../Styles/Links.css'; 

function Links() {
  return (
    <div className="links">
      <h2>Links</h2>
      <div className="link-item">
        <div className="link-left">
          <p className="link-label">GitHub</p>
        </div>
        <div className="link-right">
          <a
            href="https://github.com/Ranjeyan"
            target="_blank"
            rel="noopener noreferrer"
            className="link-text"
          >
            <span className="link-title">@Ranjeyan</span>
          </a>
          <span className="arrow">↗</span>
        </div>
      </div>

      <div className="link-item">
        <div className="link-left">
          <p className="link-label">LinkedIn</p>
        </div>
        <div className="link-right">
          <a
            href="https://www.linkedin.com/in/ranjeyan03/"
            target="_blank"
            rel="noopener noreferrer"
            className="link-text"
          >
            <span className="link-title">Ranjeyan A</span>
          </a>
          <span className="arrow">↗</span>
        </div>
      </div>

      <div className="link-item">
        <div className="link-left">
          <p className="link-label">Twitter</p>
        </div>
        <div className="link-right">
          <a
            href="https://x.com/theranjeyan"
            target="_blank"
            rel="noopener noreferrer"
            className="link-text"
          >
            <span className="link-title">@theranjeyan</span>
          </a>
          <span className="arrow">↗</span>
        </div>
      </div>
    </div>
  );
}

export default Links;
