import React, { useState } from 'react';
import {
  Avatar,
  Button,
  Container,
  Grid,
  IconButton,
  Paper,
  Stack,
  TextField,
  Tooltip,
  Typography,
} from '@mui/material';
import { CameraAlt } from '@mui/icons-material';
import { styled } from '@mui/system';

const VisuallyHiddenInput = styled('input')({
  position: 'absolute',
  width: '1px',
  height: '1px',
  padding: 0,
  margin: '-1px',
  overflow: 'hidden',
  border: 0,
  clip: 'rect(0, 0, 0, 0)',
});

const LoginRegisterPage = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [bio, setBio] = useState('');
  const [avatar, setAvatar] = useState({ preview: '', error: '' });

  const handleLogin = (e) => {
    e.preventDefault();
    console.log('Login:', { username, password });
  };

  const handleSignUp = (e) => {
    e.preventDefault();
    console.log('Sign Up:', { name, bio, username, password, avatar });
  };

  const handleAvatarChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setAvatar({ preview: URL.createObjectURL(file), error: '' });
    } else {
      setAvatar({ preview: '', error: 'Failed to load image' });
    }
  };

  return (
    <div
      style={{
        backgroundImage: 'url(https://source.unsplash.com/random)',
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
          {isLogin ? (
            <>
              <Typography variant="h5" gutterBottom>
                Login
              </Typography>
              <form
                style={{ width: '100%', marginTop: '1rem' }}
                onSubmit={handleLogin}
              >
                <TextField
                  required
                  fullWidth
                  label="Username"
                  margin="normal"
                  variant="outlined"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
                <TextField
                  required
                  fullWidth
                  label="Password"
                  margin="normal"
                  variant="outlined"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
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
                <Typography textAlign="center" m="1rem">
                  OR
                </Typography>
                <Button
                  fullWidth
                  variant="text"
                  onClick={() => setIsLogin(false)}
                >
                  Sign Up Instead
                </Button>
              </form>
            </>
          ) : (
            <>
              <Typography variant="h5" gutterBottom>
                Register
              </Typography>
              <form
                style={{ width: '100%', marginTop: '1rem' }}
                onSubmit={handleSignUp}
              >
                <Stack
                  direction="row"
                  alignItems="center"
                  justifyContent="center"
                  spacing={2}
                >
                  <Avatar
                    sx={{
                      width: '6rem',
                      height: '6rem',
                      objectFit: 'contain',
                    }}
                    src={avatar.preview}
                  />
                  <IconButton component="label">
                    <Tooltip title="Upload Avatar">
                      <CameraAlt />
                    </Tooltip>
                    <VisuallyHiddenInput
                      type="file"
                      onChange={handleAvatarChange}
                    />
                  </IconButton>
                </Stack>
                {avatar.error && (
                  <Typography
                    color="error"
                    variant="caption"
                    display="block"
                    textAlign="center"
                  >
                    {avatar.error}
                  </Typography>
                )}
                <TextField
                  required
                  fullWidth
                  label="Full Name"
                  margin="normal"
                  variant="outlined"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
                <TextField
                  required
                  fullWidth
                  label="Bio"
                  margin="normal"
                  variant="outlined"
                  value={bio}
                  onChange={(e) => setBio(e.target.value)}
                />
                <TextField
                  required
                  fullWidth
                  label="Username"
                  margin="normal"
                  variant="outlined"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
                <TextField
                  required
                  fullWidth
                  label="Password"
                  margin="normal"
                  variant="outlined"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <Button
                  color="primary"
                  type="submit"
                  variant="contained"
                  fullWidth
                  sx={{ marginTop: '1rem' }}
                >
                  Sign Up
                </Button>
                <Typography textAlign="center" m="1rem">
                  OR
                </Typography>
                <Button
                  fullWidth
                  variant="text"
                  onClick={() => setIsLogin(true)}
                >
                  Login Instead
                </Button>
              </form>
            </>
          )}
        </Paper>
      </Container>
    </div>
  );
};

export default LoginRegisterPage;
