import React from 'react';
import Autocomplete from 'react-autocomplete';
class AutoCompleteApp extends React.Component
{

//Note: without super(props) code will throw parsing error
  constructor(props)
  {
    super(props);
  }

  render()
  {
    return(<Autocomplete
        getItemValue={(item) => item.label}
        items={[
          { label: 'Bangalore' },
          { label: 'Delhi' },
          { label: 'Pune' }
        ]}
        renderItem={(item, isHighlighted) =>
          <div style={{ background: isHighlighted ? 'lightgray' : 'white' }}>
            {item.label}
          </div>
        }
        value={value}
        onChange={(e) => value = e.target.value}
        onSelect={(val) => value = val}
      />
      );
  }
}

export default AutoCompleteApp;
