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


  const commentForm = document.getElementById('comment-form');
  
  commentForm.addEventListener('submit', feed);
  