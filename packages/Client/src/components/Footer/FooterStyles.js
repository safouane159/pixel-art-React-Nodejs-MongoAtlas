import styled from 'styled-components';

export const Box = styled.div`
background: #22354c;

bottom: 0;
width: 100%;
position: fixed;
left: 0;
    


`;


export const Row = styled.div`
display: grid;
grid-template-columns: repeat(auto-fill,
						minmax(185px, 1fr));
grid-gap: 20px;


`;

