import React from 'react';
import Chatbot from 'react-chatbot-kit';
import 'react-chatbot-kit/build/main.css';

import ActionProvider from './bot/ActionProvider';
import config from './bot/config';
import MessageParser from './bot/MessageParser';

import './App.css';

function App() {
  return (
    <div className="App">
      <div style={{ maxWidth: "500px" }}>
      <Chatbot 
      config={config}
      messageParser={MessageParser}
      actionProvider={ActionProvider}
      />
      </div>
    </div>
  );
}

export default App;
