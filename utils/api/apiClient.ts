import { APIRequestContext, APIResponse } from '@playwright/test';
import { config } from '../config';

export class ApiClient {
  constructor(private request: APIRequestContext) {}

  private buildUrl(endpoint: string): string {
    return config.api.baseUrl + endpoint;
  }

  async get(endpoint: string): Promise<APIResponse> {
    return this.request.get(this.buildUrl(endpoint));
  }

  async post(endpoint: string, data?: any): Promise<APIResponse> {
    return this.request.post(this.buildUrl(endpoint), { data });
  }

  async put(endpoint: string, data?: any): Promise<APIResponse> {
    return this.request.put(this.buildUrl(endpoint), { data });
  }

  async delete(endpoint: string, data?: any): Promise<APIResponse> {
    return this.request.delete(this.buildUrl(endpoint), { data });
  }
}

