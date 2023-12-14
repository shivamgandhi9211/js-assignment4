// For search functionality

const apiUrlBase = 'https://api.tvmaze.com/singlesearch/shows?q=';

// Function to fetch data from the API
async function fetchData(showName) {
    try {
        const response = await fetch(apiUrlBase + showName);
        const data = await response.json();

        // Display relevant information on the page
        displayData(data);
    } catch (error) {
        console.error('Error fetching data:', error);
        displayError();
    }
}

// Function to display data on the page
function displayData(data) {
    const showInfoContainer = document.getElementById('showInfo');
    showInfoContainer.innerHTML = `
        <h2>${data.name}</h2>
        <p>${data.summary}</p>
        <img src="${data.image.medium}" alt="${data.name} Image" class="show-image">
    `;
}

// Function to display an error message
function displayError() {
    const showInfoContainer = document.getElementById('showInfo');
    showInfoContainer.innerHTML = '<p>Error fetching show information. Please try again.</p>';
}

// Function to perform search when the button is clicked
function searchShow() {
    const showInput = document.getElementById('showInput');
    const showName = showInput.value.trim();

    // Check if the input is not empty
    if (showName !== '') {
        fetchData(showName);
    } else {
        // Handle empty input if needed
        displayError();
    }
}

// Function to dynamically add student info to the page
function addStudentInfo() {
    const studentInfoContainer = document.getElementById('studentInfo');
    const studentId = '200520466';
    const studentName = 'Shivam Gandhi';

    studentInfoContainer.textContent = `Student ID: ${studentId} | Student Name: ${studentName}`;
}

// Call functions when the page loads
window.onload = function () {
    addStudentInfo();
};
