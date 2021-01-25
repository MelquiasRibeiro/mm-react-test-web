import React, { useState, useEffect } from 'react';
import axios from 'axios';

import { Container, Title, FiltersGroup, Select, Form } from './styles';

export default function index({ setFilters }) {
    const [locales, setLocales] = useState([]);
    const [selectedLocale, setSelecteLocale] = useState('');
    const [countries, setCountries] = useState([]);
    const [selectecountry, setSelectecountry] = useState('');
    const [name, setName] = useState('');
    const [timestamp, setTimestamp] = useState('');
    const [erro, setError] = useState();

    useEffect(() => {
        axios
            .get('http://www.mocky.io/v2/5a25fade2e0000213aa90776')
            .then((response) => {
                setLocales(response.data.filters[0].values);
                setCountries(response.data.filters[1].values);
            })
            .catch((error) => {
                setError(error);
                console.log(
                    `por favor, recarregue a página, houve um erro ERROR:${erro}`
                );
            });
    }, [erro]);

    function formatParams() {
        const params = `?${selectecountry}?${selectedLocale}?${timestamp}`;
        setFilters(params);
    }

    useEffect(() => {
        formatParams();
    }, [selectedLocale, selectecountry, timestamp]);
    return (
        <Container>
            <Title> Filters </Title>
            <FiltersGroup>
                <Form>
                    <Select
                        value={selectedLocale}
                        onChange={(e) => setSelecteLocale(e.target.value)}
                    >
                        <option value="0">Select a locale</option>
                        {locales.map((locale) => (
                            <option key={locale.name} value={locale.value}>
                                {locale.name}
                            </option>
                        ))}
                    </Select>
                    <Select
                        value={selectecountry}
                        onChange={(e) => setSelectecountry(e.target.value)}
                    >
                        <option value="0">Select a Country</option>
                        {countries.map((country) => (
                            <option key={country.name} value={country.value}>
                                {country.name}
                            </option>
                        ))}
                    </Select>
                    <input
                        type="datetime-local"
                        onChange={(e) => setTimestamp(e.target.value)}
                    />

                    <input
                        type="text"
                        placeholder="Search by Name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </Form>
            </FiltersGroup>
        </Container>
    );
}
