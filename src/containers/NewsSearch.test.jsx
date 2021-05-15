import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import NewsSearch from './NewsSearch';
require('dotenv').config();


describe('search page', () => {
    it('displays a list of news articles, updating results based on user input', async () => {
        render(<NewsSearch />);

        const ul = await screen.findByRole('list');
        expect(ul).not.toBeEmptyDOMElement();
        expect(ul).toMatchSnapshot();
    
        const input = await screen.findByLabelText('Search:');
        userEvent.type(input, 'Tesla');
        expect(input).toMatchSnapshot();
    
        const submitButton = await screen.findByRole('button', { name: 'search' })
        userEvent.click(submitButton);
        expect(submitButton).toMatchSnapshot();
    
        const article = await screen.findAllByRole('listitem', { name: 'article' })
        expect(article).toMatchSnapshot();
      });
    });
