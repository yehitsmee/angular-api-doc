import { Injectable } from '@angular/core';
import api from '../assets/api.json';
import pet from '../assets/pet.json';
import store from '../assets/store.json';
import user from '../assets/user.json';

@Injectable()
export class ApiService {
  // spec = api;
  constructor() {}
  getSwaggerUI() {
    return api;
  }
  getApi(type: string) {
    if (type === 'Pet') {
      return pet;
    } else if (type === 'Store') {
      return store;
    } else if (type === 'User') {
      return user;
    } else {
      return api;
    }
  }
}
