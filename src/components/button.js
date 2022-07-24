import * as React from 'react';
import Button from '@mui/material/Button';

export default function OutlinedButtons() {
  return (
    <Button variant="outlined" href="https://drive.google.com/file/d/1EqwvxeQvWH0P5Rn8az11-foLUy0kzQYQ/view?usp=sharing">
        Resume
    </Button>
  );
}

export const Project1Link = () => {
  return (
    <Button variant="outlined" href="https://google.com">
        Link
    </Button>
  );
}

export const Project1Repo = () => {
  return (
    <Button variant="outlined" href="https://facebook.com">
        GITHUB
    </Button>
  );
}
