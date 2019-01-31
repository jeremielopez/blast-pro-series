import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RoutingService {
  title = new Subject<string>();

  constructor() {}

  setTitle(value: string) {
    this.title.next(value);
  }
}
