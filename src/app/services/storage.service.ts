import {Injectable} from '@angular/core';
import {Storage} from "@ionic/storage-angular";

@Injectable({
  providedIn: 'root'
})
export class StorageService {
  private _storage: Storage | null = null;

  constructor(private storage: Storage) {
    this.init();
  }

  async init() {
    this._storage = await this.storage.create();
  }

  public set(key: string, value: any) {
    this._storage?.set(key, value);
  }

  async get(key: string) {
    return this._storage?.get(key);
  }

  public remove(key: string) {
    this._storage?.remove(key);
  }

  public clear() {
    this._storage?.clear();
  }

  public keys() {
    return this._storage?.keys();
  }

  public length() {
    return this._storage?.length();
  }
}
