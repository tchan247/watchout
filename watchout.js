var asteroidCount = 20;
var score = 0;
var currentHighScore =0;
var collisions = 0;
var inCollision = false;

//makes asteroids
var createAsteroid = function() {
  var x = Math.random() * 800;
  var y = Math.random() * 800;
  var asteroidSize = 15 + (Math.random() * 25);
  var randImg = function() {
    var imgs = ["asteroid_small.png", "asteroid2.png"];
    return imgs[Math.floor(Math.random() * 2)];
  };

  d3.select(".mainSvg").append("image")
       .attr("y", y)
       .attr("x", x)
       .attr("height", asteroidSize)
       .attr("width", asteroidSize)
       .attr("class", "asteroid")
       .attr("xlink:href", randImg());
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

// var player = d3.select(".mainSvg").append("circle")
// .attr("cx", 400).attr("cy", 440).attr("fill", "blue")
// .attr("r", 20).attr("class", "player");
var player = d3.select(".mainSvg").append("image")
 .attr("x", 400).attr("y", 440)
 .attr("xlink:href", "flying-saucer.png")
 .attr("height", 50).attr("width", 50)
 .attr("class", "player");

var drag = d3.behavior.drag()
  .on("dragstart", function(){
    // d3.select(".player").attr("fill", "green");
  })
  .on("drag", function(){
      var dragx = d3.event.x;
      var dragy = d3.event.y;
      d3.select(".player").attr("x", dragx).attr("y", dragy)})
  .on("dragend", function(){
      d3.select(".player").attr("fill", "blue");
  });
d3.selectAll(".player").call(drag)

var checkCollision = function(){
  var colX = d3.select(".player").attr("x");
  var colY = d3.select(".player").attr("y");
  var playerR = (d3.select(".player").attr("width"))/2;
  var asteroids = d3.selectAll(".asteroid");
      for(var i = 0; i < asteroids[0].length; i++){
        var astX = asteroids[0][i].x.baseVal.value;
        var astY = asteroids[0][i].y.baseVal.value;
        var astR = (asteroids[0][i].height.baseVal.value)/2;
        var distance = Math.sqrt(Math.pow((astX - colX),2) + Math.pow((astY - colY),2));
        if((astR + playerR) > distance ){
          // dead
          d3.select(".player").attr("xlink:href", "explosion.jpg").transition().attr("xlink:href", "flying-saucer.png");
          if(score > currentHighScore){
            currentHighScore = score;
            d3.select(".high").text("High score: " + currentHighScore);
          }
          score = 0;
         //  if(inCollision){
         //    collisions++;
         //    d3.select(".collisions").text("Collisions: " + collisions);
         //    inCollision = false;
         // }
        }

      }
  score++;
  d3.select(".current").text("Current score: " + score);
};
var scoreKeeper = function(){

};

var i = asteroidCount;
while(i > 0) {
  createAsteroid();
  i--;
}
setInterval(checkCollision, 10);
setInterval(moveAsteroid, 2000);
