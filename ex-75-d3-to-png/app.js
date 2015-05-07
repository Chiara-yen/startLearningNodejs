var jsdom = require('jsdom');
var canvg = require('canvg');
var fs = require('fs');

jsdom.env(
 '<html><head></head><body></body></html>',
  [ 'http://d3js.org/d3.v3.min.js' ],
  function (err, window) {

    var width = 960,
    height = 500;

    var vertices = window.d3.range(100).map(function(d) {
      return [Math.random() * width, Math.random() * height];
    });

    var voronoi = window.d3.geom.voronoi()
        .clipExtent([[0, 0], [width, height]]);

    var svg = window.d3.select('body').append('svg')
        .attr('width', width)
        .attr('height', height)
        .on('mousemove', function() { vertices[0] = window.d3.mouse(this); redraw(); });

    var path = svg.append('g').selectAll('path');

    svg.selectAll('circle')
        .data(vertices.slice(1))
      .enter().append('circle')
        .attr('transform', function(d) { return 'translate(' + d + ')'; })
        .attr('r', 1.5);

    redraw();

    function redraw() {
      path = path
          .data(voronoi(vertices), polygon);

      path.exit().remove();

      path.enter().append('path')
          .attr('class', function(d, i) { return 'q' + (i % 9) + '-9'; })
          .attr('d', polygon);

      path.order();

      window.d3.selectAll('path').style('stroke', '#fff');
      window.d3.selectAll('path:first-child').style('fill', 'yellow !important');
      window.d3.selectAll('circle').style({
        'fill': '#000'
      });

      window.d3.selectAll('.q0-9').style('fill', 'rgb(197,27,125)');
      window.d3.selectAll('.q1-9').style('fill', 'rgb(222,119,174)');
      window.d3.selectAll('.q2-9').style('fill', 'rgb(241,182,218)');
      window.d3.selectAll('.q3-9').style('fill', 'rgb(253,224,239)');
      window.d3.selectAll('.q4-9').style('fill', 'rgb(247,247,247)');
      window.d3.selectAll('.q5-9').style('fill', 'rgb(230,245,208)');
      window.d3.selectAll('.q6-9').style('fill', 'rgb(184,225,134)');
      window.d3.selectAll('.q7-9').style('fill', 'rgb(127,188,65)');
      window.d3.selectAll('.q8-9').style('fill', 'rgb(77,146,33)');


      var cvs = window.document.querySelector('body').appendChild(window.document.createElement('canvas'));
      var svg = window.document.querySelector('svg');

      console.log('svgHTML:\n', svg.outerHTML);

      canvg(cvs, svg.outerHTML);
      var imgBase64 = cvs.toDataURL().replace(/^[^,]+,/, '');

      console.log('toDataURL:\n', cvs.toDataURL());

      fs.writeFileSync('output.png', new Buffer(imgBase64, 'base64'));
    }

    function polygon(d) {
      return 'M' + d.join('L') + 'Z';
    }

  }
);
