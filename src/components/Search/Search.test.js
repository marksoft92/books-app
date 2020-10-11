import React from 'react';
import {render,fireEvent} from '@testing-library/jest-dom';
import Search from './Search';
import '@testing-library/jest-dom/extend-expect'

test("result after user types value",async()=>{
    const {getByLabelText}=render(<Search />)
    const input = getByLabelText('{props.value}')
    fireEvent.
})