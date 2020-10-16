import { shallow } from 'enzyme';
import React from 'react';
import { GifItem } from '../../components/GifItem'




describe('Test en el componenten <GifItem />', () => {


    const title = 'un título';
    const url = 'algo';
    const wrapper = shallow(<GifItem url={url} title={title} />);

    test('Prueba que el componente se muestra correctamente', () => {
        expect(wrapper).toMatchSnapshot();
    });


    test('Prueba 2', () => {
        const p = wrapper.find('p');
        expect(p.text().trim()).toBe(title);
    });
    

});

