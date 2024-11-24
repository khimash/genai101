const facts = [
   "In my free time, I'm learning to play the guitar.",
   "I’m learning to play the guitar and hope to perform a song someday!",
   "I’ve recently started learning the guitar, and I’m loving the journey!",
    "I’m currently learning to play acoustic guitar in my free time.",
   "I’ve been dedicating my free time to learning guitar, and I can already play a few songs!"
];

function generateFact() {
    const factElement = document.getElementById('fact');
    const randomIndex = Math.floor(Math.random() * facts.length);
    factElement.textContent = facts[randomIndex];
}
