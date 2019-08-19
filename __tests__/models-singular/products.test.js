const Products = require('../../models-singular/products.js');
let products = new Products();

const supergoose = require('../supergoose.js');

describe('Products Model (Singular)', () => {

    let newProduct = {
        name: 'Red TShirt',
        description: 'Red Cotton T Shirt',
        quantity: 10,
        sku: 'T47S',
        size: 's'
    };
    // How will you handle both the happy path and edge cases in these tests?

    it('can create() a new product', () => {
        return products.create(newProduct)
            .then((savedProduct) => {
                Object.keys(newProduct).forEach((key) => {
                    expect(savedProduct[key]).toEqual(newProduct[key]);
                });
            });
    });

    it('can get() a Product', () => {
        return products.create(newProduct)
            .then((savedProduct) => {
                return products.get(savedProduct._id)
                    .then( (returnedProduct) => {
                        Object.keys(newProduct).forEach((key) => {
                            expect(returnedProduct[key]).toEqual(newProduct[key]);
                        });
                    });
            });
    });

    it('can get() all products', () => {

    });

    it('can update() a Product', () => {
        let newProduct = {
            name: 'Red TShirt',
            description: 'Red Cotton T Shirt',
            quantity: 10,
            sku: 'T47S',
            size: 's'
        };
        let updateProduct = {
            name: 'Blue TShirt',
            description: 'Blue Cotton T Shirt',
            quantity: 10,
            sku: 'T47S',
            size: 's'
        };
        return products.create(newProduct)
            .then((savedProduct) => {
                return products.get(savedProduct._id)
                    .then( (returnedProduct) => {
                        return products.update(returnedProduct._id, updateProduct)
                            .then((updatedProduct) => {
                                expect(updatedProduct.name).toEqual('Blue TShirt');
                            })
                    });
            });
    });

    it('can delete() a Product', () => {
        return products.create(newProduct)
            .then((savedProduct) => {
                return products.get(savedProduct._id)
                    .then( (returnedProduct) => {
                        return products.delete(returnedProduct._id)
                            .then((deletedProduct) => {
                                return products.get(deletedProduct._id)
                            })
                            .then((products) => {
                                console.log(products);
                                expect(products).toEqual(null);
                            })
                    });
            });
    });

});