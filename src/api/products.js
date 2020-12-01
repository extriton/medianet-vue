const products = [
	{
		photo: '1',
		sku: '154236857',
		caption: 'Носки соваб 1 шт',
		platform: 'Ozon',
		category: 'Одежда, обувь, аксессуары',
		brand: 'HAPPESTAR',
		seller: 'TM Ukid',
		color: '',
		availability: 2,
		comment: 17,
		rating: 2.55,
		spp: 1.33,
		average: 1,
		potential: 700,
		price: 300,
		stock: 5,
		sales: 15,
		proceeds: 1234
	},
	{
		photo: '2',
		sku: '548621879',
		caption: 'Носки соваб 1 шт',
		platform: 'Ozon',
		category: 'Одежда, обувь, аксессуары',
		brand: 'HAPPESTAR',
		seller: 'TM Ukid',
		color: '',
		availability: 5,
		comment: 121,
		rating: 3.55,
		spp: 1.55,
		average: 2,
		potential: 300,
		price: 750,
		stock: 8,
		sales: 33,
		proceeds: 5432
	},
	{
		photo: '3',
		sku: '555888777',
		caption: 'Носки соваб 1 шт',
		platform: 'Ozon',
		category: 'Одежда, обувь, аксессуары',
		brand: 'HAPPESTAR',
		seller: 'TM Ukid',
		color: '',
		availability: 3,
		comment: 22,
		rating: 5.44,
		spp: 2.77,
		average: 3,
		potential: 430,
		price: 120,
		stock: 12,
		sales: 44,
		proceeds: 5555
	},
]
/*eslint-disable no-unused-vars*/
export const getProductsList = (searchParapms, filterParams) => {
    return new Promise(resolve => {
		// Prepare GET string and Call api for getting real data here
        resolve(products)
    })
}
