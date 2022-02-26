import React from "react";
import { KEYBOARD_LETTERS } from "../../constants/constants";
import { useAppSelector } from "../../redux/hooks/utils.hook";
import { selectKeyboardLetterState } from "../../redux/reducers/guess.reducer";
import { LetterState } from "../letter-tile/lettter-tile.types";
import {
    KeyboardWrapper,
    LargeKey,
    Key,
    DeleteButton,
} from "./keyboard.styled";
import { KeyboardProps } from "./keyboard.types";

const keyStateStyles = {
    [LetterState.Miss]: "#3a3a3c",
    [LetterState.Present]: "#b59f3b",
    [LetterState.Match]: "#538e4e",
};

const Keyboard = ({ onClick: onClickProps }: KeyboardProps) => {
    const keyboardLetterState = useAppSelector(selectKeyboardLetterState);

    const onClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        const { textContent, innerHTML } = e.currentTarget;

        let returnProps = textContent!;
        if (textContent !== innerHTML) {
            returnProps = "Backspace";
        }

        onClickProps(returnProps);
    };

    return (
        <KeyboardWrapper>
            {console.log("keyStateStyles:", keyStateStyles)}
            {console.log("keyboardLetterState:", keyboardLetterState)}
            {KEYBOARD_LETTERS.map((letter, index) => {
                const letterState = keyStateStyles[keyboardLetterState[letter]];
                console.log(
                    "keyboardLetterState[letter]",
                    keyboardLetterState[letter]
                );
                console.log("letter state:", letterState);
                return letter === "Enter" ? (
                    <LargeKey key={index}>{letter}</LargeKey>
                ) : (
                    letter !== "space" && (
                        <Key
                            key={index}
                            onClick={onClick}
                            activeColor={letterState}
                        >
                            {letter}
                        </Key>
                    )
                );
            })}
            <DeleteButton>
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
