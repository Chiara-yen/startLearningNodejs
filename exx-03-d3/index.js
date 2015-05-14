var d3 = require('d3');
var _ = require('lodash');

var width = 800;
var height = 600;

var length = Math.random() * 50;

var dataset = _.map(_.range(50), function (i) {
  return Math.random() * 500;
});

var svg = d3.selectAll('.svg');

// var colorScale = d3.scale.linear()
//     .domain([0, dataset.length])
//     .range([ 'yellow', 'red' ]);
//
var colorScale = d3.scale.category20c()

var divs = svg.selectAll('div')
    .data(dataset)
  .enter().append('div')
  .style({
    'color': 'white',
    'display': 'inline-block',
    'width': function(d, i) {
      return (width / dataset.length) + 'px';
    },
    'height': function(d, i) {
      return (d) + 'px';
    }
  })
  .style('background-color', function(d, i) {
    return d3.hsl((360 / dataset.length) * (i + 1), 1, 0.6);
  })
