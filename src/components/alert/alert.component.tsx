import React from "react";
import styled from "styled-components";

const AlertWrapper = styled.div`
    position: fixed;
    top: 10vh;
    left: 50vw;
    transform: translateX(-50%);
    z-index: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const Alert = () => {
    return <AlertWrapper data-alert-container />;
};

export default Alert;
