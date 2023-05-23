import './App.css';
import styled from "styled-components"
import { Button } from 'Components/Button';
import { Card } from 'Components/Card';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Card title={'Revenue'} amount="5.00" percent={12.3}></Card>
      </header>
    </div >
  );
}

export default App;
