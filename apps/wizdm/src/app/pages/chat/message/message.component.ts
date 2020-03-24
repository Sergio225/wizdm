import { Component, Input } from '@angular/core';
import { Message } from 'app/core/chat';
import moment from 'moment';

@Component({
  selector: 'wm-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.scss'],
  host: { 
    "class": "wm-message",
    "[class.in]": "dir === 'in'",
    "[class.out]": "dir === 'out'" }
})
export class ChatMessage {

  @Input() message: Message;

  constructor() {}

  get body(): string {
    return this.message && this.message.body || '';
  }

  get sender(): string {
    return this.message && this.message.sender || ''; 
  }

  get time(): string {
    const stamp = this.message && this.message.timestamp || '0';
    return moment(stamp, 'x').format('HH:mm');
  }

  get dir(): 'in'|'out' {
    return this.sender === 'me' ? 'out' : 'in';
  }

  get color() {

    switch(this.dir) {
      case 'in':
      return 'accent';

      case 'out':
      return 'primary';
    }

    return undefined;
  }

  get side() {

    switch(this.dir) {
      case 'in':
      return 'left';

      case 'out':
      return 'right';
    }

    return undefined;
  }
}