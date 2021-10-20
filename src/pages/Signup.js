import React from 'react'
import {Grid, Text, Input, Button} from '../elements';

const Signup = (props) => {
    return (
        <React.Fragment>
            <Grid padding="16px">
        <Text size="36px" bold>
          회원가입
        </Text>

        <Grid padding="16px 0px">
          <Input
            label="아이디"
            placeholder="아이디를 입력해주세요"
            onChange={() => {
              console.log("아이디를 입력했어!");
            }}
          />
        </Grid>

        <Grid padding="16px 0px">
          <Input
            label="닉네임"
            placeholder="닉네임을 입력해주세요"
            onChange={() => {
              console.log("닉네임을 입력했어!");
            }}
          />
        </Grid>

        <Grid padding="16px 0px">
          <Input
            label="비밀번호"
            placeholder="비밀번호를 입력해주세요"
            onChange={() => {
              console.log("비밀번호를 입력했어!");
            }}
          />
        </Grid>

        <Grid padding="16px 0px">
          <Input
            label="비밀번호 확인"
            placeholder="비밀번호를 다시 입력해주세요"
            onChange={() => {
              console.log("비밀번호 확인 입력했어!");
            }}
          />
        </Grid>

        <Button
          text="회원가입하기"
          onClick={() => {
            console.log("로그인했어!");
          }}
        ></Button>
      </Grid>
        </React.Fragment>
    )
}

export default Signup
