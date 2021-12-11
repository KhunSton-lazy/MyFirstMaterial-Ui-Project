import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';

export function AccountSetting() {
    const [name, setName] = React.useState("");

    const handleChange = (event) => {
      setName(event.target.value);
  };


    const boxStyles = {
        color: "rgb(58, 16, 229)",
        borderColor: '#FFF0E5',
        m: 1,
        border: 1,
        
      };

    const formBox = {
      border: "1px solid rgb(58, 16, 229)",
      marginTop: "100px",
      marginLeft: "20px",
      padding: "20px",
      borderRadius: "20px"

    }

  return (
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '50ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <div style={{...formBox }} >
        <TextField
          required
          id="companyName"
          label="Company Name"
          placeholder="Apple.inc"
          onChange={handleChange}
        />
        <TextField
          id="userName"
          label="USERNAME"
          placeholder="noobMaster69"
        />
        <TextField
          id="firstName"
          label="First Name"
          type="password"

        />
        <TextField
          id="lastName"
          label="Last Name"
        />
        <TextField
          id="address"
          label="Address"
          helperText="Village, Street"
          placeholder="Somnong 12, st.218"
        />
        <TextField
          id="city"
          label="City"
          placeholder="Phnom Penh"
        />
        <TextField
          id="country"
          label="Country"
          placeholder="Cambodia"
        />
        <TextField
          id="aboutMe"
          label="About me"
          multiline
          rows={4}
        />
        <Button sx={{...boxStyles, borderRadius: 1}} variant="outlined" size="large">Update Profile</Button>
      </div>
    </Box>
  );
}
