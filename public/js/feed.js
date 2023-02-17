// function fetchLocation() {
//   var requestUrl = 'https://ip-api.com/json/';

//   fetch(requestUrl)
//     .then(function (response) {
//       return response.json();
//     })
//     .then(async function (data) {
//       const city = data.city
//       feed(city);
//     });
//   }

const feed = async () => {
  const message = document.getElementById("postOnFeed").value.trim();
  const response = await fetch("/api/post", {
    method: "POST",
    body: JSON.stringify({ message }),
    headers: { "Content-Type": "application/json" },
  });

  if (response.ok) {
    document.location.replace("/");
  } else {
    alert("failed to Post");
  }
};

function myFunction(e) {
  e.preventDefault();
  // fetchLocation();
  feed();
}
const commentForm = document.getElementById("comment-form");

commentForm.addEventListener("submit", myFunction);
