const spinBtn = document.getElementById('spinBtn');
const rouletteWheel = document.querySelector('.roulette-wheel');
const resultDisplay = document.getElementById('result');

const segments = [
    { label: "1", color: "red" },
    { label: "2", color: "black" },
    { label: "3", color: "red" },
    { label: "4", color: "black" },
    // ... add more segments for a complete roulette wheel (37 or 38 for standard)
];

const segmentAngle = 360 / segments.length;

// Dynamically create wheel segments
segments.forEach((segment, index) => {
    const div = document.createElement('div');
    div.style.background = segment.color;
    div.style.transform = `rotate(${index * segmentAngle}deg) skewY(30deg)`; // Example, adjust skew for desired wedge shape
    div.innerHTML = `<span>${segment.label}</span>`;
    rouletteWheel.appendChild(div);
});

spinBtn.addEventListener('click', () => {
    // Generate a random degree of rotation
    const randomDegree = Math.floor(Math.random() * 3600) + 720; // Spin multiple times
    rouletteWheel.style.transform = `rotate(${randomDegree}deg)`;

    // Calculate the winning segment (adjust based on your wheel layout)
    setTimeout(() => {
        const finalRotation = randomDegree % 360;
        const winningSegmentIndex = Math.floor(finalRotation / segmentAngle);
        resultDisplay.textContent = `The winner is: ${segments[winningSegmentIndex].label}`;
    }, 5000); // Wait for the spin animation to finish
});
