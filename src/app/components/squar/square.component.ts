import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-square',
  template: `
    <button nbButton *ngIf="!value">{{ value }}</button>
    <button nbButton hero status="success" class="success" *ngIf="value == 'X'">{{ value }}</button>
    <button nbButton hero status="info" class=""default *ngIf="value == 'O'">{{ value }}</button>
  `,
  styles: ['button { width: 100%; height: 100%; font-size: 5em !important;border:1px solid #eaeaea; }']
})
export class SquareComponent  {
  @Input()
  value!: 'X' | 'O';

}