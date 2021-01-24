import React from 'react';
import { Container, Title, FiltersGroup, Select, Form } from './styles';

export default function index() {
    return (
        <Container>
            <Title> Filters </Title>
            <FiltersGroup>
                <Form>
                    <Select>
                        <option value="0">Locale</option>
                    </Select>
                    <Select>
                        <option value="0">Country</option>
                    </Select>
                    <input type="datetime-local" />

                    <input type="text" placeholder="Search by Name" />
                </Form>
            </FiltersGroup>
        </Container>
    );
}
