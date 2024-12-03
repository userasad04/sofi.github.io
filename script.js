const createStars = () => {
    const sky = document.querySelector('.sky');
    const starCount = 100; // You can adjust the number of regular stars as per preference
  
    // Create regular stars
    for (let i = 0; i < starCount; i++) {
      const star = document.createElement('div');
      star.className = 'star';
  
      // Randomize star size and position
      const size = Math.random(); // Value between 0 and 1
      const x = Math.random() * window.innerWidth;
      const y = Math.random() * window.innerHeight;
  
      star.style.setProperty('--size', size); // Pass size to CSS
      star.style.left = `${x}px`;
      star.style.top = `${y}px`;
  
      // Add a random message to each star
      // const messages = [
      //   "You're my guiding star ✨",
      //   "You light up my life 🌟",
      //   "I wish to be with you forever ❤️",
      //   "You’re the brightest thing in my universe 🌌",
      //   "Every day with you feels magical 💫",
      // ];
      // star.dataset.message = messages[i % messages.length];


      // Add a random message to each star
const messages = [
  "You are my light in the darkness, and no matter the distance, we’ll shine together 🌟❤️",
  "Every star reminds me of you, and every wish is a promise that I will be back for you 💫💙",
  "This year will pass in the blink of an eye, and soon we’ll be together, stronger than ever 🌌💪",
  "I carry you in my heart with every step I take. I will make our future brighter, just wait for me 🌟💖",
  "No matter the time, no matter the trials, we will find our way back to each other 🌌💘",
  "You’ve made me a better person, and with every star, I’m closer to making our dream come true ✨💫",
  "I promise you, my love, this wait will be worth it. Our future together will shine even brighter 🌟💍",
  "The stars above are all promises, and I’ll keep every one of them, just for you 💖🌌",
  "You’re the reason I’m pushing myself forward. You’re my heart, my hope, and my future 🌟💙",
  "We’ve fought so much for this love. One year apart is nothing compared to a lifetime together 💫❤️",
  "Every moment without you feels like eternity, but every step brings me closer to you 🌟💞",
  "When I look at the stars, I see a future where we are finally together, never to part again 💖💫",
  "You’re not just a part of my past, you’re my future. I’m working hard for the life we’ll have together 🌌💙",
  "The stars are our witnesses, and they know we’ll make it through this. I’ll return to you, my love 🌟💪",
  "We may be apart now, but soon I’ll be beside you, and our love will only grow stronger 🌌💖",
  "Every star I see, I know it’s a step toward our future. I’m coming back to you, my love 🌟💍",
  "The distance can’t break us. We’ve already survived so much—soon, we’ll be together forever 💫❤️",
  "Even though I’m not with you right now, you’re always in my thoughts, my heart, my stars 🌌💙",
  "You are my dream, my reason to succeed. Every star is a reminder of our future together 🌟💪",
  "Our love is worth the wait. I’ll return to you, and we’ll create the future we’ve always dreamed of 💫💖",
  "Every star is a part of my promise to you: no matter how far, I’ll always come back for you 🌌💙",
  "I’m fighting for us every day. One year will pass, and when it does, we’ll finally be together 🌟💖",
];

star.dataset.message = messages[i % messages.length];



  
      sky.appendChild(star);
  
      // Add drag and click behavior
      let isDragging = false;
  
      const startDrag = (e) => {
        isDragging = true;
        const touch = e.touches ? e.touches[0] : e;
        star.dataset.startX = touch.clientX - star.offsetLeft;
        star.dataset.startY = touch.clientY - star.offsetTop;
      };
  
      const moveStar = (e) => {
        if (!isDragging) return;
        const touch = e.touches ? e.touches[0] : e;
        const newX = touch.clientX - star.dataset.startX;
        const newY = touch.clientY - star.dataset.startY;
  
        // Constrain within viewport
        const maxX = window.innerWidth - star.offsetWidth / 2;
        const maxY = window.innerHeight - star.offsetHeight / 2;
        const minX = star.offsetWidth / 2;
        const minY = star.offsetHeight / 2;
  
        star.style.left = `${Math.min(maxX, Math.max(minX, newX))}px`;
        star.style.top = `${Math.min(maxY, Math.max(minY, newY))}px`;
      };
  
      const endDrag = () => {
        isDragging = false;
      };
  
      const onClick = () => {
        const message = star.dataset.message;
        alert(message);
      };
  
      star.addEventListener('mousedown', (e) => startDrag(e));
      document.addEventListener('mousemove', (e) => moveStar(e));
      window.addEventListener('mouseup', endDrag);
  
      star.addEventListener('touchstart', (e) => startDrag(e));
      document.addEventListener('touchmove', (e) => moveStar(e));
      window.addEventListener('touchend', endDrag);
  
      star.addEventListener('click', onClick);
    }
  };
  
  // Create less shooting stars (more natural)
  const createShootingStars = () => {
    const sky = document.querySelector('.sky');
    const shootingStarCount = 10; // Reduced number of shooting stars
  
    for (let i = 0; i < shootingStarCount; i++) {
      const shootingStar = document.createElement('div');
      shootingStar.className = 'shooting-star';
  
      // Randomize shooting star position, direction, and speed
      const xStart = Math.random() * window.innerWidth;
      const yStart = Math.random() * window.innerHeight;
      const speed = Math.random() * 4 + 2; // Slower speed for natural look
      const angle = Math.random() * Math.PI; // Random angle for movement
  
      // Position the shooting star at a random spot
      shootingStar.style.left = `${xStart}px`;
      shootingStar.style.top = `${yStart}px`;
      shootingStar.style.animationDuration = `${speed}s`; // Random speed
  
      sky.appendChild(shootingStar);
  
      // Create a loop for continuous shooting stars
      setInterval(() => {
        const newX = Math.random() * window.innerWidth;
        const newY = Math.random() * window.innerHeight;
        shootingStar.style.left = `${newX}px`;
        shootingStar.style.top = `${newY}px`;
      }, 4000); // Update every 4 seconds for a more subtle effect
    }
  };
  
  // Clear existing stars and create new ones
  createStars();
  createShootingStars();
  