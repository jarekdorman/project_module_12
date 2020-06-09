/* eslint no-undef: "error" */
/*global Chart */

// HAMBURGER MENU

function toggleMenu() {
  document.querySelector('.aside').classList.toggle('show');
  console.log(toggleMenu);
}

document.querySelector('.hamburger').addEventListener('click', function (e) {
  e.preventDefault();
  toggleMenu();
});

// MODALS

function closeModal() {
  document.getElementById('overlay').classList.remove('show');
}

document.querySelectorAll('#overlay .js--close-modal').forEach(function (btn) {
  btn.addEventListener('click', function (e) {
    e.preventDefault();
    closeModal();
  });
});

document.querySelector('#overlay').addEventListener('click', function (e) {
  if (e.target === this) {
    closeModal();
  }
});

document.addEventListener('keyup', function (e) {
  if (e.keyCode === 27) {
    closeModal();
  }
});

function openModal(modal) {
  document.querySelectorAll('#overlay > *').forEach(function (modal) {
    modal.classList.remove('show');
  });
  document.querySelector('#overlay').classList.add('show');
  modal.classList.add('show');
}

const logoutButtons = document.querySelectorAll('.icon-quit');
const loginButtons = document.querySelectorAll('.login');
const chatButtons = document.querySelectorAll('.aside_chat');

const modalQuit = document.getElementById('modal-quit');
const modalLogin = document.getElementById('login');
const modalChat = document.getElementById('chat');

for (let logoutButton of logoutButtons) {
  logoutButton.addEventListener('click', function () {
    openModal(modalQuit);
  });
}

for (let loginButton of loginButtons) {
  loginButton.addEventListener('click', function () {
    openModal(modalLogin);
  });
}

for (let chatButton of chatButtons) {
  chatButton.addEventListener('click', function () {
    openModal(modalChat);
  });
}

// CHART

var ctx = document.getElementById('myChart').getContext('2d');

var chart = new Chart(ctx, {
  type: 'bar',
  data: {
    labels: ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10'],
    datasets: [
      {
        label: 'Signups',
        backgroundColor: '#8DBEC8',
        borderColor: '#8DBEC8',
        data: [52, 51, 41, 94, 26, 6, 72, 9, 21, 88],
      },
      {
        label: 'FTD',
        backgroundColor: '#F29E4E',
        borderColor: '#F29E4E',
        data: [6, 72, 1, 0, 47, 11, 50, 44, 63, 76],
      },
      {
        label: 'Earned',
        backgroundColor: '#71B374',
        borderColor: '#71B374',
        data: [59, 49, 68, 90, 67, 41, 13, 38, 48, 48],
        hidden: true,
      },
    ],
  },
});
console.log(chart);

// CHAT APP

const messages = document.getElementById('messages');

const textbox = document.getElementById('input-chat');
const button = document.getElementById('send-chat');

button.addEventListener('click', function () {
  const newMessage = document.createElement('li');

  newMessage.innerHTML = textbox.value;
  messages.appendChild(newMessage);
  textbox.value = '';
});

document.addEventListener('keyup', function (m) {
  if (m.keyCode === 13) {
    const newMessage = document.createElement('li');

    newMessage.innerHTML = textbox.value;
    messages.appendChild(newMessage);
    textbox.value = '';
  }
});
