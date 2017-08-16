window.db = {
  views: [
    {
      //name: "people",
      type: "Person",
      model: [
        {
          name: "Claire"
        }
      ]
    },
    {
      type: "Product",
      model: [
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
    },
    {
      name: "wishlist",
      type: "Product",
      model: [
        {
          name: "Book: How to Draw",
          category: "Books",
          seller: "gutenburger.com",
          price: "$14.50",
          shipDays: 7,
          image: "assets/products/draw-book.png"
        },
        {
          name: "Arduino Starter Pack",
          category: "",
          seller: "arduino.cc",
          //price: "$64.95"
          //shipDays: 42
          image: "assets/products/arduino.png"
        },
        {
          name: "Field Hockey Stick",
          category: "Sports & Outdoor",
          seller: "denile.com",
          price: "$29.00",
          shipDays: 3,
          image: "assets/products/hockeystick.png"
        }
      ]
    }
  ]
};

