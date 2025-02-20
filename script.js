const app = document.getElementById("app");
const users = [
  {
    email: "test@test.com",
    phone: "99999999999",
    ref: 100,
    refBy: null,
  },
  {
    email: "tust@tust.com",
    phone: "99999999999",
    ref: 200,
    refBy: 100,
  },
  {
    email: "tost@tost.com",
    phone: "99999999999",
    ref: 300,
    refBy: 100,
  },
];

const getUser = (userData) => {
  return users.find((user) => {
    return user.email == userData.email;
  });
};

const getTotalSubscribers = (userData) => {
  const subs = users.filter((user) => {
    return user.refBy == userData.ref;
  });
  return subs.length;
};

const showInvite = (userData) => {
  app.innerHTML = `

    `;
};

const saveUser = (userData) => {
  const newUser = {
    ...userData,
    ref: Math.round(Math.random() * 4000),
    refBy: 100,
  };
  users.push(newUser);
};

const formAction = () => {
  document.getElementById("form");
  form.onsubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(form);
    const userData = {
      email: formData.get("email"),
      phone: formData.get("phone"),
    };
    const user = getUser(userData);
    if (user) {
      showInvite(user);
    } else {
      const newUser = saveUser(userData);
    }
    showInvite(newUser);
  };
};

const startApp = () => {
  const content = `
 
    `;

  app.innerHTML = content;

  formAction();
};

// startApp();

document.getElementById("logo").onclick = () => startApp();
