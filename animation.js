export const callAnimation = function () {
  var canvas = document.getElementById("myCanvas");
  var ctx = canvas.getContext("2d");

  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  var particles = [];
  var numParticles = 15;

  // Image sources
  var imageSources = [
    "./img/Black_Static_TR.png", // Placeholder image URL
    "./img/Blue_Static_TL.png", // Placeholder image URL
    "./img/Blue_Static_TR.png", // Placeholder image URL
    "./img/Green_Rotate_TR.png", // Placeholder image URL
    "./img/Green_Static_BL.png", // Placeholder image URL
    "./img/Grey_Rotate_BL.png", // Placeholder image URL
    "./img/Grey_Rotate_TL.png", // Placeholder image URL
    "./img/Orange_Static_TR.png", // Placeholder image URL
    "./img/Pink_Rotate_L.png", // Placeholder image URL
    "./img/Pink_Static_TL.png", // Placeholder image URL
    "./img/Red_Static_TR.png", // Placeholder image URL
    "./img/Violet_Static_R.png", // Placeholder image URL
    "./img/Brown_Rotate_BL.png", // Placeholder image URL
    "./img/Yellow_Rotate_TR.png", // Placeholder image URL
    "./img/Yellow_Static_T.png", // Placeholder image URL
  ];

  // Preload images
  var images = [];
  var loadedImages = 0;
  for (var i = 0; i < imageSources.length; i++) {
    var img = new Image();
    img.onload = function () {
      loadedImages++;
      if (loadedImages === numParticles) {
        // All images loaded, start animation
        init();
      }
    };
    img.src = imageSources[i];
    images.push(img);
  }

  const stars = [];

  // Function to generate random number within a range
  function randomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  function init() {
    // Particle class
    function Particle(
      x,
      y,
      radius,
      speedX,
      speedY,
      image,
      size,
      rotationAngle
    ) {
      this.x = x;
      this.y = y;
      this.radius = radius;
      this.speedX = speedX;
      this.speedY = speedY;
      this.image = image;
      this.size = size;
      this.rotationAngle = rotationAngle;
    }

    // Initialize particles
    for (var i = 0; i < numParticles; i++) {
      var x = Math.random() * canvas.width;
      var y = Math.random() * canvas.height;
      var radius = Math.random() * 10 + 5; // Random radius between 5 and 15
      var speedX = Math.random() * 0.8; // Random speed between 0 and 0.8 in X direction
      var speedY = Math.random() * 0.8; // Random speed between 0 and 0.8 in Y direction
      var size = 2;
      if (speedX < 0.2 || speedY < 0.2) {
        size = 14;
      } else if (speedX < 0.3 || speedY < 0.3) {
        size = 10;
      } else if (speedX < 0.5 || speedY < 0.5) {
        size = 6;
      } else if (speedX < 0.7 && speedY < 0.7) {
        size = 2.5;
      }
      var image = images[i];
      var rotationAngle = Math.random() * Math.PI * 2; // Random rotation angle

      particles.push(
        new Particle(x, y, radius, speedX, speedY, image, size, rotationAngle)
      );
    }

    // Animation loop
    function animate() {
      window['animate'] = requestAnimationFrame(animate);
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      stars.forEach((star) => {
        star.update();
        star.draw();
      });

      

      particles.forEach(function (particle) {
        ctx.save(); // Save current state
        ctx.translate(particle.x, particle.y); // Translate to particle position
        ctx.rotate(particle.rotationAngle); // Rotate by particle rotation angle
        ctx.drawImage(
          particle.image,
          -(particle.radius * particle.size) / 2,
          -(particle.radius * particle.size) / 2,
          particle.radius * particle.size,
          particle.radius * particle.size
        ); // Draw image centered at (0, 0)
        ctx.restore(); // Restore previous state

        // Move particle
        particle.x += particle.speedX;
        particle.y -= particle.speedY; // Negative value to move upwards

        // Check if particle moves out of canvas
        if (particle.x > canvas.width + particle.radius) {
          particle.x = -particle.radius; // Reset particle to left side of canvas
        }
        if (particle.y < -particle.radius) {
          particle.y = canvas.height + particle.radius; // Reset particle to bottom side of canvas
        }

        // Update rotation angle
        // console.log(particle.image.include('Static'))
        if (particle.image.src.includes("Static")) {
          particle.rotationAngle += 0;
        } else {
          particle.rotationAngle += Math.random() * 0.01; // Adjust rotation speed as needed
        }
      });
    }

    animate();
  }

  // Star class
  class Star {
    constructor(x, y, speed) {
      this.x = x;
      this.y = y;
      this.speed = speed;
      this.size = randomInt(3, 6); // Increased size
    }

    // Update star position
    update() {
      this.x += this.speed;
      if (this.x > canvas.width) {
        this.x = 0;
        this.y = randomInt(0, canvas.height);
      }
    }

    // Draw star
    draw() {
      ctx.fillStyle = "white";
      ctx.fillRect(this.x, this.y, this.size, this.size);
    }
  }

  // Generate random stars
  function generateStars() {
    const numStars = randomInt(10, 50);
    for (let i = 0; i < numStars; i++) {
      const x = randomInt(0, canvas.width);
      const y = randomInt(0, canvas.height);
      const speed = randomInt(1, 1.5); // Decreased speed
      const star = new Star(x, y, speed);
      stars.push(star);
    }
  }

  generateStars();
};