import { WORD_LENGTH } from "../../constants/constants";
import LetterTile from "../letter-tile/letter-tile.component";
import { LetterState } from "../letter-tile/lettter-tile.types";
interface WordRowProps {
    word: string;
    result?: LetterState[];
    className?: string;
}

const WordsGrid = ({
    word = "",
    result = [],
    className = "",
}: WordRowProps) => {
    const lettersRemaining = WORD_LENGTH - word.length;
    const letters = word.split("").concat(Array(lettersRemaining).fill(""));

    return (
        <>
            {letters.map((char, index) => (
                <LetterTile key={index} value={char} state={result[index]} />
            ))}
        </>
    );
};

export default WordsGrid;
