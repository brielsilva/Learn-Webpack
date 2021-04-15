const ReactDOM = require('react-dom');
const React = require('react');

const Title = require('./app');

ReactDOM.render(
    React.createElement(Title),
    document.querySelector('[data-js="app"]')
);
console.log('Gelo');
console.log('Gelo');