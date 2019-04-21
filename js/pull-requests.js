var getUserId = document.getElementById("usrid");
getUserId.addEventListener("keyup", function(event) {
  event.preventDefault();
  const con = event.target.value.toLowerCase();
  var url = "https://api.github.com/repos/rarmatei/js-exercises/pulls";
  fetch(url)
    .then(resp => resp.json())
    .then(function(result) {
      document.getElementById("pull-requests-list").innerText = "";
      result.forEach(function(element) {
        // check the position in the string
        if (element.user.login.toLowerCase().indexOf(con) != -1) {
          pullReqAndLink(element);
          // } else {
          //   getPullRequestElement.style.display = "none";
        }
      });
    });
});

function pullReqAndLink(element) {
  const getPullRequestElement = document.getElementById("pull-requests-list");
  const addAList = document.createElement("li");

  const addAnchor = linkCreation(element);
  addAList.appendChild(addAnchor);
  getPullRequestElement.appendChild(addAList);
}

//create/add an anchor
function linkCreation(element) {
  const addAnchor = document.createElement("a");
  addAnchor.href = element.html_url;
  addAnchor.text = element.user.login;
  return addAnchor;
  //addAnchor.attributes = ("href", element.html_url)
  //addAnchor.attributes = ("text", element.html_url)
}
