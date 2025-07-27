// Step 1: Import https module
const https = require('https');

// Step 2: Get username from command-line argument
const username = process.argv[2];

if (!username) {
  console.error('❌ Please provide a GitHub username.\n👉 Example: node github-activity.js kamranahmedse');
  process.exit(1);
}

// Step 3: Set GitHub API URL and headers
const url = `https://api.github.com/users/${username}/events`;
const options = {
  headers: {
    'User-Agent': 'github-activity-cli' // GitHub requires this
  }
};

// Step 4: Make HTTPS GET request to GitHub API
https.get(url, options, (res) => {
  let data = '';

  if (res.statusCode !== 200) {
    console.error(`❌ Failed to fetch data: ${res.statusCode}`);
    res.resume(); // Consume response to free up memory
    return;
  }

  // Step 5: Accumulate data chunks
  res.on('data', chunk => data += chunk);

  // Step 6: On response end, parse and display
  res.on('end', () => {
    try {
      const events = JSON.parse(data);

      if (events.length === 0) {
        console.log("😐 No recent activity found.");
        return;
      }

      // Step 7: Display latest 10 events
      events.slice(0, 10).forEach(event => {
        const repo = event.repo.name;
        switch (event.type) {
          case 'PushEvent':
            console.log(`- 🟢 Pushed ${event.payload.commits.length} commit(s) to ${repo}`);
            break;
          case 'IssuesEvent':
            console.log(`- 📝 ${event.payload.action} an issue in ${repo}`);
            break;
          case 'WatchEvent':
            console.log(`- ⭐ Starred ${repo}`);
            break;
          case 'ForkEvent':
            console.log(`- 🍴 Forked ${repo}`);
            break;
          case 'PullRequestEvent':
            console.log(`- 🔃 ${event.payload.action} a pull request in ${repo}`);
            break;
          default:
            console.log(`- 🔔 ${event.type} in ${repo}`);
            break;
        }
      });

    } catch (e) {
      console.error("❌ Error parsing JSON:", e.message);
    }
  });

}).on('error', err => {
  console.error("❌ Request failed:", err.message);
});
