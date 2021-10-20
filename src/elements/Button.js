import React from 'react';
import styled from 'styled-components';

const Button = (props) => {
    const { onClick, width, bg, text, } = props;
    const styles = {
        width: width,
        bg: bg,
        text: text,
    }
    return(
        <React.Fragment>
            <ElButton {...styles} onClick={onClick}>{text}</ElButton>
        </React.Fragment>
    )
}
Button.defaultProps = {
    onClick: () => {},
    width: '100%',
    bg: false,
    text: '텍스트',
}
const ElButton = styled.button`
    width: 100%;
    background-color: #212121;
    color: #fff;
    padding: 12px 0;
    box-sizing: border-box;
    border: none;
`
export default Button;