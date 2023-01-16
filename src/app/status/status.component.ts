import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-status',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './status.component.html',
  styleUrls: ['./status.component.scss']
})
export class StatusComponent {
  CurrentTime = new Date();
  UserAgent = navigator.userAgent;
  Languages = navigator.languages;
  Cookie = navigator.cookieEnabled;
  LogicalProcessors = navigator.hardwareConcurrency;
  MaxTouch = navigator.maxTouchPoints;
}
