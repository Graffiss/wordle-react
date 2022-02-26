import { Tile } from "./letter-tile.styled";
import { LetterState } from "./lettter-tile.types";

interface CharacterBoxProps {
    value?: string;
    state?: LetterState;
}

const characterStateStyles = {
    [LetterState.Miss]: "border-gray-500 bg-gray-500",
    [LetterState.Present]: "border-yellow-500 bg-yellow-500",
    [LetterState.Match]: "border-green-500 bg-green-500",
};

const LetterTile = ({ value, state }: CharacterBoxProps) => {
    const stateStyles =
        state == null
            ? "border-gray-500 text-black"
            : `${characterStateStyles[state]} text-white`;

    return <Tile>{value}</Tile>;
};

export default LetterTile;
