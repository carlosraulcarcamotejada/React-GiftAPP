import { shallow } from 'enzyme';
import React from 'react';
import { AddCategory } from '../../components/AddCategory'
import '@testing-library/jest-dom';


describe('Test en el componenten <AddCategory />', () => {


    const setCategories = jest.fn();

    let wrapper = shallow(<AddCategory setCategories={setCategories} />);


    beforeEach(() => {
        jest.clearAllMocks();
        wrapper = shallow(<AddCategory setCategories={setCategories} />);
    });




    test('Test 1. Debe mostrar <AddCategory setCategories={setCategories} /> correctamente', () => {

        expect(wrapper).toMatchSnapshot();
    });


    test('Test 2. Debe cambiar el valor del input', () => {


        const value = 'Hola Mundo';

        wrapper.find('input').simulate('change', { target: { value } });

        expect(wrapper.find('input').prop('value')).toBe(value);
    });




    test('Test 3 no debe postear la información  ', () => {

        wrapper.find('form').simulate('submit', { preventDefault() { } })

        expect(setCategories).not.toHaveBeenCalled();

    })


    test('Test 4 debe llamar setCategories y limpiar la caja', () => {

        const value = 'Hello World'

        wrapper.find('input').simulate('change', { target: { value } });

        wrapper.find('form').simulate('submit', { preventDefault() { } });

        expect(setCategories).toHaveBeenCalled();

        expect(wrapper.find('input').prop('value')).toBe('');


    })


});

