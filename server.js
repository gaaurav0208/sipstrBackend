const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors({ origin: 'http://localhost:8005' }));
app.use(express.json());

const categories = [
  { categoryId: 1, categoryName: 'Beer', description: 'All kinds of beer', imageUrl: 'beer.jpg', isActive: true },
  { categoryId: 2, categoryName: 'Tequila', description: 'Various tequila brands', imageUrl: 'tequila.jpg', isActive: true },
  { categoryId: 3, categoryName: 'Wine', description: 'Collection of wines', imageUrl: 'wine.jpg', isActive: true },
  { categoryId: 4, categoryName: 'Whiskey', description: 'Different types of whiskey', imageUrl: 'whiskey.jpg', isActive: true }
];

const products = [
  {
    productId: 1,
    categoryId: 1,
    productName: 'Lager Beer',
    description: 'Smooth and refreshing lager',
    brand: 'BrewMaster',
    categoryName: 'Beer',
    taxCategory: 'Alcoholic Beverage',
    hasTobacco: false,
    hasCannabis: false,
    allergenInfo: 'Contains barley',
    nutritionalInfo: 'Calories: 150, Carbs: 13g',
    alcoholByVolume: 5.0,
    weightGrams: 500,
    expiryDate: '2025-04-01',
    alcoholic: true,
    glutenFree: false,
    kosher: false,
    returnable: true,
    perishable: false,
    variantsDTO: [
      { variantId: 101, packageName: '6-Pack Bottles', unitPrice: 9.99, volume: '330ml' },
      { variantId: 102, packageName: '12-Pack Cans', unitPrice: 18.99, volume: '330ml' }
    ]
  },
  {
    productId: 2,
    categoryId: 1,
    productName: 'IPA Beer',
    description: 'Hoppy and strong IPA',
    brand: 'HopKing',
    variantsDTO: [
      { variantId: 103, packageName: '4-Pack Bottles', unitPrice: 11.99, volume: '500ml' },
      { variantId: 104, packageName: '8-Pack Cans', unitPrice: 22.99, volume: '500ml' }
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
