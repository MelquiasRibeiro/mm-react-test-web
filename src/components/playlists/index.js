import React, { useEffect } from 'react';
import { FaSpinner } from 'react-icons/fa';
import { Container, Title, GridContainer, Grid, ItemGrind } from './styles';

export default function index({ playlists, loading }) {
    useEffect(() => {
        console.log(playlists);
    }, [playlists]);
    return (
        <Container>
            <Title>Playlists</Title>
            <GridContainer loading={loading}>
                {loading ? (
                    <FaSpinner size={48} color="#FAFAFA" />
                ) : (
                    <Grid>
                        {playlists.map((playlist) => (
                            <ItemGrind key={playlist.id}>
                                <img
                                    src={playlist.images[0].url}
                                    alt="playlist tumb"
                                />
                                <h1>{playlist.name}</h1>
                                <p>{playlist.description}</p>
                            </ItemGrind>
                        ))}
                    </Grid>
                )}
            </GridContainer>
        </Container>
    );
}
