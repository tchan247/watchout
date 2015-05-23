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
       .attr("class", "asteroid")
       .attr("xlink:href", "asteroid_small.png")
}
//moves asteroids
var moveAsteroid = function(){
  var data = [];
  for(var i = 0; i < 20; i++) {
    var newX = Math.random() * 800;
    var newY = Math.random() * 800;
    data.push({x: newX, y: newY});
  }

  d3.select(".mainSvg").selectAll(".asteroid").data(data).transition().duration(2000).attr("x", function(d){return d.x})
  .attr("y", function(d){return d.y});
};

//here is the player

var player = d3.select(".mainSvg").append("circle")
.attr("cx", 400).attr("cy", 440).attr("fill", "blue")
.attr("r", 20).attr("class", "player");

var drag = d3.behavior.drag()
  .on("dragstart", function(){
    d3.select(".player").attr("fill", "green");
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

var checkCollision = function(){
  var colX = d3.select(".player").attr("cx");
  var colY = d3.select(".player").attr("cy");
  var playerR = (d3.select(".player").attr("r"))/2;
  var asteroids = d3.selectAll(".asteroid");
   for(var i = 0; i < asteroids[0].length; i++){
     var astX = asteroids[0][i].x.baseVal.value;
     var astY = asteroids[0][i].y.baseVal.value;
     var astR = (asteroids[0][i].height.baseVal.value)/2;
     var distance = Math.sqrt(Math.pow((astX - colX),2) + Math.pow((astY - colY),2));
     if((astR + playerR) > distance ){
       console.log('you are dead');
     }
     // if(astY === colY && astX == colX){

     // }
     // console.log(asteroids[0]);
     // console.log(playerR);

   }

};

var i = asteroidCount;
while(i > 0) {
  createAsteroid();
  i--;
}
 setInterval(checkCollision, 10);
setInterval(moveAsteroid, 2000);
