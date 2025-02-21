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
 <main>
          <h3>Inscrição confirmada!</h3>
          <p>
            Convide mais pessoas e concorra a prêmios!<br />
            Compartilhe o link e acompanhe as inscrições:
          </p>
          <div class="input-group">
            <label for="link">
              <img src="./assets/link.svg" alt="link icon" />
            </label>
            <input
              class="link"
              type="text"
              id="link"
              value="https://evento.com?ref=${userData.ref}"
              disabled
            />
          </div>
        </main>
        <section id="stats">
          <h2>${getTotalSubscribers(userData)}</h2>
          <p>Inscrições feitas!</p>
        </section>
    `;
  app.setAttribute("class", "page-invite");
  console.log(users);
};

const saveUser = (userData) => {
  const newUser = {
    ...userData,
    ref: Math.round(Math.random() * 4000),
    refBy: 100,
  };
  users.push(newUser);
  return newUser;
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
         <main>
          <section id="about">
            <div id="title">
              <h2>Sobre o evento</h2>
              <span>
                <img src="./assets/radio.svg" alt="radio" width="32" />
                Ao vivo
              </span>
            </div>
            <p>
              Um evento feito por e para pessoas desenvolvedoras apaixonadas por
              criar soluções inovadoras e compartilhar conhecimento. Vamos
              mergulhar nas tendências mais recentes em desenvolvimento de
              software, arquitetura de sistemas e tecnologias emergentes, com
              palestras, workshops e hackathons.
              <br />
              <br />
              Dias 15 a 17 de março | Das 18h às 21h | Online & Gratuito
            </p>
          </section>
          <section id="subscription">
            <h2>Inscrição</h2>
            <form id="form">
              <div id="fields">
              <div class="input-group">
                <label for="email">
                <img src="./assets/mail.svg" alt="Email icon" />
                </label>
                <input type="email" name="email" placeholder="E-mail" />
              </div>
              <div class="input-group">
                <label for="phone">
                <img src="./assets/phone.svg" alt="phone icon" />
                </label>
                <input type="text" name="phone" placeholder="Telefone" />
              </div>
                <button>
                  Confirmar
                  <span>
                  <svg class="icon-hover" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
<path fill-rule="evenodd" clip-rule="evenodd" d="M11.2929 4.29289C11.6834 3.90237 12.3166 3.90237 12.7071 4.29289L19.7071 11.2929C20.0976 11.6834 20.0976 12.3166 19.7071 12.7071L12.7071 19.7071C12.3166 20.0976 11.6834 20.0976 11.2929 19.7071C10.9024 19.3166 10.9024 18.6834 11.2929 18.2929L16.5858 13H5C4.44772 13 4 12.5523 4 12C4 11.4477 4.44772 11 5 11H16.5858L11.2929 5.70711C10.9024 5.31658 10.9024 4.68342 11.2929 4.29289Z" fill="urrentColor"
</svg>
                  </span>
                </button>
              </div>
            </form>
          </section>
        </main>
    `;

  app.innerHTML = content;
  app.setAttribute("class", "page-start");
  formAction();
};
startApp();

document.querySelector("header").onclick = () => startApp();
