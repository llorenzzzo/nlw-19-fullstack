const app = document.getElementById("app");

const formAction = () => {
  document.getElementById("form");
  form.onSubmit = (event) => {
    event.preventDefault();
  };
};

const startApp = () => {
  const content = `
    <form id="form">
    <input type="email" name="email" placeholder="E-mail" />
    <input type="text" name="phone" placeholder="Telefone" />
    <button type="submit">Confirmar</button>
    </form>;
    `;
  app.innerHTML = content;
};
startApp();
