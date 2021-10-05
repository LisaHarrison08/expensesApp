import ReactDOM from 'react-dom';

// we're importing css  from the index.css file
import './index.css';

// we're importing <App />, from the App.js file
import App from './App';

// .render method takes 2 arguments(parameters) the second argument is a default JavaScript DOM API which we're calling on the global object - which is a way to blend JavaScript in browser site

// getElementById method to select a certain DOM HTML element by its Id

// <App /> this SYNTAX is called JSX - App is a compnent which is being rendered in inside the div in HTML in the place of the HTML element with id of root
ReactDOM.render(<App />, document.getElementById('root'));
