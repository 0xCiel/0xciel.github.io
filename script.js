document.getElementById('contactButton').addEventListener('click', function () {
    document.getElementById('contactModal').style.display = 'flex';
    document.body.style.overflow = 'hidden'; 
});

document.getElementById('closeModal').addEventListener('click', function () {
    document.getElementById('contactModal').style.display = 'none';
    document.body.style.overflow = 'auto';
});

const tabButtons = document.querySelectorAll('.tab-button');
const tabContents = document.querySelectorAll('.tab-content');
const backgroundImage = document.getElementById('backgroundImage');

tabButtons.forEach(button => {
    button.addEventListener('click', () => {
        tabButtons.forEach(btn => btn.classList.remove('active'));
        tabContents.forEach(content => content.style.display = 'none');

        button.classList.add('active');
        const tabId = button.getAttribute('data-tab');
        document.getElementById(tabId).style.display = 'block';
        if (tabId === "home") {
            backgroundImage.src = "HomeBackGroundSticker.png";
            backgroundImage.classList.remove("right");
            backgroundImage.classList.add("left");
        } else if (tabId === "about") {
            backgroundImage.src = "AboutMeSticker.png";
            backgroundImage.classList.remove("left");
            backgroundImage.classList.add("right");
        }

        setTimeout(() => {
            backgroundImage.classList.add("visible");
        }, 50);
    });
});

