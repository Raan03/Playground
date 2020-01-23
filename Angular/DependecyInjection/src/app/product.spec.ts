import { Product } from './product.model';
import { MockPriceService } from './price-service/price-service.mock';

describe('Product', () => {
  let product : Product;

  beforeEach(() => {
    const service = new MockPriceService();
    product = new Product(service, 11.00);
  })

  describe('price', () => {
    it('is calculated based on the baseprice and state', () => {
      expect(product.totalPrice('FL')).toBe(11.66);
      expect(product.totalPrice('XX')).toBe(11.00);
    });
  })
});
