import React from "react";
import { Text, Input, Grid, Button } from "../elements";
import { setCookie } from "../shared/Cookie";

import {useDispatch} from 'react-redux';
import {actionCreators as userActions} from '../redux/modules/user';

const Login = (props) => {

    const dispatch = useDispatch();

  const login = () => {
    dispatch(userActions.logIn({user_name: 'cherry'}));
  };

  const [id, setId] = React.useState('');
  const [pwd, setPwd] = React.useState('');

  const changeId = (e) => {
    setId(e.target.value);
  }

  const changePwd = (e) => {
    setPwd(e.target.value);
  }

  return (
    <React.Fragment>
      <Grid padding="16px">
        <Text size="36px" bold>
          로그인
        </Text>

        <Grid padding="16px 0px">
          <Input
            label="아이디"
            placeholder="아이디를 입력해주세요"
            onChange={changeId}
          />
        </Grid>

        <Grid padding="16px 0px">
          <Input
            label="패스워드"
            placeholder="패스워드를 입력해주세요"
            onChange={changePwd}
          />
        </Grid>

        <Button
          text="로그인하기"
          onClick={login()}
        ></Button>
      </Grid>
    </React.Fragment>
  );
};

export default Login;
