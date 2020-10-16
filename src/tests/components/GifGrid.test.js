import { shallow } from 'enzyme'
import React from 'react'
import { GifGrid } from '../../components/GifGrid';
import useFetchGifs from '../../CustomHooks/useFetchGifs';
jest.mock('../../CustomHooks/useFetchGifs');
import '@testing-library/jest-dom';

describe('Pruebas sobre el componente <GifGrid />', () => {

    const category = 'onn punch';


    test('Test 1. ', () => {


        useFetchGifs.mockReturnValue({
            data: [],
            loading: true
        });

        const wrapper = shallow(<GifGrid category={category} />);
        expect(wrapper).toMatchSnapshot();
    })

    test('Test 2. debe de mostrar items cuando se cargan imagenes useFetch', () => {

        const gifs = [{
            id: '0001',
            url: 'https://localhost/data/cualquier-cosa.jpg',
            title: 'cualquier cosa'
        }];


        useFetchGifs.mockReturnValue({
            data: gifs,
            loading: false
        });

        const wrapper = shallow(<GifGrid category={category} />);
        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('p').exists()).toBe(false);
        expect(wrapper.find('GifItem').length).toBe(gifs.length);
    })

 



})