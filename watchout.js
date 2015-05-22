// start slingin' some d3 here.
// var asteroid =
var asteroidCount = 10;
var createAsteroid = function() {
  var x = Math.random() * 800;
  var y = Math.random() * 800;
  d3.select(".mainSvg").append("circle")
       .attr("cy", y)
       .attr("cx", x)
       .attr("r", 50)
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
