import React from 'react'
import renderer from 'react-test-renderer';
import { ProductCard, ProductImage } from '../../src/components';
import { product2 } from '../data/products';


describe('ProductImage', () => {
	test('debe de mostar el componente correctamente con el titulo personalizado', () => {

		const wrapper = renderer.create(
			<ProductImage 
				img='https://hola.jgg'
			/>
		)

		expect( wrapper.toJSON() ).toMatchSnapshot();
		

	});

	test('Debe de mostrar el componente con el nombre del product', () => {
		
		const wrapper = renderer.create(
			<ProductCard product={product2}>
				{
					() => (
						<ProductImage />
					)
				}
			</ProductCard>
		)

		expect( wrapper.toJSON() ).toMatchSnapshot();
		


	});
})






