import styled from 'styled-components';

export const Box = styled.div`
background: #22354c;
position: absolute;
bottom: 0;
width: 100%;

`;


export const Row = styled.div`
display: grid;
grid-template-columns: repeat(auto-fill,
						minmax(185px, 1fr));
grid-gap: 20px;


`;

