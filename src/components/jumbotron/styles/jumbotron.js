import styled from 'styled-components';

export const Inner = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: ${({ direction }) => direction};
    max-width: 1100px;
    margin: auto;
    width: 100%;
    
    @media (max-width: 1000px) {
        flex-direction: column;
    }
`;

export const Item = styled.div`
    display: flex;

`;

export const Container = styled.section``;

// title
export const Title = styled.h1`
    font-size: 3.8em;
    line-height: 1.1;
    margin-bottom: 8px;

    @media (max-width: 600px) {
        font-size: 3em;
    }
`;
// subtitle
export const SubTitle = styled.h2`
    font-size: 2em;
    font-weight: normal;
    line-height: normal;

    @media (max-width: 600px) {
        font-size: 1.8em;
    }
`;
// image
export const Image = styled.img`
    max-width: 100%;
    height: auto;    
`;
