import React, { useState } from 'react';
import {
  Button,
  ButtonGroup,
  Checkbox,
  FormControlLabel,
} from '@material-ui/core';
import { Save, Delete } from '@material-ui/icons';

function CheckboxComponent() {
  const [checked, setChecked] = useState(true);
  return (
    <FormControlLabel
      control={
        <Checkbox checked={checked} onChange={() => setChecked(!checked)} />
      }
      label="Testing Checkbox"
    />
  );
}

function App() {
  return (
    <div style={{display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center'}}>
      <CheckboxComponent />
      <ButtonGroup>
        <Button
          variant='contained'
          color='primary'
          size='large'
          startIcon={<Save />}
        >
          Save
        </Button>
        <Button
          variant='contained'
          color='secondary'
          size='large'
          startIcon={<Delete />}
        >
          Discard
        </Button>
      </ButtonGroup>
    </div>
  );
}

export default App;
