const postReply = async (buttonEl) => {

    
        const replyComment = buttonEl.parentElement.children[0].value.trim()
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

// const replyForm = document.getElementsByClassName('replyForm');

// replyForm.addEventListener('submit', postReply);
