import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LayoutService {

  private isWestExpanded = new BehaviorSubject<boolean>(false);
  isWestExpanded$ = this.isWestExpanded.asObservable();

  toggleWestContainer(isExpanded: boolean): void {
    this.isWestExpanded.next(isExpanded);
  }
}
