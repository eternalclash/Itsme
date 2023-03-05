import React from 'react';
import styled from 'styled-components';
const Arrow = () => {
    return (
        <FlexContainer>
            <Graph>
            <RedGraph/>
           
            </Graph>

            <div></div>
        </FlexContainer>
    );
};

const FlexContainer = styled.div`
  display:flex;
  width:100%;
  height:120vh;
  justify-content: space-between;
  align-items:center;
  transform:rotate(60deg);
`
const Graph = styled.div`
  width:50%;
  display:flex;
  height:120vh;
  justify-content: flex-end;
`
const RedGraph = styled.div`
  width:5%;
  background-color: red;
  height:120vh;
`
const TextWrapper = styled.div`

`
export default Arrow;
