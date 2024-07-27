

var React = require('react');
var ReactDOM = require('react-dom');
var Application = require('./components/Application.react');

ReactDOM.render(<Application />, document.getElementById('react-application'))



// var listItemElement1 = React.DOM.li({className: 'item-1', key: 'item-1'}, 'Item 1');
// var listItemElement2 = React.DOM.li({className: 'item-2', key: 'item-2'}, 'Item 2');
// var listItemElement3 = React.DOM.li({className: 'item-3', key: 'item-3'}, 'Item 3');
//
// var reactFragment = [ listItemElement1, listItemElement2, listItemElement3 ];
// var listOfItems = React.DOM.ul({ className: 'list-of-items' }, reactFragment );
//
// ReactDOM.render(listOfItems, document.getElementById('react-application'));


// var createListItemElement = React.createFactory('li');
//
// var listItemElement1 = createListItemElement( { className: 'item-1', key: 'item-1'},
//     'Item 1');
// var listItemElement2 = createListItemElement( { className: 'item-2', key: 'item-2'},
//     'Item 2');
// var listItemElement3 = createListItemElement( { className: 'item-3', key: 'item-3'},
//     'Item 3');
//
// var reactFragment = [ listItemElement1, listItemElement2, listItemElement3];
// var listOfItems = React.createElement('ul', { className: 'list-of-items' }, reactFragment);
//
// ReactDOM.render(listOfItems, document.getElementById('react-application'));



// var h1 = React.createElement('h1', { className: 'header' },
//     'This is React');
// var p = React.createElement('p', { className: 'content', key: 'content'},
//     "And that's how it works.");
// var reactFragment = [h1, p];
// var section = React.createElement('section', { className: 'container'}, reactFragment);
//
//
// var listItemElement1 = React.createElement('li', { className: 'item-1', key: 'Item 1' },
//     'Item 1');
// var listItemElement2 = React.createElement('li', { className: 'item-2', key: 'Item 2' },
//     'Item 2');
// var listItemElement3 = React.createElement('li', { className: 'item-3', key: 'item-3' },
//     'Item 3');
//
// var reactFragment = [ listItemElement1, listItemElement2, listItemElement3 ];
// var listOfItems = React.createElement('ul', { className: 'list-of-items' }, reactFragment);
//
//
// ReactDOM.render(listOfItems, document.getElementById('react-application'));

