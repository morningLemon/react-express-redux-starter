console.log('Hello World from main.js!');
import React from 'react';
import ReactDOM from 'react-dom';
import Counter from './components/Counter';
 
document.addEventListener('DOMContentLoaded', function() {
  ReactDOM.render(
    React.createElement(Counter),
    document.getElementById('mount')
  );
});
