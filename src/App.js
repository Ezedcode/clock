import { useState } from 'react';
import BtTheme from './components/BtTheme';
import Clock from './components/Clock';
import GlobalVar from './context/GlobalVar';
import Global from './styles';
import { Theme2, Theme1 } from './styles/theme';

const App = () => {
  const [change, setChange] = useState(true);

  return (
    <GlobalVar.Provider value={
      {
        change,
        setChange
      }
    }>
      <div className='Header'><BtTheme /></div>
      <div className='Container'>
        <Clock />
      </div>
      {change ? <Theme1/>:<Theme2/>}
      <Global />
    </GlobalVar.Provider >
  );
}

export default App;
