import React from "react";
import styled from "styled-components";
import { Theme } from "../../theme/theme";

const TilesWrapper = styled.div`
    display: grid;
    justify-content: center;
    align-content: center;
    flex-grow: 1;
    grid-template-columns: repeat(5, 4em);
    grid-template-rows: repeat(6, 4em);
    gap: 0.25em;
    margin-bottom: 1em;
`;

const Tile = styled.div`
    font-size: 2em;
    color: white;
    border: 0.05em solid ${({ theme }: { theme: Theme }) => theme.tileBorder};
    text-transform: uppercase;
    font-weight: bold;
    display: flex;
    justify-content: center;
    align-items: center;
    user-select: none;
    transition: transform 250ms linear;
`;

const TILES_COUNT = 30;

const generateTiles = (tiles: number) => {
    const tilesArray: number[] = [];
    for (let i = 0; i < tiles; i++) {
        tilesArray.push(i);
    }
    return tilesArray;
};

const WordsGrid = () => {
    return (
        <TilesWrapper>
            {generateTiles(TILES_COUNT).map((tile) => (
                <Tile key={tile} />
            ))}
        </TilesWrapper>
    );
};

export default WordsGrid;
