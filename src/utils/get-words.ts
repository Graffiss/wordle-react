import words from "../data/words.json";
import dictionary from "../data/dictionary.json";

export const getWord = (): string => {
    return words[Math.floor(Math.random() * words.length)];
};

export const isValidWord = (word: string): boolean => {
    return words.concat(dictionary).includes(word);
};
