var asteroidCount = 20;

//makes asteroids
var createAsteroid = function() {
  var x = Math.random() * 800;
  var y = Math.random() * 800;
  var asteroidSize = Math.random() * 40;
  d3.select(".mainSvg").append("image")
       .attr("y", y)
       .attr("x", x)
       .attr("height", asteroidSize)
       .attr("width", asteroidSize)
       .attr("xlink:href", "asteroid_small.png")
}
//moves asteroids
var moveAsteroid = function(){
  var data = [];
  console.log(asteroidCount);
  for(var i = 0; i < 20; i++) {
    var newX = Math.random() * 800;
    var newY = Math.random() * 800;
    data.push({x: newX, y: newY});
  }

  d3.select(".mainSvg").selectAll("image").data(data).transition().duration(2000).attr("x", function(d){return d.x})
  .attr("y", function(d){return d.y});
};

//here is the player

var player = d3.select(".mainSvg").append("circle")
.attr("cx", 400).attr("cy", 440).attr("fill", "blue")
.attr("r", 40).attr("class", "player");

var drag = d3.behavior.drag()
  .on("dragstart", function(){
    d3.select(".player").attr("fill", "red");
  })
  .on("drag", function(){
      var dragx = d3.event.x;
      var dragy = d3.event.y;
      // d3.select(".player").attr("transform", "translate(" + dragx + "," + dragy + ")");})
      d3.select(".player").attr("cx", dragx).attr("cy", dragy)})
  .on("dragend", function(){
      d3.select(".player").attr("fill", "blue");
  });
d3.selectAll(".player").call(drag)



  // .on("drag", function(d){
  //   var x = d3.event.x;
  //   var y = d3.event.y;
  //   d3.select(".player").attr("transform", "translate(" + x + "," + y + ")");
  // });


var i = asteroidCount;
while(i > 0) {
  createAsteroid();
  i--;
}
setInterval(moveAsteroid, 2000);
