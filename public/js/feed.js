function fetchLocation() {
  var requestUrl = 'http://ip-api.com/json/';

  fetch(requestUrl)
    .then(function (response) {
      return response.json();
    })
    .then(async function (data) {
      console.log(data.city);
      // console.log(data.regionName);
      const city = data.city
      console.log(city);
      const response = await fetch('/api/post/location', {
        method: 'POST',
        body: JSON.stringify({ city }),
        headers: { 'Content-Type': 'application/json' },
      });
      // if (response.ok) {
      //   document.location.replace('/');
      // } else {
      //   console.log(city)
      //   alert('Failed to grab location.');
      // }
    });

  }

// const message = "message"
const feed = async () => {
    // event.preventDefault();
    const message = document.getElementById('postOnFeed').value.trim();
    console.log(message)
    // console.log("why isnt this working", newComment)
    const response = await fetch('/api/post', {
      method: 'POST',
      body: JSON.stringify({ message }),
      headers: { 'Content-Type': 'application/json' },
    });

    // if (response.ok) {
    //   document.location.replace('/');
    // } else {
    //   alert('Failed to Post.');
    // }
  };

  function myFunction(e){
    e.preventDefault()
    fetchLocation();
	  feed();
  }
  const commentForm = document.getElementById('comment-form');
  
  commentForm.addEventListener('submit', myFunction);
 
  