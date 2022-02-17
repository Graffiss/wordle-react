export enum LetterState {
    Miss = "#3a3a3c",
    Present = "#b59f3a",
    Match = "#538e4e",
}

export interface KeyboardProps {
    onClick: (key: string) => void;
}
