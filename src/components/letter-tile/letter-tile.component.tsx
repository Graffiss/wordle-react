import { Tile } from "./letter-tile.styled";
import { LetterState } from "./lettter-tile.types";

interface CharacterBoxProps {
    value?: string;
    state?: LetterState;
}

const characterStateStyles = {
    [LetterState.Miss]: "#3a3a3c",
    [LetterState.Present]: "#b59f3b",
    [LetterState.Match]: "#538e4e",
};

const LetterTile = ({ value, state }: CharacterBoxProps) => {
    const stateStyles =
        state == null ? "#121213" : `${characterStateStyles[state]}`;

    return <Tile activeColor={stateStyles}>{value}</Tile>;
};

export default LetterTile;
