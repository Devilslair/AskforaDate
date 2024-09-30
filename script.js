// Function to create a random love icon for the background
function createLoveIcon() {
    const loveIcon = document.createElement('div');
    loveIcon.classList.add('love-icon');
    loveIcon.textContent = '❤';

    // Set random initial position
    loveIcon.style.left = Math.random() * 100 + 'vw';
    loveIcon.style.top = Math.random() * 100 + 'vh';

    // Add love icon to the body
    document.body.appendChild(loveIcon);

    // Remove the icon after a few seconds
    setTimeout(() => {
        loveIcon.remove();
    }, 6000); // 6 seconds
}

// Continuously create love icons at random intervals for the background
setInterval(createLoveIcon, 1000); // Every second

// Function to create love icons inside the button on hover
document.querySelector('.button').addEventListener('mouseenter', () => {
    const button = document.querySelector('.love-button');
    const love = document.createElement('span');
    love.classList.add('love');
    love.textContent = '❤';

    // Set random position within the button
    const randomX = Math.random() * 80 - 40; // Random position (x)
    const randomY = Math.random() * 80 - 40; // Random position (y)
    
    love.style.left = `${randomX}px`;
    love.style.top = `${randomY}px`;
    
    // button.appendChild(love);
});
