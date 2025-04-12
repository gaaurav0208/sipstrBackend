const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors({ origin: '*' }));
app.use(express.json());

const categories = [
  { categoryId: 1, categoryName: 'Beer', description: 'All kinds of beer', imageUrl: 'beer.jpg', isActive: true },
  { categoryId: 2, categoryName: 'Tequila', description: 'Various tequila brands', imageUrl: 'tequila.jpg', isActive: true },
  { categoryId: 3, categoryName: 'Wine', description: 'Collection of wines', imageUrl: 'wine.jpg', isActive: true },
  { categoryId: 4, categoryName: 'Whiskey', description: 'Different types of whiskey', imageUrl: 'whiskey.jpg', isActive: true }
];

const products = [
    {
      "productId": 1,
      "categoryId": 4,
      "productName": "Stout Ale",
      "description": "Light and crisp stout",
      "image": "https://cdn.pixabay.com/photo/2022/04/07/14/31/bottle-7117637_1280.jpg",
      "brand": "ThirstyBear",
      "categoryName": "Mead",
      "taxCategory": "Alcoholic Beverage",
      "hasTobacco": false,
      "hasCannabis": false,
      "allergenInfo": "Contains barley",
      "nutritionalInfo": "Calories: 124, Carbs: 12g",
      "alcoholByVolume": 5.3,
      "weightGrams": 750,
      "expiryDate": "2026-08-17",
      "alcoholic": true,
      "glutenFree": true,
      "kosher": true,
      "returnable": false,
      "perishable": false,
      "variantsDTO": [
        {
          "variantId": 101,
          "packageName": "6-Pack Cans",
          "unitPrice": 18.46,
          "volume": "500ml"
        },
        {
          "variantId": 102,
          "packageName": "8-Pack Bottles",
          "unitPrice": 11.26,
          "volume": "750ml"
        }
      ]
    },
    {
      "productId": 2,
      "categoryId": 3,
      "productName": "Pilsner Ale",
      "description": "Bold and hoppy pilsner",
      "image": "https://cdn.pixabay.com/photo/2017/01/21/21/15/beer-1998293_1280.jpg",
      "brand": "ThirstyBear",
      "categoryName": "Cider",
      "taxCategory": "Fermented Beverage",
      "hasTobacco": false,
      "hasCannabis": false,
      "allergenInfo": "Contains barley",
      "nutritionalInfo": "Calories: 174, Carbs: 14g",
      "alcoholByVolume": 6.9,
      "weightGrams": 750,
      "expiryDate": "2027-02-11",
      "alcoholic": true,
      "glutenFree": false,
      "kosher": true,
      "returnable": true,
      "perishable": false,
      "variantsDTO": [
        {
          "variantId": 103,
          "packageName": "12-Pack Bottles",
          "unitPrice": 22.24,
          "volume": "330ml"
        },
        {
          "variantId": 104,
          "packageName": "8-Pack Cans",
          "unitPrice": 20.69,
          "volume": "750ml"
        }
      ]
    },
    {
      "productId": 3,
      "categoryId": 4,
      "productName": "Porter Ale",
      "description": "Light and crisp porter",
      "image": "https://cdn.pixabay.com/photo/2017/01/21/21/15/beer-1998293_1280.jpg",
      "brand": "FrostyMug",
      "categoryName": "Mead",
      "taxCategory": "Fermented Beverage",
      "hasTobacco": false,
      "hasCannabis": false,
      "allergenInfo": "Contains barley",
      "nutritionalInfo": "Calories: 179, Carbs: 15g",
      "alcoholByVolume": 8.4,
      "weightGrams": 330,
      "expiryDate": "2026-08-12",
      "alcoholic": true,
      "glutenFree": true,
      "kosher": true,
      "returnable": false,
      "perishable": false,
      "variantsDTO": [
        {
          "variantId": 105,
          "packageName": "4-Pack Cans",
          "unitPrice": 22.76,
          "volume": "750ml"
        },
        {
          "variantId": 106,
          "packageName": "6-Pack Bottles",
          "unitPrice": 19.08,
          "volume": "750ml"
        },
        {
          "variantId": 107,
          "packageName": "12-Pack Cans",
          "unitPrice": 8.88,
          "volume": "330ml"
        }
      ]
    },
    {
      "productId": 4,
      "categoryId": 3,
      "productName": "Amber Ale Brew",
      "description": "Bold and hoppy amber",
      "image": "https://cdn.pixabay.com/photo/2022/04/07/14/31/bottle-7117637_1280.jpg",
      "brand": "HopKing",
      "categoryName": "Cider",
      "taxCategory": "Alcoholic Beverage",
      "hasTobacco": false,
      "hasCannabis": false,
      "allergenInfo": "Contains barley",
      "nutritionalInfo": "Calories: 125, Carbs: 14g",
      "alcoholByVolume": 6.2,
      "weightGrams": 330,
      "expiryDate": "2027-01-19",
      "alcoholic": true,
      "glutenFree": true,
      "kosher": false,
      "returnable": false,
      "perishable": true,
      "variantsDTO": [
        {
          "variantId": 108,
          "packageName": "6-Pack Bottles",
          "unitPrice": 20.52,
          "volume": "330ml"
        }
      ]
    },
    {
      "productId": 5,
      "categoryId": 4,
      "productName": "Wheat Beer Beer",
      "description": "Bold and hoppy wheat",
      "image": "https://cdn.pixabay.com/photo/2017/01/21/21/15/beer-1998293_1280.jpg",
      "brand": "ThirstyBear",
      "categoryName": "Mead",
      "taxCategory": "Alcoholic Beverage",
      "hasTobacco": false,
      "hasCannabis": false,
      "allergenInfo": "Contains barley",
      "nutritionalInfo": "Calories: 165, Carbs: 12g",
      "alcoholByVolume": 5.3,
      "weightGrams": 330,
      "expiryDate": "2026-10-13",
      "alcoholic": true,
      "glutenFree": false,
      "kosher": false,
      "returnable": true,
      "perishable": true,
      "variantsDTO": [
        {
          "variantId": 109,
          "packageName": "12-Pack Bottles",
          "unitPrice": 8.89,
          "volume": "500ml"
        },
        {
          "variantId": 110,
          "packageName": "8-Pack Cans",
          "unitPrice": 22.89,
          "volume": "500ml"
        }
      ]
    },
    {
      "productId": 6,
      "categoryId": 3,
      "productName": "Lager Ale",
      "description": "Bold and hoppy lager",
      "image": "https://cdn.pixabay.com/photo/2022/04/07/14/31/bottle-7117637_1280.jpg",
      "brand": "AleWorks",
      "categoryName": "Cider",
      "taxCategory": "Alcoholic Beverage",
      "hasTobacco": false,
      "hasCannabis": false,
      "allergenInfo": "Contains barley",
      "nutritionalInfo": "Calories: 141, Carbs: 10g",
      "alcoholByVolume": 4.5,
      "weightGrams": 500,
      "expiryDate": "2027-01-20",
      "alcoholic": true,
      "glutenFree": true,
      "kosher": true,
      "returnable": true,
      "perishable": true,
      "variantsDTO": [
        {
          "variantId": 111,
          "packageName": "12-Pack Bottles",
          "unitPrice": 24.6,
          "volume": "500ml"
        }
      ]
    },
    {
      "productId": 7,
      "categoryId": 1,
      "productName": "Porter Brew",
      "description": "Smooth and refreshing porter",
      "image": "https://cdn.pixabay.com/photo/2016/11/29/12/32/beach-1869523_1280.jpg",
      "brand": "FrostyMug",
      "categoryName": "Beer",
      "taxCategory": "Alcoholic Beverage",
      "hasTobacco": false,
      "hasCannabis": false,
      "allergenInfo": "Contains barley",
      "nutritionalInfo": "Calories: 138, Carbs: 12g",
      "alcoholByVolume": 4.9,
      "weightGrams": 330,
      "expiryDate": "2025-12-29",
      "alcoholic": true,
      "glutenFree": true,
      "kosher": true,
      "returnable": true,
      "perishable": false,
      "variantsDTO": [
        {
          "variantId": 112,
          "packageName": "6-Pack Bottles",
          "unitPrice": 14.85,
          "volume": "750ml"
        },
        {
          "variantId": 113,
          "packageName": "8-Pack Cans",
          "unitPrice": 13.58,
          "volume": "750ml"
        },
        {
          "variantId": 114,
          "packageName": "4-Pack Bottles",
          "unitPrice": 24.49,
          "volume": "500ml"
        }
      ]
    },
    {
      "productId": 8,
      "categoryId": 4,
      "productName": "Lager Beer",
      "description": "Dark and rich lager",
      "image": "https://cdn.pixabay.com/photo/2017/01/21/21/15/beer-1998293_1280.jpg",
      "brand": "AleWorks",
      "categoryName": "Mead",
      "taxCategory": "Alcoholic Beverage",
      "hasTobacco": false,
      "hasCannabis": false,
      "allergenInfo": "Contains barley",
      "nutritionalInfo": "Calories: 147, Carbs: 14g",
      "alcoholByVolume": 4.1,
      "weightGrams": 750,
      "expiryDate": "2026-10-12",
      "alcoholic": true,
      "glutenFree": true,
      "kosher": true,
      "returnable": false,
      "perishable": true,
      "variantsDTO": [
        {
          "variantId": 115,
          "packageName": "6-Pack Cans",
          "unitPrice": 18.18,
          "volume": "330ml"
        }
      ]
    },
    {
      "productId": 9,
      "categoryId": 4,
      "productName": "Amber Ale Ale",
      "description": "Light and crisp amber",
      "image": "https://cdn.pixabay.com/photo/2021/02/17/11/06/margarita-6023895_1280.jpg",
      "brand": "GoldenBrew",
      "categoryName": "Mead",
      "taxCategory": "Alcoholic Beverage",
      "hasTobacco": false,
      "hasCannabis": false,
      "allergenInfo": "Contains barley",
      "nutritionalInfo": "Calories: 155, Carbs: 11g",
      "alcoholByVolume": 8.2,
      "weightGrams": 750,
      "expiryDate": "2027-03-12",
      "alcoholic": true,
      "glutenFree": true,
      "kosher": true,
      "returnable": false,
      "perishable": false,
      "variantsDTO": [
        {
          "variantId": 116,
          "packageName": "12-Pack Bottles",
          "unitPrice": 19.98,
          "volume": "500ml"
        },
        {
          "variantId": 117,
          "packageName": "6-Pack Cans",
          "unitPrice": 8.27,
          "volume": "750ml"
        },
        {
          "variantId": 118,
          "packageName": "4-Pack Bottles",
          "unitPrice": 20.5,
          "volume": "750ml"
        }
      ]
    },
    {
      "productId": 10,
      "categoryId": 4,
      "productName": "Lager Brew",
      "description": "Smooth and refreshing lager",
      "image": "https://cdn.pixabay.com/photo/2017/01/21/21/15/beer-1998293_1280.jpg",
      "brand": "ThirstyBear",
      "categoryName": "Mead",
      "taxCategory": "Alcoholic Beverage",
      "hasTobacco": false,
      "hasCannabis": false,
      "allergenInfo": "Contains barley",
      "nutritionalInfo": "Calories: 158, Carbs: 20g",
      "alcoholByVolume": 6.6,
      "weightGrams": 330,
      "expiryDate": "2026-12-09",
      "alcoholic": true,
      "glutenFree": false,
      "kosher": true,
      "returnable": true,
      "perishable": true,
      "variantsDTO": [
        {
          "variantId": 119,
          "packageName": "12-Pack Cans",
          "unitPrice": 21.14,
          "volume": "500ml"
        },
        {
          "variantId": 120,
          "packageName": "6-Pack Bottles",
          "unitPrice": 9.24,
          "volume": "500ml"
        },
        {
          "variantId": 121,
          "packageName": "12-Pack Bottles",
          "unitPrice": 9.85,
          "volume": "330ml"
        }
      ]
    },
    {
      "productId": 11,
      "categoryId": 2,
      "productName": "Lager Brew",
      "description": "Dark and rich lager",
      "image": "https://cdn.pixabay.com/photo/2014/08/10/18/06/beers-414914_1280.jpg",
      "brand": "ThirstyBear",
      "categoryName": "Wine",
      "taxCategory": "Alcoholic Beverage",
      "hasTobacco": false,
      "hasCannabis": false,
      "allergenInfo": "Contains barley",
      "nutritionalInfo": "Calories: 139, Carbs: 19g",
      "alcoholByVolume": 5.1,
      "weightGrams": 330,
      "expiryDate": "2026-04-19",
      "alcoholic": true,
      "glutenFree": false,
      "kosher": false,
      "returnable": false,
      "perishable": false,
      "variantsDTO": [
        {
          "variantId": 122,
          "packageName": "4-Pack Cans",
          "unitPrice": 17.63,
          "volume": "750ml"
        },
        {
          "variantId": 123,
          "packageName": "4-Pack Cans",
          "unitPrice": 23.6,
          "volume": "500ml"
        },
        {
          "variantId": 124,
          "packageName": "12-Pack Cans",
          "unitPrice": 21.56,
          "volume": "500ml"
        }
      ]
    },
    {
      "productId": 12,
      "categoryId": 3,
      "productName": "Lager Brew",
      "description": "Bold and hoppy lager",
      "image": "https://cdn.pixabay.com/photo/2017/01/21/21/15/beer-1998293_1280.jpg",
      "brand": "Sunset Brew",
      "categoryName": "Cider",
      "taxCategory": "Fermented Beverage",
      "hasTobacco": false,
      "hasCannabis": false,
      "allergenInfo": "Contains barley",
      "nutritionalInfo": "Calories: 130, Carbs: 10g",
      "alcoholByVolume": 4.8,
      "weightGrams": 750,
      "expiryDate": "2027-02-19",
      "alcoholic": true,
      "glutenFree": false,
      "kosher": true,
      "returnable": true,
      "perishable": false,
      "variantsDTO": [
        {
          "variantId": 125,
          "packageName": "8-Pack Cans",
          "unitPrice": 24.94,
          "volume": "750ml"
        }
      ]
    },
    {
      "productId": 13,
      "categoryId": 2,
      "productName": "Stout Brew",
      "description": "Light and crisp stout",
      "image": "https://cdn.pixabay.com/photo/2017/01/21/21/15/beer-1998293_1280.jpg",
      "brand": "BrewMaster",
      "categoryName": "Wine",
      "taxCategory": "Alcoholic Beverage",
      "hasTobacco": false,
      "hasCannabis": false,
      "allergenInfo": "Contains barley",
      "nutritionalInfo": "Calories: 198, Carbs: 20g",
      "alcoholByVolume": 7.0,
      "weightGrams": 750,
      "expiryDate": "2026-01-21",
      "alcoholic": true,
      "glutenFree": true,
      "kosher": true,
      "returnable": true,
      "perishable": false,
      "variantsDTO": [
        {
          "variantId": 126,
          "packageName": "6-Pack Bottles",
          "unitPrice": 18.82,
          "volume": "750ml"
        }
      ]
    },
    {
      "productId": 14,
      "categoryId": 4,
      "productName": "Porter Ale",
      "description": "Bold and hoppy porter",
      "image": "https://cdn.pixabay.com/photo/2017/01/21/21/15/beer-1998293_1280.jpg",
      "brand": "Hops & Barley",
      "categoryName": "Mead",
      "taxCategory": "Fermented Beverage",
      "hasTobacco": false,
      "hasCannabis": false,
      "allergenInfo": "Contains barley",
      "nutritionalInfo": "Calories: 200, Carbs: 19g",
      "alcoholByVolume": 6.8,
      "weightGrams": 330,
      "expiryDate": "2026-10-03",
      "alcoholic": true,
      "glutenFree": false,
      "kosher": true,
      "returnable": false,
      "perishable": false,
      "variantsDTO": [
        {
          "variantId": 127,
          "packageName": "8-Pack Bottles",
          "unitPrice": 21.29,
          "volume": "750ml"
        },
        {
          "variantId": 128,
          "packageName": "8-Pack Cans",
          "unitPrice": 23.75,
          "volume": "750ml"
        }
      ]
    },
    {
      "productId": 15,
      "categoryId": 3,
      "productName": "Porter Ale",
      "description": "Light and crisp porter",
      "image": "https://cdn.pixabay.com/photo/2022/04/07/14/31/bottle-7117637_1280.jpg",
      "brand": "AleWorks",
      "categoryName": "Cider",
      "taxCategory": "Fermented Beverage",
      "hasTobacco": false,
      "hasCannabis": false,
      "allergenInfo": "Contains barley",
      "nutritionalInfo": "Calories: 170, Carbs: 16g",
      "alcoholByVolume": 8.7,
      "weightGrams": 750,
      "expiryDate": "2027-02-19",
      "alcoholic": true,
      "glutenFree": false,
      "kosher": true,
      "returnable": false,
      "perishable": true,
      "variantsDTO": [
        {
          "variantId": 129,
          "packageName": "4-Pack Cans",
          "unitPrice": 10.25,
          "volume": "330ml"
        }
      ]
    },
    {
      "productId": 16,
      "categoryId": 4,
      "productName": "Pilsner Ale",
      "description": "Dark and rich pilsner",
      "image": "https://cdn.pixabay.com/photo/2021/02/17/11/06/margarita-6023895_1280.jpg",
      "brand": "FrostyMug",
      "categoryName": "Mead",
      "taxCategory": "Fermented Beverage",
      "hasTobacco": false,
      "hasCannabis": false,
      "allergenInfo": "Contains barley",
      "nutritionalInfo": "Calories: 190, Carbs: 15g",
      "alcoholByVolume": 7.3,
      "weightGrams": 330,
      "expiryDate": "2026-08-09",
      "alcoholic": true,
      "glutenFree": true,
      "kosher": true,
      "returnable": true,
      "perishable": false,
      "variantsDTO": [
        {
          "variantId": 130,
          "packageName": "4-Pack Cans",
          "unitPrice": 23.72,
          "volume": "330ml"
        },
        {
          "variantId": 131,
          "packageName": "12-Pack Bottles",
          "unitPrice": 8.22,
          "volume": "750ml"
        }
      ]
    },
    {
      "productId": 17,
      "categoryId": 1,
      "productName": "Wheat Beer Beer",
      "description": "Light and crisp wheat",
      "image": "https://cdn.pixabay.com/photo/2017/01/21/21/15/beer-1998293_1280.jpg",
      "brand": "GoldenBrew",
      "categoryName": "Beer",
      "taxCategory": "Fermented Beverage",
      "hasTobacco": false,
      "hasCannabis": false,
      "allergenInfo": "Contains barley",
      "nutritionalInfo": "Calories: 182, Carbs: 16g",
      "alcoholByVolume": 6.4,
      "weightGrams": 500,
      "expiryDate": "2025-10-16",
      "alcoholic": true,
      "glutenFree": true,
      "kosher": true,
      "returnable": false,
      "perishable": true,
      "variantsDTO": [
        {
          "variantId": 132,
          "packageName": "6-Pack Cans",
          "unitPrice": 13.23,
          "volume": "330ml"
        },
        {
          "variantId": 133,
          "packageName": "8-Pack Cans",
          "unitPrice": 22.8,
          "volume": "750ml"
        }
      ]
    },
    {
      "productId": 18,
      "categoryId": 2,
      "productName": "IPA Ale",
      "description": "Light and crisp ipa",
      "image": "https://cdn.pixabay.com/photo/2014/08/10/18/06/beers-414914_1280.jpg",
      "brand": "Hops & Barley",
      "categoryName": "Wine",
      "taxCategory": "Fermented Beverage",
      "hasTobacco": false,
      "hasCannabis": false,
      "allergenInfo": "Contains barley",
      "nutritionalInfo": "Calories: 182, Carbs: 10g",
      "alcoholByVolume": 8.9,
      "weightGrams": 500,
      "expiryDate": "2026-05-03",
      "alcoholic": true,
      "glutenFree": true,
      "kosher": true,
      "returnable": true,
      "perishable": true,
      "variantsDTO": [
        {
          "variantId": 134,
          "packageName": "4-Pack Cans",
          "unitPrice": 22.46,
          "volume": "330ml"
        }
      ]
    },
    {
      "productId": 19,
      "categoryId": 1,
      "productName": "Amber Ale Beer",
      "description": "Dark and rich amber",
      "image": "https://cdn.pixabay.com/photo/2021/02/17/11/06/margarita-6023895_1280.jpg",
      "brand": "AleWorks",
      "categoryName": "Beer",
      "taxCategory": "Alcoholic Beverage",
      "hasTobacco": false,
      "hasCannabis": false,
      "allergenInfo": "Contains barley",
      "nutritionalInfo": "Calories: 175, Carbs: 10g",
      "alcoholByVolume": 4.2,
      "weightGrams": 330,
      "expiryDate": "2026-07-13",
      "alcoholic": true,
      "glutenFree": true,
      "kosher": true,
      "returnable": false,
      "perishable": true,
      "variantsDTO": [
        {
          "variantId": 135,
          "packageName": "12-Pack Cans",
          "unitPrice": 23.12,
          "volume": "750ml"
        }
      ]
    },
    {
      "productId": 20,
      "categoryId": 3,
      "productName": "Wheat Beer Brew",
      "description": "Dark and rich wheat",
      "image": "https://cdn.pixabay.com/photo/2014/08/10/18/06/beers-414914_1280.jpg",
      "brand": "AleWorks",
      "categoryName": "Cider",
      "taxCategory": "Fermented Beverage",
      "hasTobacco": false,
      "hasCannabis": false,
      "allergenInfo": "Contains barley",
      "nutritionalInfo": "Calories: 190, Carbs: 20g",
      "alcoholByVolume": 4.8,
      "weightGrams": 750,
      "expiryDate": "2027-03-10",
      "alcoholic": true,
      "glutenFree": true,
      "kosher": false,
      "returnable": true,
      "perishable": false,
      "variantsDTO": [
        {
          "variantId": 136,
          "packageName": "8-Pack Bottles",
          "unitPrice": 13.15,
          "volume": "500ml"
        },
        {
          "variantId": 137,
          "packageName": "6-Pack Bottles",
          "unitPrice": 15.71,
          "volume": "750ml"
        },
        {
          "variantId": 138,
          "packageName": "12-Pack Bottles",
          "unitPrice": 23.53,
          "volume": "330ml"
        }
      ]
    },
    {
      "productId": 21,
      "categoryId": 3,
      "productName": "Lager Beer",
      "description": "Bold and hoppy lager",
      "image": "https://cdn.pixabay.com/photo/2014/08/10/18/06/beers-414914_1280.jpg",
      "brand": "ThirstyBear",
      "categoryName": "Cider",
      "taxCategory": "Alcoholic Beverage",
      "hasTobacco": false,
      "hasCannabis": false,
      "allergenInfo": "Contains barley",
      "nutritionalInfo": "Calories: 193, Carbs: 15g",
      "alcoholByVolume": 4.1,
      "weightGrams": 330,
      "expiryDate": "2026-08-06",
      "alcoholic": true,
      "glutenFree": true,
      "kosher": false,
      "returnable": true,
      "perishable": false,
      "variantsDTO": [
        {
          "variantId": 139,
          "packageName": "4-Pack Cans",
          "unitPrice": 20.78,
          "volume": "500ml"
        }
      ]
    },
    {
      "productId": 22,
      "categoryId": 4,
      "productName": "IPA Beer",
      "description": "Dark and rich ipa",
      "image": "https://cdn.pixabay.com/photo/2017/01/21/21/15/beer-1998293_1280.jpg",
      "brand": "FrostyMug",
      "categoryName": "Mead",
      "taxCategory": "Fermented Beverage",
      "hasTobacco": false,
      "hasCannabis": false,
      "allergenInfo": "Contains barley",
      "nutritionalInfo": "Calories: 167, Carbs: 12g",
      "alcoholByVolume": 5.5,
      "weightGrams": 500,
      "expiryDate": "2026-08-04",
      "alcoholic": true,
      "glutenFree": true,
      "kosher": true,
      "returnable": true,
      "perishable": true,
      "variantsDTO": [
        {
          "variantId": 140,
          "packageName": "12-Pack Cans",
          "unitPrice": 13.18,
          "volume": "750ml"
        },
        {
          "variantId": 141,
          "packageName": "6-Pack Cans",
          "unitPrice": 13.81,
          "volume": "330ml"
        }
      ]
    },
    {
      "productId": 23,
      "categoryId": 2,
      "productName": "Stout Brew",
      "description": "Smooth and refreshing stout",
      "image": "https://cdn.pixabay.com/photo/2022/04/07/14/31/bottle-7117637_1280.jpg",
      "brand": "HopKing",
      "categoryName": "Wine",
      "taxCategory": "Fermented Beverage",
      "hasTobacco": false,
      "hasCannabis": false,
      "allergenInfo": "Contains barley",
      "nutritionalInfo": "Calories: 193, Carbs: 16g",
      "alcoholByVolume": 8.3,
      "weightGrams": 750,
      "expiryDate": "2026-02-10",
      "alcoholic": true,
      "glutenFree": true,
      "kosher": true,
      "returnable": true,
      "perishable": true,
      "variantsDTO": [
        {
          "variantId": 142,
          "packageName": "8-Pack Bottles",
          "unitPrice": 19.46,
          "volume": "500ml"
        },
        {
          "variantId": 143,
          "packageName": "4-Pack Bottles",
          "unitPrice": 22.67,
          "volume": "500ml"
        },
        {
          "variantId": 144,
          "packageName": "4-Pack Cans",
          "unitPrice": 16.3,
          "volume": "750ml"
        }
      ]
    },
    {
      "productId": 24,
      "categoryId": 4,
      "productName": "Lager Brew",
      "description": "Bold and hoppy lager",
      "image": "https://cdn.pixabay.com/photo/2017/01/21/21/15/beer-1998293_1280.jpg",
      "brand": "HopKing",
      "categoryName": "Mead",
      "taxCategory": "Alcoholic Beverage",
      "hasTobacco": false,
      "hasCannabis": false,
      "allergenInfo": "Contains barley",
      "nutritionalInfo": "Calories: 120, Carbs: 13g",
      "alcoholByVolume": 5.6,
      "weightGrams": 330,
      "expiryDate": "2025-11-17",
      "alcoholic": true,
      "glutenFree": true,
      "kosher": true,
      "returnable": false,
      "perishable": true,
      "variantsDTO": [
        {
          "variantId": 145,
          "packageName": "6-Pack Cans",
          "unitPrice": 13.03,
          "volume": "750ml"
        }
      ]
    },
    {
      "productId": 25,
      "categoryId": 3,
      "productName": "Stout Beer",
      "description": "Dark and rich stout",
      "image": "https://cdn.pixabay.com/photo/2021/02/17/11/06/margarita-6023895_1280.jpg",
      "brand": "ThirstyBear",
      "categoryName": "Cider",
      "taxCategory": "Alcoholic Beverage",
      "hasTobacco": false,
      "hasCannabis": false,
      "allergenInfo": "Contains barley",
      "nutritionalInfo": "Calories: 197, Carbs: 18g",
      "alcoholByVolume": 7.6,
      "weightGrams": 330,
      "expiryDate": "2026-01-07",
      "alcoholic": true,
      "glutenFree": false,
      "kosher": false,
      "returnable": false,
      "perishable": false,
      "variantsDTO": [
        {
          "variantId": 146,
          "packageName": "12-Pack Bottles",
          "unitPrice": 18.55,
          "volume": "500ml"
        }
      ]
    },
    {
      "productId": 26,
      "categoryId": 2,
      "productName": "Sour Beer",
      "description": "Light and crisp sour",
      "image": "https://cdn.pixabay.com/photo/2021/02/17/11/06/margarita-6023895_1280.jpg",
      "brand": "FrostyMug",
      "categoryName": "Wine",
      "taxCategory": "Alcoholic Beverage",
      "hasTobacco": false,
      "hasCannabis": false,
      "allergenInfo": "Contains barley",
      "nutritionalInfo": "Calories: 155, Carbs: 11g",
      "alcoholByVolume": 5.9,
      "weightGrams": 500,
      "expiryDate": "2026-06-19",
      "alcoholic": true,
      "glutenFree": false,
      "kosher": false,
      "returnable": true,
      "perishable": false,
      "variantsDTO": [
        {
          "variantId": 147,
          "packageName": "12-Pack Bottles",
          "unitPrice": 13.89,
          "volume": "750ml"
        }
      ]
    },
    {
      "productId": 27,
      "categoryId": 2,
      "productName": "Lager Brew",
      "description": "Dark and rich lager",
      "image": "https://cdn.pixabay.com/photo/2017/01/21/21/15/beer-1998293_1280.jpg",
      "brand": "FrostyMug",
      "categoryName": "Wine",
      "taxCategory": "Fermented Beverage",
      "hasTobacco": false,
      "hasCannabis": false,
      "allergenInfo": "Contains barley",
      "nutritionalInfo": "Calories: 149, Carbs: 14g",
      "alcoholByVolume": 4.4,
      "weightGrams": 500,
      "expiryDate": "2025-11-06",
      "alcoholic": true,
      "glutenFree": true,
      "kosher": false,
      "returnable": true,
      "perishable": false,
      "variantsDTO": [
        {
          "variantId": 148,
          "packageName": "8-Pack Bottles",
          "unitPrice": 17.77,
          "volume": "500ml"
        }
      ]
    },
    {
      "productId": 28,
      "categoryId": 4,
      "productName": "Wheat Beer Beer",
      "description": "Smooth and refreshing wheat",
      "image": "https://cdn.pixabay.com/photo/2022/04/07/14/31/bottle-7117637_1280.jpg",
      "brand": "AleWorks",
      "categoryName": "Mead",
      "taxCategory": "Fermented Beverage",
      "hasTobacco": false,
      "hasCannabis": false,
      "allergenInfo": "Contains barley",
      "nutritionalInfo": "Calories: 187, Carbs: 10g",
      "alcoholByVolume": 4.2,
      "weightGrams": 750,
      "expiryDate": "2026-07-10",
      "alcoholic": true,
      "glutenFree": false,
      "kosher": false,
      "returnable": false,
      "perishable": true,
      "variantsDTO": [
        {
          "variantId": 149,
          "packageName": "6-Pack Bottles",
          "unitPrice": 22.59,
          "volume": "500ml"
        }
      ]
    },
    {
      "productId": 29,
      "categoryId": 1,
      "productName": "Porter Brew",
      "description": "Dark and rich porter",
      "image": "https://cdn.pixabay.com/photo/2014/08/10/18/06/beers-414914_1280.jpg",
      "brand": "Sunset Brew",
      "categoryName": "Beer",
      "taxCategory": "Alcoholic Beverage",
      "hasTobacco": false,
      "hasCannabis": false,
      "allergenInfo": "Contains barley",
      "nutritionalInfo": "Calories: 144, Carbs: 16g",
      "alcoholByVolume": 4.3,
      "weightGrams": 750,
      "expiryDate": "2025-11-13",
      "alcoholic": true,
      "glutenFree": true,
      "kosher": false,
      "returnable": false,
      "perishable": false,
      "variantsDTO": [
        {
          "variantId": 150,
          "packageName": "8-Pack Bottles",
          "unitPrice": 8.13,
          "volume": "500ml"
        },
        {
          "variantId": 151,
          "packageName": "4-Pack Bottles",
          "unitPrice": 8.03,
          "volume": "750ml"
        },
        {
          "variantId": 152,
          "packageName": "12-Pack Cans",
          "unitPrice": 10.48,
          "volume": "330ml"
        }
      ]
    },
    {
      "productId": 30,
      "categoryId": 4,
      "productName": "Porter Beer",
      "description": "Light and crisp porter",
      "image": "https://cdn.pixabay.com/photo/2021/02/17/11/06/margarita-6023895_1280.jpg",
      "brand": "Sunset Brew",
      "categoryName": "Mead",
      "taxCategory": "Alcoholic Beverage",
      "hasTobacco": false,
      "hasCannabis": false,
      "allergenInfo": "Contains barley",
      "nutritionalInfo": "Calories: 146, Carbs: 18g",
      "alcoholByVolume": 7.3,
      "weightGrams": 750,
      "expiryDate": "2026-02-06",
      "alcoholic": true,
      "glutenFree": true,
      "kosher": false,
      "returnable": false,
      "perishable": false,
      "variantsDTO": [
        {
          "variantId": 153,
          "packageName": "4-Pack Bottles",
          "unitPrice": 9.51,
          "volume": "750ml"
        },
        {
          "variantId": 154,
          "packageName": "6-Pack Cans",
          "unitPrice": 19.24,
          "volume": "330ml"
        }
      ]
    }
  ];
