// start slingin' some d3 here.
// var asteroid =
var asteroidCount = 20;
var createAsteroid = function() {
  var x = Math.random() * 800;
  var y = Math.random() * 800;
  var asteroidSize = Math.random() * 50;
  d3.select(".mainSvg").append("circle")
       .attr("cy", y)
       .attr("cx", x)
       .attr("r", asteroidSize)
       .attr("fill", "red")

    // .attr("height", 200)
    // .attr("width", 200)
    // .attr("y", y)
    // .attr("x", x)
    // .attr
    // // .attr("position", "absolute")
    // // .style("background-image", "url('asteroid.png')")
    //  .transform("translate(50, 50)");
}
while(asteroidCount > 0) {
  createAsteroid();
  asteroidCount--;
}

// var update = function(){

  //   .attr();
// };
// d3.select(".mainSvg").selectAll("circle").transition().duration(2000).attr("fill", "blue");
var moveAsteroid = function(){
  var main = document.getElementsByClassName("mainSvg");
  var children = main[0].childNodes;
  var data = [];

  for(var i = 0; i < children.length; i++) {
    var newX = Math.random() * 800;
    var newY = Math.random() * 800;
    data.push({x: newX, y: newY});
  }

  d3.select(".mainSvg").selectAll("circle").data(data).transition().duration(1000).attr("cx", function(d){return d.x})
  .attr("cy", function(d){return d.y});



};

setInterval(moveAsteroid, 1000);
