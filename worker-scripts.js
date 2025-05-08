addEventListener('fetch', event => {
    event.respondWith(handleRequest(event.request))
  })
  
  async function handleRequest(request) {
    // Fetch GitHub profile data from GitHub API
    const githubUsername = "your-github-username";  // Replace with your GitHub username
    const githubApiUrl = `https://api.github.com/users/${githubUsername}`;
    
    let githubData;
    try {
      const response = await fetch(githubApiUrl);
      
      if (!response.ok) {
        throw new Error("GitHub API request failed");
      }
      githubData = await response.json();
    } catch (error) {
      return new Response(JSON.stringify({
        message: "Error fetching GitHub data",
        status: "error",
        error: error.message
      }), {
        headers: { 
          'content-type': 'application/json',
          'Cache-Control': 'no-cache'
        },
      });
    }
  
    // Dynamic JSON response with GitHub profile data
    const responseData = {
      message: "Hello from Cloudflare Worker!",
      status: "success",
      timestamp: new Date().toISOString(),
      github_profile: {
        username: githubData.login,
        name: githubData.name,
        bio: githubData.bio,
        public_repos: githubData.public_repos,
        followers: githubData.followers,
        following: githubData.following,
        avatar_url: githubData.avatar_url,
        html_url: githubData.html_url,
      },
    };
  
    return new Response(JSON.stringify(responseData), {
      headers: { 
        'content-type': 'application/json',
        'Cache-Control': 'no-cache'
      },
    });
  }
  