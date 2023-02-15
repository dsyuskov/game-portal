import React from 'react';
import logo from '../../assets/logo.svg';

function Menu() {
  const menuItems = [
    {
      id: 1,
      text: 'Continue',
    },
    {
      id: 2,
      text: 'New Game',
    },
    {
      id: 3,
      text: 'Join Game',
    },
  ];
  const [itemSelected, setItemSelected] = React.useState(0);

  const menuItemHover = (event, id) => {
    event.stopPropagation();
    setItemSelected(id);
  };

  return (
    <div className="menu-container">
      <div className="menu" onMouseMove={() => setItemSelected(0)}>
        <div className="menu__logo">
          <img src={logo} alt="" />
        </div>
        <ul className="menu__list" onMouseMove={(event) => event.stopPropagation()}>
          {menuItems.map((item) => (
            <li
              className="menu__item"
              key={item.id}
              onMouseMove={(event) => menuItemHover(event, item.id)}
            >
              {item.text}
            </li>
          ))}
        </ul>
      </div>
      {itemSelected !== 0 && <div className="menu__content" />}
    </div>
  );
}

export default Menu;
