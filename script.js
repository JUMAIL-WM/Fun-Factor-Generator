const facts = [
    "I am Jumail!",
    "I have a pet cat named Whiskers.",
    "I enjoy hiking on weekends.",
    "My favorite food is Kottu.",
    "I can speak three languages."
];

document.getElementById('generate-fact').addEventListener('click', () => {
    const randomIndex = Math.floor(Math.random() * facts.length);
    document.getElementById('fun-fact').innerText = facts[randomIndex];
});

document.getElementById('add-fact').addEventListener('click', () => {
    const customFact = document.getElementById('custom-fact').value;
    if (customFact) {
        facts.push(customFact);
        document.getElementById('custom-fact').value = '';
        alert('Fun fact added!');
    } else {
        alert('Please enter a fun fact.');
    }
});

document.getElementById('clear-facts').addEventListener('click', () => {
    while (facts.length > 0) {
        facts.pop();
    }
    document.getElementById('fun-fact').innerText = '';
    alert('All fun facts cleared one by one!');
});
