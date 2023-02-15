const replyFunc = async () => {

    const replyComment = document.getElementById('replyInput').value.trim();
    const response = await fetch('/api/reply', {
        method: 'POST',
        body: JSON.stringify({ replyComment }),
        headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
        document.location.replace('/');
    } else {
        alert('failed to Post')
    }
};

function myFunction(e) {
    e.preventDefault()
    replyFunc();
}
const commentForm = document.getElementById('replyForm');

commentForm.addEventListener('submit', myFunction);
