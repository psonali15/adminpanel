import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import UserList from '../Pages/UserList';
import {BrowserRouter as Router, Link, Route} from 'react-router-dom';
import {
  Dashboard,
  Category,
  Phonelink,
  ShoppingCart,
  Settings,
  PowerSettingsNew
} from '@material-ui/icons';


const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerContainer: {
    overflow: 'auto',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));

export default function ClippedDrawer() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
        
          <Typography variant="h6" noWrap>
            Admin Panel
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <Toolbar />
        <div className={classes.drawerContainer}>
          <List>
              <ListItem button>
                <ListItemIcon><Dashboard/>
                  </ListItemIcon>
                <Link exact to="/dashboard"><ListItemText primary="Dashboard" /></Link>
              </ListItem>
              <ListItem button>
                <ListItemIcon><Category/>
                  </ListItemIcon>
                <Link exact to="/users"><ListItemText primary="User List" /></Link>
              </ListItem>
              <ListItem button>
                <ListItemIcon><Phonelink/>
                  </ListItemIcon>
                <ListItemText primary="Assigned Paper" />
              </ListItem>
              <ListItem button>
                <ListItemIcon><ShoppingCart/>
                  </ListItemIcon>
                <ListItemText primary="Help" />
              </ListItem>
              <ListItem button>
                <ListItemIcon><Settings/>
                  </ListItemIcon>
                <ListItemText primary="Settings" />
              </ListItem>
              <Divider />
              <ListItem button>
                <ListItemIcon><PowerSettingsNew/>
                  </ListItemIcon>
                <ListItemText primary="Logout" />
              </ListItem>
          </List>
          <Divider />
         
        </div>
      </Drawer>
      <main className={classes.content}>
        <Toolbar />
        <Typography>
          <UserList />
        </Typography>
        
      </main>
    </div>
  );
}

