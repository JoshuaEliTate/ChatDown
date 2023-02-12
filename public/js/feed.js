function fetchLocation() {
  var requestUrl = 'http://ip-api.com/json/';

  fetch(requestUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data.city);
      // console.log(data.regionName);
    });
  }

// const message = "message"
const feed = async () => {
    event.preventDefault();
    const message = document.getElementById('postOnFeed').value.trim();
    console.log(message)
    // console.log("why isnt this working", newComment)
    const response = await fetch('/api/post', {
      method: 'POST',
      body: JSON.stringify({ message }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      document.location.replace('/');
    } else {
      alert('Failed to Post.');
    }
  };

  function myFunction(){
    fetchLocation();
	setTimeout(() => {
		fetchRes();
		
	  }, "750")
 	
}
  const commentForm = document.getElementById('comment-form');
  
  commentForm.addEventListener('submit', myFunction);
 
  