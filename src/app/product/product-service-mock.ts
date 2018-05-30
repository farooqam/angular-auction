import { ProductServiceMock } from '../test-shared/product-service-mock';

const thumbnailUri: string = 'http://placehold.it/320x150';

export const productServiceMock: ProductServiceMock = new ProductServiceMock(
    [
        {
          'id':  'product1', 
          'name': 'Mock Product 1', 
          'price': 100,
          'thumbnailUri': thumbnailUri
        },
        {
          'id':  'product2', 
          'name': 'Mock Product 2', 
          'price': 50.99,
          'thumbnailUri': thumbnailUri
        },
        {
          'id':  'product3', 
          'name': 'Mock Product 3', 
          'price': 200,
          'thumbnailUri': thumbnailUri
        },
        {
          'id':  'product4', 
          'name': 'Mock Product 4', 
          'price': 77,
          'thumbnailUri': thumbnailUri
        },
        {
          'id':  'product5', 
          'name': 'Mock Product 5', 
          'price': 46,
          'thumbnailUri': thumbnailUri
        }
    
      ]
);
