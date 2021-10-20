import React from 'react';
import { Grid, Text, Button } from '../elements';

const Header = (props) => {
    return (
        <React.Fragment>
            <Grid is_flex padding="16px">
                <Grid>
                    <Text margin="0px" size="24px" bold>logo</Text>
                </Grid>

                <Grid is_flex width="50%">
                    <Button text="login"></Button>
                    <Button text="signup">Signup</Button>
                </Grid>
            </Grid>

        </React.Fragment>
    )   
}

export default Header;