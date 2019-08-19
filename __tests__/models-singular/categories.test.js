const Categories = require('../../models-singular/categories.js');
let categories = new Categories();

const supergoose = require('../supergoose.js');

describe('Categories Model (Singular)', () => {

  // How will you handle both the happy path and edge cases in these tests?

  it('can create() a new category', () => {
    let newCategory = {name: 'Shirts', description: 'Things you wear on top'};
    return categories.create(newCategory)
        .then((savedCategory) => {
          Object.keys(newCategory).forEach((key) => {
            expect(savedCategory[key]).toEqual(newCategory[key]);
          });
        });
  });

  it('can get() a category', () => {
    let newCategory = {name: 'Shorts', description: 'Things you wear on bottom'};
    return categories.create(newCategory)
        .then((savedCategory) => {
          return categories.get(savedCategory._id)
              .then( (returnedCategory) => {
                Object.keys(newCategory).forEach((key) => {
                  expect(returnedCategory[key]).toEqual(newCategory[key]);
                });
              });
        });
  });

  it('can get() all categories', () => {
      let newCategory = {name: 'Shorts', description: 'Things you wear on bottom'};
      let newCategory2 = {name: 'Shirts', description: 'Things you wear on top'};
      return categories.create(newCategory)
          .then( () => {
              return categories.create(newCategory2)
          })
          .then((savedCategory) => {
              return categories.get()
          })
          .then((foundCategory) => {
              expect(foundCategory.count).toEqual(4);
          })
  });

  it('can update() a category', () => {
    let newCategory = {name: 'Shorts', description: 'Things you wear on bottom'};
    return categories.create(newCategory)
        .then((savedCategory) => {
          return categories.get(savedCategory._id)
              .then( (returnedCategory) => {
               return categories.update(returnedCategory._id, {name: 'Pants', description: 'Things you wear on bottom'})
                   .then((updatedCategory) => {
                     expect(updatedCategory.name).toEqual('Pants');
                   })
                });
              });
  });

  it('can delete() a category', () => {
    let newCategory = {name: 'Shorts', description: 'Things you wear on bottom'};
    return categories.create(newCategory)
        .then((savedCategory) => {
          return categories.get(savedCategory._id)
              .then( (returnedCategory) => {
                return categories.delete(returnedCategory._id)
                    .then((deletedCategory) => {
                      return categories.get(deletedCategory._id)
                    })
                    .then((categories) => {
                        expect(categories).toEqual(null);
                    })
              });
        });
  });

});