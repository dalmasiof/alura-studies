import React from 'react';
import { Button } from './components/Botao';
import Form from './components/Form';
import List from './components/List';

function App() {

  return (
    <div className="App">
       <h1>HELLO WORLD IN REACT ON  TS!!</h1>
       <div>
          <Button/>
       </div>
       <div>
        <Form></Form>
       </div>
       <div>
        <List></List>
       </div>
    </div>
  );
}

export default App;
