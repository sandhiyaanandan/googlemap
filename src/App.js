import React from 'react';
import './App.css';
import AutoCompleteApp from './AutoComplete';
import GoogleMap from './MapGoogle';
class App extends React.Component
{

  constructor(props)
  {
    super(props);
  }

  render()
  {
    return(<div>
       <AutoCompleteApp/>
       <GoogleMap/>
      </div>
      );
  }
}

export default App;
