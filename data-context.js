/**
 * @license
 * Copyright (c) 2017 Google Inc. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * Code distributed by Google as part of this project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */

(function() {

let db = {
  people: [
    {
      name: "Claire"
    }
  ],
  products: [
    {
      name: "Minecraft Book",
      category: "Books",
      seller: "denile.com",
      price: "$14.50",
      shipDays: 7,
      image: "assets/products/book.png"
    },
    {
      name: "Power Tool Set",
      category: "Tools",
      seller: "denile.com",
      price: "$59.00",
      shipDays: 42,
      image: "assets/products/powertool.png"
    },
    {
      name: "Guardian of the Galaxy Figure",
      category: "Toys & Collectibles",
      seller: "denile.com",
      price: "$75.00",
      shipDays: 14,
      image: "assets/products/galaxy.png"
    }
  ]
};

let prepareDataContext = (arc, manifest) => {
  // uber arc
  let loader = arc._loader;
  let pageArc = arc;
  //let pageArc = new Arcs.Arc({loader, id: 'pageArc'});
  // bootstrap data context
  let Person = manifest.findSchemaByName('Person').entityClass();
  let Product = manifest.findSchemaByName('Product').entityClass();
  //let Person = loader.loadEntity('Person');
  //let Product = loader.loadEntity('Product');
  // TODO(sjmiles): empirically, views must exist before committing Entities
  let personView = pageArc.createView(Person.type.viewOf(), 'peopleFromWebpage');
  let productView = pageArc.createView(Product.type.viewOf(), 'productsFromWebpage');
  // commit entities
  pageArc.commit(db.people.map(p => new Person(p)));
  pageArc.commit(db.products.map(p => new Product(p)));

  // demo arc
  arc.createView(Person.type, 'personSlot');
  arc.mapView(personView);
  arc.mapView(productView);
  // return context objects
  return {pageArc, Person, Product};
}

//module.exports = prepareDataContext;
window.prepareDataContext = prepareDataContext;

})();