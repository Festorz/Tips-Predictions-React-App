import { Box, Button, Container, IconButton, Menu, MenuItem, Typography } from '@material-ui/core/';
import { React, useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import * as api from '../../api';
import tips from '../../data/images/tips-predictions.webp';
import useStyles, { FullScreen, SmallScreenBox, SmallScreenToolbar, StyledAppbar, StyledFullButtonBox, StyledHeader, StyledLogo, StyledMenu, StyledMenuItem, StyledToolbar } from './navbar-styled';
import { pages } from './pages';


const Navbar = () => {
    const classes = useStyles();
    const [anchorElNav, setAnchorElNav] = useState(null);
    const [anchorElJackpots, setAnchorJackpots] = useState(null);
    const [anchorElPredictions, setAnchorPredictions] = useState(null);

    const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')))
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        const token = user?.exp
        const mtoken = user?.token
        // const tk = decode(mtoken)
        console.log(`decoded token is ${mtoken}`)
        const date = new Date();
        if (token) {
            var exp = new Date(token);
            exp.toISOString().substring(0, 10)
            // console.log(`Datetime is ${date}`)
            // console.log(`Expiry date is ${token}`)
            // console.log(`logout time is ${exp}`)
            if (date >= exp) {
                logout();
                localStorage.clear()
            }

        }
        setUser(JSON.parse(localStorage.getItem('profile')))

    }, [location])


    const logout = async () => {
        const token = user?.token
        try {
            await api.signout(token)
            localStorage.clear()
            navigate('/login')

        } catch (error) {
            console.log(error);
        }
    }


    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };


    const handleOpenPagesMenu = (id) => (event) => {
        if (id === 2) {
            setAnchorJackpots(event.currentTarget);
        }
        else if (id === 3) {

            setAnchorPredictions(event.currentTarget);
        }
    };
    const handleCloseJackpotsMenu = () => {
        setAnchorJackpots(null);

    };
    const handleClosePredictionsMenu = () => {
        setAnchorPredictions(null);

    };


    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    return (
        <>
            <StyledAppbar>
                <Container maxWidth="xl">
                    <StyledToolbar disableGutters>
                        <StyledLogo
                            component="img"
                            src={tips}
                            alt='Tips-predictions'
                        />
                        <StyledHeader component={Link} to='/'
                            variant="h1"
                        >Tips Predictions
                        </StyledHeader>

                        <SmallScreenBox>
                            <IconButton
                                size="large"
                                aria-label="account of current user"
                                aria-controls="menu-appbar"
                                aria-haspopup="true"
                                onClick={handleOpenNavMenu}>
                                <StyledMenu />
                            </IconButton>
                            <Menu
                                id="menu-appbar"
                                anchorEl={anchorElNav}
                                anchorOrigin={{
                                    vertical: 'bottom',
                                    horizontal: 'left',
                                }}
                                keepMounted
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'left',
                                }}
                                open={Boolean(anchorElNav)}
                                onClose={handleCloseNavMenu}
                            >
                                {pages.map((page) => (
                                    <>
                                        {page.mobile && (
                                            <MenuItem key={page.id} component={Link} to={page.route} onClick={handleCloseNavMenu}>
                                                <Typography >{page.label}</Typography>
                                            </MenuItem>
                                        )}
                                    </>
                                ))}
                            </Menu>
                        </SmallScreenBox>


                        <FullScreen>
                            {pages.map((page) => (
                                <Button
                                    component={Link}
                                    to={page.route}
                                    variant='contained'
                                    key={page.id}
                                    onClick={
                                        page.dropDown ?
                                            handleOpenPagesMenu(page.id)

                                            :
                                            handleCloseNavMenu
                                    }
                                    className={classes.BoxItems}
                                >
                                    {page.label}
                                </Button>
                            ))}
                            <Menu
                                className={classes.menu}
                                id="menu-appbar"
                                anchorEl={anchorElJackpots}
                                anchorOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}

                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                open={Boolean(anchorElJackpots)}
                                onClose={handleCloseJackpotsMenu}
                            >
                                {pages.map((page) => (
                                    <>
                                        {page.id === 2 && (
                                            <>
                                                {page.dropDown.map((page) => (

                                                    <StyledMenuItem key={page.id} component={Link} to={page.route} onClick={handleCloseJackpotsMenu}>
                                                        <Typography> {page.label}</Typography>
                                                    </StyledMenuItem>
                                                ))}
                                            </>
                                        )}
                                    </>
                                ))}
                            </Menu>
                            <Menu
                                className={classes.menu}
                                id="menu-appbar"
                                anchorEl={anchorElPredictions}
                                anchorOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                keepMounted
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                open={Boolean(anchorElPredictions)}
                                onClose={handleClosePredictionsMenu}
                            >
                                {pages.map((page) => (
                                    <>
                                        {page.id === 3 && (
                                            <>
                                                {page.dropDown.map((page) => (

                                                    <MenuItem key={page.id} component={Link} to={page.route} onClick={handleClosePredictionsMenu}>
                                                        <Typography>{page.label}</Typography>
                                                    </MenuItem>
                                                ))}
                                            </>
                                        )}
                                    </>
                                ))}
                            </Menu>

                        </FullScreen>
                        <StyledFullButtonBox>
                            {user ?
                                <Button variant='contained' onClick={logout} className={classes.usermenu}>Logout</Button>
                                :
                                <Button component={Link} to='/login' variant='contained' className={classes.usermenu}>Login</Button>
                            }
                        </StyledFullButtonBox>


                    </StyledToolbar>

                    <SmallScreenToolbar disableGutters>
                        <Box>
                            {pages.map((page) => (
                                <>
                                    {!page.mobile && (
                                        <>
                                            {page.id !== 3 ?
                                                <Button variant='contained'
                                                    component={Link} to={page.route}
                                                    key={page.id}
                                                    onClick={page.dropDown ?
                                                        handleOpenPagesMenu(page.id)

                                                        :
                                                        handleCloseNavMenu}
                                                    className={classes.BoxItems}
                                                >
                                                    {page.label}
                                                </Button>

                                                : page.dropDown.map((page) => (
                                                    <Button variant='contained'
                                                        component={Link} to={page.route}
                                                        key={page.id}
                                                        onClick={
                                                            handleCloseNavMenu}
                                                        className={classes.BoxItems}

                                                    >
                                                        {page.label}
                                                    </Button>
                                                ))
                                            }
                                        </>
                                    )}

                                </>
                            )

                            )}
                            {user ?
                                <Button variant='contained' onClick={logout} className={classes.usermenu}>Logout</Button>
                                :
                                <Button variant='contained' component={Link} to='/login' className={classes.usermenu}>Login</Button>
                            }

                            <Menu
                                className={classes.menu}
                                id="menu-appbar"
                                anchorEl={anchorElJackpots}
                                anchorOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}

                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                open={Boolean(anchorElJackpots)}
                                onClose={handleCloseJackpotsMenu}
                            >
                                {pages.map((page) => (
                                    <>
                                        {page.id === 2 && (
                                            <>
                                                {page.dropDown.map((page) => (

                                                    <MenuItem key={page.id} component={Link} to={page.route} onClick={handleCloseJackpotsMenu}>
                                                        <Typography>{page.label}</Typography>
                                                    </MenuItem>
                                                ))}
                                            </>
                                        )}
                                    </>
                                ))}
                            </Menu>
                            <Menu
                                className={classes.menu}
                                id="menu-appbar"
                                anchorEl={anchorElPredictions}
                                anchorOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                keepMounted
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                open={Boolean(anchorElPredictions)}
                                onClose={handleClosePredictionsMenu}
                            >
                                {pages.map((page) => (
                                    <>
                                        {page.id === 3 && (
                                            <>
                                                {page.dropDown.map((page) => (

                                                    <MenuItem key={page.id} component={Link} to={page.route} onClick={handleClosePredictionsMenu}>
                                                        <Typography>{page.label}</Typography>
                                                    </MenuItem>
                                                ))}
                                            </>
                                        )}
                                    </>
                                ))}
                            </Menu>
                        </Box>
                    </SmallScreenToolbar>
                </Container>
            </StyledAppbar>
            {/* <ResponsiveDrawer/> */}
        </>

    );


}

export default Navbar;
