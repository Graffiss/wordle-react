import styled from "styled-components";
import { Theme } from "../../theme/theme";

export const Tile = styled.span<{ activeColor?: string }>`
    font-size: 2em;
    color: white;
    border: 0.05em solid ${({ theme }: { theme: Theme }) => theme.tileBorder};
    background-color: ${({ activeColor }) => activeColor};
    text-transform: uppercase;
    font-weight: bold;
    display: flex;
    justify-content: center;
    align-items: center;
    user-select: none;
    transition: transform 250ms linear;
`;
