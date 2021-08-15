/* eslint-disable jsx-a11y/anchor-is-valid */

export const Navbar = ({ name, age, setting, write, user_data, logout }) => {
  return (
    <>
      <header>
        <div className="menu">
          <div className="menu-right">
            <a onClick={() => window.alert("This is a button! 🦋 ")}>
              <img className="menu-icon" src="/assets/home.png" alt="" />
            </a>
          </div>
          <div className="menu-left">
            <a onClick={() => window.alert("This is a button! 🦋 ")}>
              <img className="avatar" src="/assets/avatar.png" alt="" />
            </a>
            <div className="menu-title">
              <h1>{name}</h1>

              <p>{age}</p>

              <div>
                <a onClick={() => window.alert("This is a button! 🦋 ")}>
                  <img src="/assets/pen.png" alt="" />
                </a>
              </div>
            </div>
            <ul className="options-list">
              <li>
                <a onClick={() => window.alert("This is a button! 🦋 ")}>
                  <img src="/assets/funcionalidades.png" alt="" />
                </a>
                <p>{setting}</p>
              </li>
              <li>
                <a onClick={() => window.alert("This is a button! 🦋 ")}>
                  <img src="/assets/anotações.png" alt="" />
                </a>
                <p>{write}</p>
              </li>
              <li>
                <a onClick={() => window.alert("This is a button! 🦋 ")}>
                  <img src="/assets/dados-paciente.png" alt="" />
                </a>
                <p>{user_data}</p>
              </li>
              <li>
                <a onClick={() => window.alert("This is a button! 🦋 ")}>
                  <img src="/assets/finalizar-consulta.png" alt="" />
                </a>
                <p>{logout}</p>
              </li>
            </ul>
          </div>
        </div>
      </header>
    </>
  );
};
