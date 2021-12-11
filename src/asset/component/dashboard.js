import * as React from 'react';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import SendIcon from '@mui/icons-material/Send';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import StarBorder from '@mui/icons-material/StarBorder';
import DashboardIcon from '@mui/icons-material/Dashboard';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';import DynamicFormIcon from '@mui/icons-material/DynamicForm';
import BackupTableIcon from '@mui/icons-material/BackupTable';
import TableChartIcon from '@mui/icons-material/TableChart';
import TableRowsIcon from '@mui/icons-material/TableRows';
import TocIcon from '@mui/icons-material/Toc';
import AddLocationIcon from '@mui/icons-material/AddLocation';
import WidgetsIcon from '@mui/icons-material/Widgets';
import BarChartIcon from '@mui/icons-material/BarChart';
import EventIcon from '@mui/icons-material/Event';
import { Avatar } from '@mui/material';
import { AccountSetting } from "./form"
import { PaitentChart } from "./chart"
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import { Container } from '@mui/material';


export function NestedList() {
  
  const linkStyles = {
    textDecoration: "none",
    color: "theme.palette.text.primary"
  }

  const [open, setOpen] = React.useState(true);
  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <Router>
      <div style={{ display: 'flex' }}>
        <List 
      position="fix"
      sx={{ maxHeight: "100vh", width: '100%', maxWidth: 400, color: "text.primary " }}
    >
      <ListItemButton>
        <ListItemIcon>
          <SendIcon />
        </ListItemIcon>
        <ListItemText primary="CREATIVE TIM" />
      </ListItemButton>
      <ListItemButton sx={{borderTop: "2px solid black", borderBottom: "2px solid black"}}>
      <Avatar
  sx={{marginRight: "10px"}}
  alt="Remy Sharp"
>
  
</Avatar>
        <ListItemText primary="Tiania Andrew" />
      </ListItemButton>
      <ListItemButton>
        <ListItemIcon>
          <DashboardIcon />
        </ListItemIcon>
        <ListItemText primary="Dashboard" />
      </ListItemButton>
      <ListItemButton onClick={handleClick}>
        <ListItemIcon>
        <BackupTableIcon />
        </ListItemIcon>
        <ListItemText primary="Tables" />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon>
              <StarBorder />
            </ListItemIcon>
            <ListItemText primary="Chart" />
          </ListItemButton>
          </List>
      </Collapse>

      <Link to="/profile" sx={{...linkStyles}}>
        <ListItemButton>
          <ListItemIcon>
            <ManageAccountsIcon />
          </ListItemIcon>
          <ListItemText primary="Profile" />
        </ListItemButton>
      </Link>
      
      <Link to="/about">
      <ListItemButton>
        <ListItemIcon>
          <TableChartIcon />
        </ListItemIcon>
        <ListItemText primary="Regular Tables" />
      </ListItemButton>
      </Link>
      <ListItemButton>
        <ListItemIcon>
          <TableRowsIcon />
        </ListItemIcon>
        <ListItemText primary="Extends Tables" />
      </ListItemButton>
      <ListItemButton>
        <ListItemIcon>
          <TocIcon />
        </ListItemIcon>
        <ListItemText primary="React Table" />
      </ListItemButton>
      <ListItemButton>
        <ListItemIcon>
          <AddLocationIcon />
        </ListItemIcon>
        <ListItemText primary="Map" />
      </ListItemButton>
      <ListItemButton>
        <ListItemIcon>
          <WidgetsIcon />
        </ListItemIcon>
        <ListItemText primary="Widget" />
      </ListItemButton>
      <ListItemButton>
        <ListItemIcon>
          <BarChartIcon />
        </ListItemIcon>
        <ListItemText primary="Chart" />
      </ListItemButton>
      <ListItemButton>
        <ListItemIcon>
          <EventIcon />
        </ListItemIcon>
        <ListItemText primary="Calendar" />
      </ListItemButton>
    </List>

    <Switch>
          <Route exact path="/profile">
            <Container>
              <AccountSetting />
            </Container>
          </Route>
          <Route exact path="/about">
            <Container>
              <PaitentChart />
            </Container>
          </Route>
        </Switch>
        </div>
    </Router>
    
  );
}
 

