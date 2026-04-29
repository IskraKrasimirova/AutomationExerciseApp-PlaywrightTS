import { ApiClient } from './apiClient';
import { ApiUrls } from './apiUrls';

export class ProductsApi {
  constructor(private client: ApiClient) {}

  async getAllProducts() {
    return this.client.get(ApiUrls.productsList);
  }
}

