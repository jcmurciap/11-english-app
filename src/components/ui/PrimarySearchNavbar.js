import React, { useState } from 'react';
import { styled, alpha } from "@mui/material/styles";
import Box from '@mui/material/Box';
import InputBase from '@mui/material/InputBase';
import Menu from '@mui/material/Menu';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import Avatar from '@mui/material/Avatar';
import Badge from '@mui/material/Badge';
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from '@mui/material/IconButton';
import MailIcon from "@mui/icons-material/Mail";
import NotificationsIcon from "@mui/icons-material/Notifications";
import AccountCircle from "@mui/icons-material/AccountCircle";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import MoreIcon from "@mui/icons-material/More";
import '../auth/login.css';
import { LessonButtons } from './LessonButtons';

//box search
const Search = styled('div')(({ theme }) => ({
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
        backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    borderRadius: theme.shape.borderRadius, // 4
    marginLeft: 0,
    marginRight: theme.spacing(2),
    position: 'relative',
    [theme.breakpoints.up('sm')]: { // si la pantalla es superior a sm(600px)
    	marginLeft: theme.spacing(3),
      	width: 'auto',
    },
    width: '100%',
}));

// lupita
const SearchIconWrapper = styled("div")(({ theme }) => ({
    alignItems: "center",
    display: "flex",
    height: "100%",
    justifyContent: "center",
    padding: theme.spacing(0, 2),
    pointerEvents: "none",
    position: "absolute",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: "inherit",
    "& .MuiInputBase-input": {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create("width"),
        [theme.breakpoints.up("md")]: {
          width: "20ch"
        },
        width: "100%",
    }
}));

export const PrimarySearchNavbar = () => {
	    
    const [anchorEl, setAnchorEl] = useState(null);
    const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = useState(null);
    
    const isMenuOpen = Boolean(anchorEl);
    const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

    const handleProfileMenuOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMobileMenuClose = () => {
      setMobileMoreAnchorEl(null);
    };

    const handleMenuClose = () => {
      setAnchorEl(null);
      handleMobileMenuClose();
    };

    const handleMobileMenuOpen = (event) => {
      setMobileMoreAnchorEl(event.currentTarget);
    };

    const menuId = "primary-search-account-menu";
    const renderMenu = (
        <Menu
            anchorEl={anchorEl}
            anchorOrigin={{
                vertical: "top",
                horizontal: "right"
            }}
            id={menuId}
            keepMounted
            transformOrigin={{
            	vertical: "top",
                horizontal: "right"
            }}
            open={isMenuOpen}
            onClose={handleMenuClose}
        >
        	<MenuItem onClick={handleMenuClose}>Profile</MenuItem>
        	<MenuItem onClick={handleMenuClose}>My account</MenuItem>
        	<MenuItem onClick={handleMenuClose}>Logout</MenuItem>
      	</Menu>
    );
  
    const mobileMenuId = "primary-search-account-menu-mobile";
    const renderMobileMenu = (
        <Menu
            anchorEl={mobileMoreAnchorEl}
            anchorOrigin={{
              vertical: "top",
              horizontal: "right"
            }}
            id={mobileMenuId}
            keepMounted
            transformOrigin={{
              vertical: "top",
              horizontal: "right"
            }}
            open={isMobileMenuOpen}
            onClose={handleMobileMenuClose}
        > 
            {/* <MenuItem>
              <IconButton size="large" aria-label="show 4 new mails" color="inherit">
                <Badge badgeContent={2} color="error">
                  <MailIcon />
                </Badge>
              </IconButton>
              <p>Messages</p>
            </MenuItem> */}
            
            <MenuItem>
              <IconButton
                size="large"
                aria-label="show 17 new notifications"
                color="inherit"
              >
                <Badge badgeContent={1} color="error">
                    <NotificationsIcon />
                </Badge>
              </IconButton>
              <p>Notifications</p>
            </MenuItem>
            
            <MenuItem onClick={handleProfileMenuOpen}>
                <IconButton
                    size="large"
                    aria-label="account of current user"
                    aria-controls="primary-search-account-menu"
                    aria-haspopup="true"
                    color="inherit"
                >
                    <AccountCircle />
                </IconButton>
                <p>Profile</p>
            </MenuItem>
        </Menu>
    );
  
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="open drawer"
                        sx={{ mr: 1 }}
                    >
                        <MenuIcon />
                    </IconButton>
					<Avatar
                        alt="main-logo"
						src="../images/my_logo.png"
                        sx={{ mr: 2 }}
					/>					
					<Search>
                        <SearchIconWrapper>                            
							<SearchIcon />
                        </SearchIconWrapper>
                        <StyledInputBase
                            placeholder="Search…"
                            inputProps={{ "aria-label": "search" }}
                        />
                    </Search>

                    <Box sx={{ flexGrow: 1}} />
                    <Box sx={{ display: { xs: "none", md: "flex" } }}>
                        
						<Button variant="text" sx={{color: "#fff"}}>
							Lesssons	
						</Button>
						<Button variant="text" sx={{color: "#fff"}}>
							Our team	
						</Button>
						<Button variant="text" sx={{color: "#fff"}}>
							Blog	
						</Button>
						
						{/* <IconButton
                            size="large"
                            aria-label="show 4 new mails"
                            color="inherit"
                    	>
                        	<Badge badgeContent={2} color="error">
								<MailIcon />
                        	</Badge>
                        </IconButton> */}
                        
						<IconButton
                            size="large"
                            aria-label="show 17 new notifications"
                            color="inherit"
                        >
                            <Badge badgeContent={1} color="error">
                                <NotificationsIcon />
                            </Badge>
                        </IconButton>
                        
						<IconButton
                            size="large"
                            edge="end"
                            aria-label="account of current user"
                            aria-controls={menuId}
                            aria-haspopup="true"
                            onClick={handleProfileMenuOpen}
                            color="inherit"
                        >
                            <AccountCircle />
                        </IconButton>
                    </Box>
                    <Box sx={{ display: { xs: "flex", md: "none" } }}>
                        <IconButton
                            size="large"
                            aria-label="show more"
                            aria-controls={mobileMenuId}
                            aria-haspopup="true"
                            onClick={handleMobileMenuOpen}
                            color="inherit"
                        >
                        	<MoreIcon />
                        </IconButton>
                    </Box>
				</Toolbar>
            </AppBar>
            {renderMobileMenu}
            {renderMenu}
            <LessonButtons />
        </Box>
    );
};
