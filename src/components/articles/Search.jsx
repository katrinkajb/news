import React from 'react';

export default function Search({ query, onSearchChange, onSubmit }) {
    return (
        <form onSubmit={onSubmit}>
            <label htmlFor='query'>Search: </label>
            <input
                id='query'
                type='text'
                value={query}
                onChange={onSearchChange}
            />
            <button aria-label='search'>Submit</button>
        </form>
    )
}
