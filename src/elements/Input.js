import React from 'react';
import styled from 'styled-components';

import {Text, Grid} from '../elements';

const Input = (props) => {
    const { label, placeholder, onChange, } = props;
    
    return(
        <React.Fragment>
            <Text margin="0px">{label}</Text>
            <ElInput placeholder={placeholder} onChange={onChange}/>
        </React.Fragment>
    )
}
Input.defaultProps = {
    label: '텍스트',
    placeholder: "텍스트를 입력해주세요",
    onChange: () => {},
    width: '100%',
    bg: false,
}

const ElInput = styled.input`
    border: 1px solid #212121;
    width: 100%;
    padding: 12px 4px;
    box-sizing: border-box;
    bg: ${(props) => props.bg};
    height: 40px;
`
export default Input;