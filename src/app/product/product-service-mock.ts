import { ProductServiceMock } from '../test-shared/product-service-mock';

export const productServiceMock: ProductServiceMock = new ProductServiceMock(
    [
        {
          'id':  'product1', 
          'name': 'Mock Product 1', 
          'price': 100
        },
        {
          'id':  'product2', 
          'name': 'Mock Product 2', 
          'price': 50
        },
        {
          'id':  'product3', 
          'name': 'Mock Product 3', 
          'price': 200
        },
        {
          'id':  'product4', 
          'name': 'Mock Product 4', 
          'price': 77
        },
        {
          'id':  'product5', 
          'name': 'Mock Product 5', 
          'price': 46
        }
    
      ]
);
