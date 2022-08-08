import { render, screen, fireEvent } from '@testing-library/react'
import React from 'react'
import SeachBox from './SeachBox'


const setup = () => {
    const setSearchValue = jest.fn();
    const utils = render(<SeachBox setSearchValue={setSearchValue} />)
    const input = utils.getByLabelText('text-input')
    return {
        input,
        setSearchValue,
        ...utils,
    }
}

test('SeachBox should have placeholder text', () => {
    setup()

    screen.getByPlaceholderText('Type to search...')
    expect(screen.getByPlaceholderText('Type to search...')).toBeTruthy()
});

test('SeachBox should have called setSearchValue function when typing in the input field', () => {
    const { input, setSearchValue } = setup()

    fireEvent.change(input, { target: { value: 'Happy' } });
    expect(setSearchValue).toHaveBeenCalledTimes(1);
});
