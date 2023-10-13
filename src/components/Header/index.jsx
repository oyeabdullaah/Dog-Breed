
import { HeartFilled } from '@ant-design/icons';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import React from 'react';
const Header = () => {
  return (

    <Box sx={{ flexGrow: 1 }}>
      <AppBar style={{ backgroundColor: 'rgb(38,38,38)', marginBlockEnd: '2%' }} position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            {/* <Sidebar /> */}
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            {/* News */}
          </Typography>
          <Button color="inherit"><HeartFilled /></Button>
        </Toolbar>
      </AppBar>
    </Box >
  )
}

export default Header