import React, { useState } from 'react';
import {
  Button,
  Container,
  IconButton,
  InputAdornment,
  Paper,
  TextField,
  Typography
} from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { useInputValidation } from "6pp";
import { bggranded } from '../../constant/color';
import {Navigate} from "react-router-dom"

const isAdmin=true

const AminLogin = () => {
  const secretkey = useInputValidation();
  const [showPassword, setShowPassword] = useState(false);


  const submithandler = (e) => {
    e.preventDefault();
    console.log("submit");
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  if(isAdmin)return <Navigate to ="/admin/dashboard"/>;
  return (
    <div
      style={{
        backgroundImage: bggranded,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '1rem',
      }}
    >
      <Container component="main" maxWidth="xs">
        <Paper
          elevation={6}
          sx={{
            padding: '2rem',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            borderRadius: '1rem',
            backdropFilter: 'blur(10px)',
            backgroundColor: 'rgba(255, 255, 255, 0.8)',
          }}
        >
          <>
            <Typography variant="h5" gutterBottom>
              Admin Login
            </Typography>
            <form
              style={{ width: '100%', marginTop: '1rem' }}
              onSubmit={submithandler}
            >
              <TextField
                required
                fullWidth
                label="Secret Key"
                type={showPassword ? 'text' : 'password'}
                margin="normal"
                variant="outlined"
                value={secretkey.value}
                onChange={secretkey.changehandler}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton onClick={togglePasswordVisibility}>
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />
              <Button
                color="primary"
                type="submit"
                variant="contained"
                fullWidth
                sx={{ marginTop: '1rem' }}
              >
                Login
              </Button>
            </form>
          </>
        </Paper>
      </Container>
    </div>
  );
}

export default AminLogin;
