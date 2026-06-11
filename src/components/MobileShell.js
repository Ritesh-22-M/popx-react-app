import React from 'react';
import './MobileShell.css';

function MobileShell({ children }) {
  return (
    <div className="shell-outer">
      <div className="mobile-frame">
        {children}
      </div>
    </div>
  );
}

export default MobileShell;
