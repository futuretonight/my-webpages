// file that works to display repos in index.html
// git_script.js
document.addEventListener('DOMContentLoaded', function () {
  const repositoriesContainer = document.getElementById('repositories');

  // Fetch data from GitHub API
  fetch('https://api.github.com/users/futuretonight/repos')
    .then(response => response.json())
    .then(repositories => {
      // Create repository cards and append to the container
      repositories.forEach(repo => {
        const repoCard = document.createElement('div');
        repoCard.classList.add('repository-card');
        repoCard.innerHTML = `
          <h2>${repo.name}</h2>
          <p>${repo.description || 'No description available'}</p>
          <p>Language: ${repo.language}</p>
          <p>Last update: ${new Date(repo.updated_at).toLocaleDateString()}</p>
          <a href="${repo.html_url}" target="_blank">View on GitHub</a>
        `;
        repositoriesContainer.appendChild(repoCard);
      });
    })
    .catch(error => console.error('Error fetching GitHub repositories:', error));
});
