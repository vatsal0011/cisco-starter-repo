import React from 'react';
import { Exhibit } from './components/Exhibit';
import { Banner } from './components/Banner';
import { Address } from './components/Address';
function App() {
  return (
    <div>
      <Banner title="Sextent" />
      
      <Exhibit heading="Dashboard">
        <p>Total Jobs</p>
        <p>Description</p>
      </Exhibit>
      <Address />
      {/* Other content of your website */}
    </div>
  );
}

export default App;
