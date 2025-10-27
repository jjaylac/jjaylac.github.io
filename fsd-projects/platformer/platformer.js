$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }

    // Create walls - do not delete or modify this code
    createPlatform(-50, -50, canvas.width + 100, 50); // top wall
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200, "navy"); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    // TODO 1 - Enable the Grid
     toggleGrid();


    // TODO 2 - Create Platforms

createPlatform(150, 250, 5, 200, "red");
createPlatform(350, 450, 35, 29, "purple");
createPlatform(550, 650, 75, 100, "blue");
createPlatform(250, 120, 30, 40, "orange");
createPlatform(220, 135, 150, 200, "white");
    // TODO 3 - Create Collectables
createCollectable("diamond", 100, 60);
createCollectable("database", 100, 50, 25, 0.1);
createCollectable("steve", 5, 25, 0.7, 5) ;
createCollectable("grace", 10, 5);
createCollectable("max", 5, 0.5);
    // TODO 4 - Create Cannons
createCannon("top", 200, 100);
createCannon("right", 200, 1000);
createCannon("left", 300, 150);
createCannon("down", 2000, 150);
createCannon("right", 500, 1000);
    
    
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
