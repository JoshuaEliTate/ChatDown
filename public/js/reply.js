const postReply = async (buttonEl) => {

    
        const replyComment = document.getElementsByClassName('replyInput').value.trim()
        const commentId = buttonEl.getAttribute('data-comment-id')
        const response = await fetch('/api/reply', {
            method: 'POST',
            body: JSON.stringify({ replyComment, commentId }),
            headers: { 'Content-Type': 'application/json' },
        });
    
        if (response.ok) {
            document.location.replace('/');
        } else {
            alert('failed to Post')
        }


};

function theFunction(buttonEl) {
    console.log(buttonEl.getAttribute('data-comment-id'))
    // postReply();
}

// const replyForm = document.getElementById('replyForm');

// replyForm.addEventListener('submit', theFunction);
