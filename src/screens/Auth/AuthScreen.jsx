import React, { useState } from 'react'
import SmartToyOutlinedIcon from '@mui/icons-material/SmartToyOutlined';
import { Box, Tab, Tabs } from '@mui/material';
import TabPanel from '../../components/TabPanel';
import LoginTab from '../../components/LoginTab';
import RegisterTab from '../../components/RegisterTab';
import styles from "./authScreen.module.css"
import { AuthStyles } from './auth.styles';
import logo from "../../assets/chat_icon.png"

const AuthScreen = () => {
    const [tabValue, setTabValue] = useState(0)
    const handleTabChange = (event, newValue) => {
        setTabValue(newValue);
    };
    return (
       <div className={styles.container}>
          <Box>
          <Box
            flexDirection={"column"}
            display={"flex"}
            width={"50%"}
            marginTop={5}
            justifyContent={"center"}
            alignItems={"center"}
            margin={"auto"}
            mt={"10%"}
            bgcolor={"#fff"}
            >
            <img src={logo} width={64} height={48} alt="logo" style={{ marginTop : "50px" }} />
            <Tabs style={{
                marginTop: "30px"
            }} indicatorColor={null} value={tabValue} onChange={handleTabChange} centered>
                <Tab LinkComponent={"div"} label="Login" style={AuthStyles.loginTab(tabValue)}  />
                <Tab label="Register" style={AuthStyles.registerTab(tabValue)} />
            </Tabs>
            <TabPanel value={tabValue} index={0}>
                <LoginTab />
            </TabPanel>
            <TabPanel value={tabValue} index={1}>
                <RegisterTab />
            </TabPanel>
          </Box>
          </Box>
        </div>
    )
}

export default AuthScreen