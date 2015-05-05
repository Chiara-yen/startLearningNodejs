var jsdom = require('jsdom');
var h = require('virtual-dom/h');
var diff = require('virtual-dom/diff');
var patch = require('virtual-dom/patch');
var createElement = require('virtual-dom/create-element');



jsdom.env(
  '<html><head></head><body></body></html>',
  function (err, window) {
    // 1: Create a function that declares what the DOM should look like
    function render(count)  {
        return h('div', {
            style: {
                textAlign: 'center',
                lineHeight: (100 + count) + 'px',
                border: '1px solid red',
                width: (100 + count) + 'px',
                height: (100 + count) + 'px'
            }
        }, [String(count)]);
    }

    // 2: Initialise the document
    var count = 0;      // We need some app data. Here we just store a count.

    var tree = render(count);               // We need an initial tree
    console.log('oldTree:\n', tree);

    var rootNode = createElement(tree);     // Create an initial root DOM node ...
    window.document.body.appendChild(rootNode);    // ... and it should be in the document

    // 3: Wire up the update logic
    count++;

    var newTree = render(count);
    console.log('newTree:\n', newTree);

    var patches = diff(tree, newTree);
    console.log('diff:\n', patches);

    rootNode = patch(rootNode, patches);

    tree = newTree;


    process.exit();
  }


);
