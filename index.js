const initApp = () => {
    const commentForm = document.getElementById('commentForm');
    const commentList = document.getElementById('commentList');
    const charCount = document.getElementById('charCount');
    const userComment = document.getElementById('userComment');

    userComment.addEventListener('input', () => {
        const remaining = 200 - userComment.value.length;
        charCount.textContent = `${remaining} caracteres restantes`;
    });

    commentForm.addEventListener('submit', function (event) {
        event.preventDefault();

        const userName = document.getElementById('userName').value.trim();
        const userCommentText = userComment.value.trim();

        if (userName && userCommentText) {
            addComment(userName, userCommentText);
            commentForm.reset();
            charCount.textContent = "200 caracteres restantes";
        }
    });

    function addComment(name, comment) {
        const commentItem = document.createElement('li');
        commentItem.classList.add('list-group-item');
        commentItem.innerHTML = `
            <strong>${name}:</strong> ${comment}
            <button class="btn btn-danger btn-sm float-end delete-btn">Eliminar</button>
        `;

        commentItem.querySelector('.delete-btn').addEventListener('click', () => {
            commentList.removeChild(commentItem);
        });

        commentList.appendChild(commentItem);
    }
}

document.addEventListener('DOMContentLoaded', () => {
 initApp();
});
