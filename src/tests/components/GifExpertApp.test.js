import { shallow } from 'enzyme';
import React from 'react'
import { GifExpertApp } from '../../components/GifExpertApp';
import '@testing-library/jest-dom';




describe('Tests en el componente <GifExpertApp />', () => {


    test('Test 1. ', () => {

        const wrapper = shallow(<GifExpertApp />);

        expect(wrapper).toMatchSnapshot();
    });


    test('Test 1. ', () => {

        const categories = ['one punch man', 'samurai x'];
        const wrapper = shallow(<GifExpertApp categoriesDefault={categories} />);

        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('GifGrid').length).toBe(categories.length);
    });


});

