import React from 'react';
import logo from './assets/Logo.png';
import Filters from './components/filters';
import Playlists from './components/playlists';

function App() {
    return (
        <>
            <header>
                <img src={logo} alt="Logo" />
            </header>
            <Filters />
            <Playlists />
        </>
    );
}

export default App;
