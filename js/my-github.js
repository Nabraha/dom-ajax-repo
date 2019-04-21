// Write code here to communicate with Github

var url = "https://api.github.com/users/nabraha/repos";
fetch(url)
  .then(resp => resp.json())
  .then(function(result) {
    numberOfRepos(result);
    result.forEach(function(name) {
      reposListAndLink(name);
    });
  });

function reposListAndLink(name) {
  const getRepoId = document.getElementById("repos-list");
  const repoItemElement = document.createElement("li");
  repoItemElement.appendChild(addAnchor(name));
  getRepoId.appendChild(repoItemElement);
}

function addAnchor(name) {
  var addLink = document.createElement("a");
  addLink.href = name.html_url;
  addLink.text = name.name;
  return addLink;
}

function numberOfRepos(result) {
  var repoNumber = document.getElementById("repos-count");
  repoNumber.innerText = result.length;
  //  repoNumber.innerText = Object.keys(result).length;
}
