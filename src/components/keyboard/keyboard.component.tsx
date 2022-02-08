import React from "react";
import styled from "styled-components";
import { KEYBOARD_LETTERS } from "./keyboard.const";

const KeyboardWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(20, minmax(auto, 1.25em));
    grid-auto-rows: 3em;
    gap: 0.25em;
    justify-content: center;
    margin-top: 5em;
`;

const Key = styled.button`
    font-size: inherit;
    grid-column: span 2;
    border: none;
    padding: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: hsl(
        var(--hue, 200),
        var(--saturation, 1%),
        calc(var(--lightness-offset, 0%) + var(--lightness, 51%))
    );
    color: white;
    fill: white;
    text-transform: uppercase;
    border-radius: 0.25em;
    cursor: pointer;
    user-select: none;
`;

const LargeKey = styled(Key)`
    grid-column: span 3;
`;

const DeleteButton = styled(LargeKey)``;

const Keyboard = () => {
    return (
        <KeyboardWrapper data-keyboard>
            {KEYBOARD_LETTERS.map((keyboard, index) =>
                keyboard === "Enter" ? (
                    <LargeKey key={index} data-key={keyboard}>
                        {keyboard}
                    </LargeKey>
                ) : (
                    keyboard !== "space" && (
                        <Key key={index} data-key={keyboard}>
                            {keyboard}
                        </Key>
                    )
                )
            )}
            <DeleteButton data-delete>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="24"
                    viewBox="0 0 24 24"
                    width="24"
                >
                    <path
                        fill="var(--color-tone-1)"
                        d="M22 3H7c-.69 0-1.23.35-1.59.88L0 12l5.41 8.11c.36.53.9.89 1.59.89h15c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H7.07L2.4 12l4.66-7H22v14zm-11.59-2L14 13.41 17.59 17 19 15.59 15.41 12 19 8.41 17.59 7 14 10.59 10.41 7 9 8.41 12.59 12 9 15.59z"
                    ></path>
                </svg>
            </DeleteButton>
        </KeyboardWrapper>
    );
};

export default Keyboard;
