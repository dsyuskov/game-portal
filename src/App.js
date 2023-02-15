import React from 'react';

import Header from './components/Header';
import Game from './components/Game';
import Menu from './components/menu/Menu';

function App() {
  const [isShowMenu, setShowMenu] = React.useState(true);

  return (
    <div className="App">
      {isShowMenu ? (
        <Menu />
      ) : (
        <>
          <Header />
          <Game />
        </>
      )}
    </div>
  );
}

export default App;
