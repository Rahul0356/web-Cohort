document.addEventListener("DOMContentLoaded", loadMoods);

function saveMood() {
    const moodSelect = document.getElementById("mood");
    const selectedMood = moodSelect.value;
    const date = new Date().toLocaleDateString();

    // Retrieve stored moods or initialize an empty array
    let moodLogs = JSON.parse(localStorage.getItem("moods")) || [];

    // Save the new mood entry
    moodLogs.push({ mood: selectedMood, date: date });
    localStorage.setItem("moods", JSON.stringify(moodLogs));

    // Update the displayed mood history
    loadMoods();
}

function loadMoods() {
    const moodList = document.getElementById("mood-list");
    moodList.innerHTML = "";

    let moodLogs = JSON.parse(localStorage.getItem("moods")) || [];

    moodLogs.forEach((entry, index) => {
        const listItem = document.createElement("li");
        listItem.innerHTML = `${entry.date} - ${entry.mood}`;

        // Create a delete button
        const deleteButton = document.createElement("button");
        deleteButton.textContent = "❌";
        deleteButton.classList.add("delete-btn");
        deleteButton.onclick = function () {
            deleteMood(index);
        };

        listItem.appendChild(deleteButton);
        moodList.appendChild(listItem);
    });
}

function deleteMood(index) {
    let moodLogs = JSON.parse(localStorage.getItem("moods")) || [];
    
    // Remove the mood entry at the given index
    moodLogs.splice(index, 1);
    
    // Save the updated list back to localStorage
    localStorage.setItem("moods", JSON.stringify(moodLogs));

    // Reload the mood list
    loadMoods();
}
