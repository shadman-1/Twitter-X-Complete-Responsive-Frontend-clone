// Auto-resize textarea
const textarea = document.querySelector('textarea');
if (textarea) {
  textarea.addEventListener('input', function () {
    this.style.height = 'auto';
    this.style.height = this.scrollHeight + 'px';
  });
}

// Prevent empty post
const postBtn = document.querySelector('.btn-primary');
postBtn.addEventListener('click', () => {
  if (textarea.value.trim() === "") {
    alert("Please enter some text before posting.");
  } else {
    // For now, just clear the textarea and show a message
    alert("Post submitted (demo only)");
    textarea.value = "";
    textarea.style.height = "50px";
  }
});

// Mobile menu toggle (if implementing in future)
const menuToggle = document.getElementById("menu-toggle");
const leftSidebar = document.querySelector('.leftside-body');

if (menuToggle) {
  menuToggle.addEventListener('click', () => {
    leftSidebar.classList.toggle('d-none');
  });
}

// Notification Bell Interaction (dummy)
const notificationIcon = document.querySelector('.fa-bell');

if (notificationIcon) {
  notificationIcon.addEventListener('click', () => {
    alert("You have no new notifications. 🔔");
  });
}

// Like button toggle (dummy interaction)
document.querySelectorAll('.like-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    const icon = btn.querySelector('i');
    if (icon.classList.contains('fa-regular')) {
      icon.classList.remove('fa-regular');
      icon.classList.add('fa-solid');
      icon.style.color = 'red';
    } else {
      icon.classList.remove('fa-solid');
      icon.classList.add('fa-regular');
      icon.style.color = '';
    }
  });
});

// Reply interaction (dummy)
document.querySelectorAll('.reply-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    alert("Reply feature coming soon! 💬");
  });
});

// Handle reply submission
const sendReplyBtn = document.getElementById('sendReplyBtn');
const replyInput = document.getElementById('replyText');

sendReplyBtn.addEventListener('click', () => {
  const reply = replyInput.value.trim();

  if (reply === "") {
    alert("Please enter a reply.");
    return;
  }

  // Create reply element
  const replyElement = document.createElement('div');
  replyElement.className = 'p-2 mt-2 text-light';
  replyElement.innerHTML = `
    <div class="d-flex">
      <img src="images/Gmail icon.jpg" alt="img" style="width:35px; height:35px; border-radius:50%;">
      <div class="px-2">
        <p class="m-0" style="font-weight: 600;">You replied:</p>
        <p class="m-0">${reply}</p>
      </div>
    </div>
  `;

  // Append reply below the post
  const postContainer = document.querySelector('.cusBorder.p-3'); // Adjust selector if needed
  postContainer.appendChild(replyElement);

  // Reset and close modal
  replyInput.value = "";
  const replyModal = bootstrap.Modal.getInstance(document.getElementById('replyModal'));
  replyModal.hide();
});

