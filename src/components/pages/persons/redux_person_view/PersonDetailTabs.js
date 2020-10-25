import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import PersonDetailSingleBlock from "./PersonDetailSingleBlock";
import {tab_titles} from "./PersonDetailConstTableTitles";
import {connect} from "react-redux";

function TabPanel(props) {
  const { children, value, index, ...other } = props;
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`wrapped-tabpanel-${index}`}
      aria-labelledby={`wrapped-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography component={'div'}>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `wrapped-tab-${index}`,
    'aria-controls': `wrapped-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
}));


const mapStateToProps = state => ({
    person_details: state.person_details.person_details,

});



export default connect(mapStateToProps)(function TabsWrappedLabel(props) {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Tabs value={value} onChange={handleChange} aria-label="simple tabs" variant="fullWidth">
          {Object.entries(props.data).map(([key, value], index) => {
            return (<Tab key={key} label={tab_titles[key]} {...a11yProps({index})} />)
          })
          }
        </Tabs>
      </AppBar>
      { Object.entries(props.data).map(([key, dataValue], index) => {
                        return (
                            <>
                                <TabPanel value={value} index={index}>
                                  <PersonDetailSingleBlock key={ key } keyName={ key } data={ dataValue }/>
                                </TabPanel>
                            </>)
        })
      }
    </div>
  );
})
