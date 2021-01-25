import React, { useState, useEffect } from 'react';
import axios from 'axios';
import logo from './assets/Logo.png';
import Filters from './components/filters';
import Playlists from './components/playlists';
import { token } from './services/token';

function App() {
    const [filters, setFilters] = useState();
    const [playlists, setPlaylists] = useState([]);
    const [loading, setLoading] = useState(true);

    function getPlayLists() {
        axios
            .get(
                `https://api.spotify.com/v1/browse/featured-playlists?${
                    filters || ''
                }`,
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }
            )
            .then((response) => {
                setPlaylists(response.data.playlists.items);
                setLoading(false);
            })
            .catch((error) => {
                const erro = error;
                return erro;
            });
    }
    // new get when filters change
    useEffect(() => {
        getPlayLists();
    }, [filters]);

    // new get every 30 seconds
    useEffect(() => {
        setInterval(() => {
            getPlayLists();
        }, 30000);
    }, []);

    return (
        <>
            <header>
                <img src={logo} alt="Logo" />
            </header>
            <Filters setFilters={setFilters} />
            <Playlists playlists={playlists} loading={loading} />
        </>
    );
}

export default App;
