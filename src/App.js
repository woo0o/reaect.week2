import React from 'react';
import { Route } from 'react-router-dom';
import Add from './pages/Add';
import Main from './pages/Main';

function App() {
  return (
    <div className='App'>
      <Route path="/" component={Main} exact />
      <Route path="/add" component={Add} />
    </div>
  );
}
// 랜더링될 컴포넌트에 넣고 
// exact는 path에서만 해당 라우팅을 이뤄지도록 하라는 명령

export default App;