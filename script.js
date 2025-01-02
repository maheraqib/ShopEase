const bar = document.getElementById("bar");
const close = document.getElementById("close");
const nav = document.getElementById("navbar");

if (bar)  { bar.addEventListener('click', () => {
      nav.classList.add('active');
    });
}

if (close)  { close.addEventListener('click', () => {
    nav.classList.remove('active');
  });
}

// button click function event

const form = document.querySelector(".form");

function changeColor() {
  form.style.color = "red";
}
  