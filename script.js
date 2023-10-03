document.addEventListener("DOMContentLoaded", () => {
    const username = "ReplaceWithUsername"; // Replace with the desired username

     fetch(`https://cors-anywhere.herokuapp.com/https://api.scratch.mit.edu/users/${username}`)
        .then(response => response.json())
        .then(data => {
            const userInfoContainer = document.getElementById("userInfo");

            if (data.code === "NotFound") {
                userInfoContainer.innerHTML = "User not found.";
            } else {
                const userInfoHTML = `
                    <h2>${data.username}</h2>
                    <p><strong>ID:</strong> ${data.id}</p>
                    <p><strong>Status:</strong> ${data.status}</p>
                    <p><strong>Country:</strong> ${data.profile.country}</p>
                    <p><strong>Thumbnail:</strong> <img src="${data.profile.images["90x90"]}" alt="User Thumbnail"></p>
                `;
                userInfoContainer.innerHTML = userInfoHTML;
            }
        })
        .catch(error => {
            console.error("Error fetching data:", error);
        });
});
