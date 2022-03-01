import styled from "styled-components";
import { Theme } from "../../theme/theme";
import { Tile } from "../letter-tile/letter-tile.styled";

export const AlertWrapper = styled.div`
    position: fixed;
    top: 30vh;
    left: 50vw;
    transform: translateX(-50%);
    z-index: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #3a3a3c;
    padding: 40px;
    border-radius: 10px;
    border: 0.05em solid ${({ theme }: { theme: Theme }) => theme.tileBorder};
    box-shadow: 0px 2px 15px -3px ${({ theme }: { theme: Theme }) => theme.tileBorder};

    @media (max-width: 480px) {
        padding: 10px;
    }
`;

export const Answer = styled.div`
    display: flex;
    flex-direction: row;
    padding: 20px;

    ${Tile} {
        width: 64px;
        height: 64px;
    }
`;

export const SecondaryHeading = styled.h2`
    color: white;
`;

export const Paragraph = styled.p`
    font-size: 16px;
    color: white;
`;

export const Button = styled.button`
    color: white;
    background-color: #538e4e;
    padding: 20px 10px;
    border-radius: 10px;
    cursor: pointer;
    text-transform: uppercase;
    font-weight: bold;
    border: 1px solid #538e4e;
    margin: 20px 0;

    :hover {
        background-color: transparent;
    }
`;
