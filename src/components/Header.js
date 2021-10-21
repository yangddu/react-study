import React from "react";
import { Grid, Text, Button } from "../elements";

import { getCookie, deleteCookie } from '../shared/Cookie';

const Header = (props) => {
  const [is_login, setIsLogin] = React.useState(false);

  React.useEffect(() => {
      
    let cookie = getCookie("user_id");
    if(cookie) {
        setIsLogin(true)
    }else {
        setIsLogin(false)
    }
  }, [])

  if (is_login) {
    return (
      <React.Fragment>
        <Grid is_flex padding="16px">
          <Grid>
            <Text margin="0px" size="24px" bold>
              logo
            </Text>
          </Grid>

          <Grid is_flex>
            <Button text="info"></Button>
            <Button text="notice"></Button>
            <Button text="logout" onClick={() => {
                deleteCookie("user_id");
            }}></Button>
          </Grid>
        </Grid>
      </React.Fragment>
    );
  } 
    return (
      <React.Fragment>
        <Grid is_flex padding="16px">
          <Grid>
            <Text margin="0px" size="24px" bold>
              logo
            </Text>
          </Grid>

          <Grid is_flex width="50%">
            <Button text="login"></Button>
            <Button text="signup"></Button>
          </Grid>
        </Grid>
      </React.Fragment>
    );
  
};

export default Header;
