import styled from "styled-components";
import { Theme } from "../../theme/theme";

export const Tile = styled.span`
    font-size: 2em;
    color: white;
    border: 0.05em solid ${({ theme }: { theme: Theme }) => theme.tileBorder};
    background-color: ${({ theme }: { theme: Theme }) => theme.word};
    text-transform: uppercase;
    font-weight: bold;
    display: flex;
    justify-content: center;
    align-items: center;
    user-select: none;
    transition: transform 250ms linear;
`;
