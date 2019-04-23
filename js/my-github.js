// Write code here to communicate with Github

//Part-1
// var url = "https://api.github.com/users/nabraha/repos";
// fetch(url)
//   .then(resp => resp.json())
//   .then(function(result) {
//     numberOfRepos(result);
//     result.forEach(function(name) {
//       reposListAndLink(name);
//     });
//   });

// function reposListAndLink(name) {
//   const getRepoId = document.getElementById("repos-list");
//   const repoItemElement = document.createElement("li");
//   repoItemElement.appendChild(addAnchor(name));
//   getRepoId.appendChild(repoItemElement);
// }

// function addAnchor(name) {
//   var addLink = document.createElement("a");
//   addLink.href = name.html_url;
//   addLink.text = name.name;
//   return addLink;
// }

// function numberOfRepos(result) {
//   var repoNumber = document.getElementById("repos-count");
//   repoNumber.innerText = result.length;
//   //  repoNumber.innerText = Object.keys(result).length;
// }

//part-3

var repoNumber = document.getElementById("repos-count");
const getRepoId = document.getElementById("repos-list");
const getForm = document.querySelector(".my-auto form:nth-child(4)");
const defaultUser = "Nabraha";
getForm.addEventListener("submit", function(e) {
  e.preventDefault();

  var value = getForm.querySelector('input[type="text"]').value.toLowerCase();
  if (value === "") {
    value = defaultUser;
    console.log("val 1", value);
  }

  var url = "https://api.github.com/users/" + value + "/repos";
  fetch(url)
    .then(resp => resp.json())
    .then(function(result) {
      result.forEach(function(name) {
        if (defaultUser === name.owner.login) {
          repoNumber.innerText = result.length;
          reposListAndLink(name);
        } else if (value === name.owner.login) {
          const getDiv = document.querySelector(".my-auto div:nth-child(2)");
          repoNumber.innerText = result.length;
          getDiv.innerHTML =
            name.owner.login +
            " has " +
            repoNumber.innerText +
            " repos on GITHUB.";
          reposListAndLink(name);
        }
      });
    });
  getRepoId.innerText = "";
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
  addLink.text = name.owner.login;
  return addLink;
}
