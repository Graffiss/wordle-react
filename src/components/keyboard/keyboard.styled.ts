import styled from "styled-components";

export const KeyboardWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(20, minmax(auto, 1.25em));
    grid-auto-rows: 3em;
    gap: 0.25em;
    justify-content: center;
    margin-top: 5em;
`;

export const Key = styled.button<{ activeColor?: string }>`
    font-size: inherit;
    grid-column: span 2;
    border: none;
    padding: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${({ activeColor }) =>
        activeColor ? activeColor : "#818384"};
    color: white;
    fill: white;
    text-transform: uppercase;
    border-radius: 0.25em;
    cursor: pointer;
    user-select: none;
`;

export const LargeKey = styled(Key)`
    grid-column: span 3;
`;

export const InvisibleKey = styled(Key)`
    grid-column: span 1;
    background-color: transparent;
`;

export const DeleteButton = styled(LargeKey)``;
