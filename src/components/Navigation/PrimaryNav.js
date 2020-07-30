import React from 'react';
import { Link } from 'react-router-dom';
import PermContactCalendarIcon from '@material-ui/icons/PermContactCalendar';
import Speed from "@material-ui/icons/Speed";
import DriveEta from "@material-ui/icons/DriveEta";
import Feedback from "@material-ui/icons/Feedback";
import AttachMoney from "@material-ui/icons/AttachMoney";
import Assessment from "@material-ui/icons/Assessment";
import NavItem from './NavItem';



import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import Divider from '@material-ui/core/Divider'
import Collapse from '@material-ui/core/Collapse'
import { makeStyles } from "@material-ui/core/styles";
import IconExpandLess from '@material-ui/icons/ExpandLess'
import IconExpandMore from '@material-ui/icons/ExpandMore'



const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex"
  },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    height: "100vh",
    overflow: "auto",
    width: "100%",
    backgroundColor: 'rgba(0, 0, 0, 0.04)'
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
    height: "100%",
  },
}));

const PrimaryNav = () => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false)

  function handleClick() {
    setOpen(!open)
  }
  return (
    <div>
      <NavItem route="/" name="Dashboard" Icon={Speed} />
      {/* <NavItem route="/vehicles" name="Vehicles" Icon={DriveEta} /> */}
      <List component="nav" className={classes.appMenu} disablePadding>
        <ListItem button className={classes.menuItem} onClick={handleClick}>
          <ListItemIcon className={classes.menuItemIcon}>
            <DriveEta />
          </ListItemIcon>
          <ListItemText primary="Vehicles" />
          {open ? <IconExpandLess /> : <IconExpandMore />}
        </ListItem>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Divider />
            <List component="div" disablePadding>
            <Link to="/vehicleAllotment">
              <ListItem button className={classes.menuItem}>
                <ListItemText inset primary="Vehicle Allocation" />
              </ListItem>
            </Link>
            <Link to="/vehicleAssignment">
              <ListItem button className={classes.menuItem}>
                <ListItemText inset primary="Vehicle Assignment" />
              </ListItem>
            </Link>
            </List>
          </Collapse>
      </List>
      <NavItem route="/servicerequests" name="Service Requests" Icon={Feedback} />
      <NavItem route="/expenses" name="Expenses" Icon={AttachMoney} />
      <NavItem route="/drivers" name="Drivers" Icon={PermContactCalendarIcon} />
      <NavItem route="/reports" name="Reports" Icon={Assessment} />
      


    </div>
  )
};

export default PrimaryNav;
