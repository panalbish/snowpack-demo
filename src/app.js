import React from "react"
import ReactDOM from "react-dom"
import styled from "styled-components";

const Button = styled.button`
  background-color: #eac;
  padding: 8px;
  border: 1px solid #ccc;
`;

const Card = styled.div`
  padding: 16px;
  border: 1px solid #eac;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

const App = () => <div style={{display: 'flex', flexDirection: 'column'}}>
    <Card>Card</Card>
    <br/>
    <Button>Click me</Button>
</div>;

ReactDOM.render(<App/>, document.getElementById("app"))
