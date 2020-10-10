import React from 'react';
import { Button, ButtonGroup } from '@material-ui/core';
import { Save,Delete } from '@material-ui/icons';

function App() {
  return (
    <div>
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
