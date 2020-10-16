import React from 'react';
import { renderHook } from '@testing-library/react-hooks';
import useFetchGifs from '../../CustomHooks/useFetchGifs';


describe('pruebas sobre el custom hook useFetchGifs', () => {


    test('test 1 debe retornar el estado inicial ', async () => {


        const { result, waitForNextUpdate } = renderHook(() => useFetchGifs('one punch'));

        const { data, loading } = result.current;

        await waitForNextUpdate();

        expect(data).toEqual([]);
        expect(loading).toBe(true);
    });


    test('test 1 debe retornar un arreglo de imagenes y el loading en false ', async () => {


        const { result, waitForNextUpdate } = renderHook(() => useFetchGifs('one punch'));
        await waitForNextUpdate();
        const { data, loading } = result.current;


        expect(data.length).toEqual(10);
        expect(loading).toBe(false);
    });


});