"use client";

import React, { useState, useEffect } from 'react';
import { styled, createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import MuiDrawer from '@mui/material/Drawer';
import Box from '@mui/material/Box';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Link from '@mui/material/Link';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import { AccountBalanceWalletOutlined, AccountCircleOutlined, GppBad, Verified } from '@mui/icons-material';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import MainListItems from '../ui/dashboard/listItems';
import { petrona } from '@/app/layout';
import Person2Icon from '@mui/icons-material/Person2';
import Loading from '../ui/dashboard/Loading';
import PaidIcon from '@mui/icons-material/Paid';

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" className='text-gold' href="https://mui.com/">
        World Gold Council
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const drawerWidth = 240;

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    '& .MuiDrawer-paper': {
      position: 'relative',
      whiteSpace: 'nowrap',
      width: drawerWidth,
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
      boxSizing: 'border-box',
      ...(!open && {
        overflowX: 'hidden',
        transition: theme.transitions.create('width', {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.leavingScreen,
        }),
        width: theme.spacing(7),
        [theme.breakpoints.up('sm')]: {
          width: theme.spacing(9),
        },
      }),
    },
  })
);

const defaultTheme = createTheme();

export default function Layout({children}) {
  const [open, setOpen] = useState(true);
  const [wallet, setWallet] = React.useState(null);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const fetchUser = async () => {
      const token = localStorage.getItem('token');
      if (!token) {
        router.push('/login');
        return;
      }

      try {
        const walletResponse = await fetch('https://goldback.onrender.com/wallet', {
          headers: {
            'Authorization': `Bearer ${token}`,
          },
        });
        const walletResult = await walletResponse.json();
        if (walletResponse.ok) {
          setWallet(walletResult.data);
        } else {
          console.error('Failed to fetch wallet data');
        }

        const response = await fetch('https://goldback.onrender.com/auth/current-user', {
          headers: {
            'Authorization': `Bearer ${token}`,
          },
        });
        const result = await response.json();
        if (response.ok) {
          setUser(result.data);
        } else {
          router.push('/login');
        }
      } catch (error) {
        router.push('/login');
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, [router]);

  const toggleDrawer = () => {
    setOpen(!open);
  };

  if (loading) {
    return <Loading />;
  }

  return (
    <div >
      <ThemeProvider theme={defaultTheme}>
        <Box sx={{ display: 'flex' }}>
          <CssBaseline />
          <AppBar position="absolute" open={open}>
            <Toolbar sx={{ pr: '24px' }} className='bg-gradient-to-r from-black to-gold'>
              <IconButton
                edge="start"
                color="inherit"
                aria-label="open drawer"
                onClick={toggleDrawer}
                sx={{ marginRight: '36px', ...(open && { display: 'none' }) }}
              >
                <MenuIcon />
              </IconButton>
              <p className='lg:text-xl hidden lg:block'>Hello, {user.firstName} {user.lastName}</p>
              <p className='lg:text-xl lg:hidden block'>{user.lastName}</p>
              <button className='py-2 px-3 mx-12 bg-blue-600 hidden lg:block rounded-xl text-xs'>Deposit Funds <PaidIcon /></button>
              <div className={`${petrona.className} text-[1rem] font-extrabold ml-3 lg:ml-10 flex items-center gap-1`}>
                <AccountBalanceWalletOutlined className='text-[1.5rem]' /> {`$${wallet.totalBalance}.00`}
              </div>
              {/* Spacer to push the profile icon to the right */}
              <div style={{ flexGrow: 1 }}></div>
              {user && (
                <div className='text-[1.0rem] flex items-center gap-3'>
                  <div className='text-green-700'></div>
               <Link href="/dashboard/profile" classname="text-white"><Verified/> <GppBad/> <Person2Icon  /></Link>   
                </div>
              )}
            </Toolbar>
          </AppBar>
          <Drawer variant="permanent" open={open}>
            <Toolbar
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'flex-end',
                px: [1],
              }}
            >
              <IconButton onClick={toggleDrawer}>
                <ChevronLeftIcon />
              </IconButton>
            </Toolbar>
            <Divider />
            <List component="nav">
              <MainListItems onClick={toggleDrawer}/>
            </List>
          </Drawer>
          <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
            <Toolbar />
            {children}
            <Copyright sx={{ pt: 4 }} />
          </Box>
        </Box>
      </ThemeProvider>
    </div>
  );
}
