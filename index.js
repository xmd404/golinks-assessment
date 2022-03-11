// let repos = []
// let committers = []
// let commits = 0

// GET https://api.github.com/orgs/{{org}}/repos

// if no repo(s) exist:
// respond with 404 "no repos found for {{org}}"

// if repo(s) do exist:
// loop through each object in array returned from Github API for the key "name"
// push the "name" value into repos[] array

// THEN for each repo in repos[] array
// GET https://api.github.com/repos/{{org}}/{{repo}}/commits

// if no commit(s) exist:
// respond with 404 "no commits found for {{repo}}"

// if commit(s) do exist:
// set commits += res.data.length
// loop through each object in array returned from Github API do the following map
/*
    {
        username: author.login
        image_url: author.avator_url
        email: commit.author.email
        last_commit_title: commit.message
        total_commits: {calculate by # of times their author.login appears}
    }
*/
// set to committers[] array
// respond with 200 "found {{commits}} commits in {{repos}} by {{committers}} committers"