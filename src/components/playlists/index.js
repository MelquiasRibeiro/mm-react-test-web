import React from 'react';

import { Container, Title, GridContainer, Grid, ItemGrind } from './styles';

export default function index({ playlists }) {
    return (
        <Container>
            <Title>Playlists</Title>
            <GridContainer>
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
            </GridContainer>
        </Container>
    );
}
