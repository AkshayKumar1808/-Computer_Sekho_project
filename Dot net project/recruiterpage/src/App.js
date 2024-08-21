

import React from 'react';
import { Outlet } from 'react-router-dom'; // Import Outlet for nested routes

const App = () => {
  return (
    <div>
      <Outlet /> {/* Render child routes here */}
    </div>
  );
};

export default App;