const stores  = [
    {
      "storeId": 9007199254740991,
      "uuid": "3fa85f64-5717-4562-b3fc-2c963f66afa1",
      "storeName": "Fresh Mart",
      "corporationName": "Fresh Foods Inc.",
      "ein": 1073741824,
      "licenseNumber": 1073741824,
      "description": "A grocery store offering fresh and organic produce.",
      "addressId": 9007199254740991,
      "ownerId": 9007199254740991,
      "contactEmail": "contact@freshmart.com",
      "contactPhone": "+1234567890",
      "deliveryRadiusKm": 5,
      "minimumOrderAmount": 20,
      "averagePreparationTime": 30,
      "isCurrentlyAcceptingOrders": true,
      "rating": 4.5,
      "taxRate": 0.07,
      "commissionRate": 0.05,
      "isActive": true,
      "createdAt": "2025-04-10T16:46:07.556Z",
      "updatedAt": "2025-04-10T16:46:07.556Z",
      "operatingHoursList": [
        {
          "id": 9007199254740991,
          "store": "Fresh Mart",
          "dayOfWeek": 1,
          "openingTime": "08:00 AM",
          "closingTime": "08:00 PM",
          "isClosed": false,
          "createdAt": "2025-04-10T16:46:07.556Z",
          "updatedAt": "2025-04-10T16:46:07.556Z"
        }
      ],
      "holidayHoursList": [
        {
          "id": 9007199254740991,
          "store": "Fresh Mart",
          "holidayDate": "2025-04-10",
          "openingTime": "10:00 AM",
          "closingTime": "11:00 PM",
          "isClosed": false,
          "createdAt": "2025-04-10T16:46:07.556Z"
        }
      ]
    },
    {
      "storeId": 9007199254740992,
      "uuid": "3fa85f64-5717-4562-b3fc-2c963f66afa2",
      "storeName": "Quick Stop",
      "corporationName": "Quick Mart LLC",
      "ein": 1073741825,
      "licenseNumber": 1073741825,
      "description": "A convenience store open 24/7 for all your needs.",
      "addressId": 9007199254740992,
      "ownerId": 9007199254740992,
      "contactEmail": "support@quickstop.com",
      "contactPhone": "+1987654321",
      "deliveryRadiusKm": 2,
      "minimumOrderAmount": 10,
      "averagePreparationTime": 15,
      "isCurrentlyAcceptingOrders": true,
      "rating": 4.2,
      "taxRate": 0.06,
      "commissionRate": 0.04,
      "isActive": true,
      "createdAt": "2025-04-10T16:46:07.556Z",
      "updatedAt": "2025-04-10T16:46:07.556Z",
      "operatingHoursList": [
        {
          "id": 9007199254740992,
          "store": "Quick Stop",
          "dayOfWeek": 1,
          "openingTime": "00:00 AM",
          "closingTime": "11:59 PM",
          "isClosed": false,
          "createdAt": "2025-04-10T16:46:07.556Z",
          "updatedAt": "2025-04-10T16:46:07.556Z"
        }
      ],
      "holidayHoursList": [
        {
          "id": 9007199254740992,
          "store": "Quick Stop",
          "holidayDate": "2025-12-31",
          "openingTime": "00:00 AM",
          "closingTime": "11:59 PM",
          "isClosed": false,
          "createdAt": "2025-04-10T16:46:07.556Z"
        }
      ]
    }
  ];
  
app.get('/categories', (req, res) => {
  res.json(categories);
});

app.get('/stores', (req, res) => {
    res.json(stores);
  });

  
app.get('/category/:id/products', (req, res) => {
  const categoryId = parseInt(req.params.id);
  const page = parseInt(req.query.page) || 1;
  const size = parseInt(req.query.size) || 10;
  
  const categoryProducts = products.filter(product => product.categoryId === categoryId);
  const totalElements = categoryProducts.length;
  const totalPages = Math.ceil(totalElements / size);
  const paginatedProducts = categoryProducts.slice((page - 1) * size, page * size);

  res.json({
    totalElements,
    totalPages,
    size,
    content: paginatedProducts,
    number: page,
    sort: { empty: true, sorted: false, unsorted: true },
    numberOfElements: paginatedProducts.length,
    pageable: { offset: (page - 1) * size, pageNumber: page, pageSize: size, paged: true, unpaged: false },
    first: page === 1,
    last: page === totalPages,
    empty: paginatedProducts.length === 0
  });
});

app.get('/products/:id', (req, res) => {
  const productId = parseInt(req.params.id);
  const product = products.find(prod => prod.productId === productId);
  product ? res.json(product) : res.status(404).json({ message: 'Product not found' });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
