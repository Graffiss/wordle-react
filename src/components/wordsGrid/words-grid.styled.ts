import styled from "styled-components";

export const TilesWrapper = styled.main`
    display: grid;
    justify-content: center;
    align-content: center;
    flex-grow: 1;
    grid-template-columns: repeat(5, 4em);
    grid-template-rows: repeat(6, 4em);
    gap: 0.25em;
    margin-bottom: 1em;
`;
