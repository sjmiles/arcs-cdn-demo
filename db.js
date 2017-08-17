/**
 * @license
 * Copyright (c) 2017 Google Inc. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * Code distributed by Google as part of this project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */

 window.db = {
  views: [
    {
      name: "accounts",
      type: "Account",
      model: [
        {
          name: "My Pocket",
          balance: "3.35"
        },
        {
          name: "Gal's Bank",
          balance: "122.33"
        },
        {
          name: "Miskatonic Credit Union",
          balance: "999.99"
        }
      ]
    }
  ]
};
