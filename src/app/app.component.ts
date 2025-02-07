import { Component, inject } from '@angular/core';
import { ElizaService } from './eliza.service';
import { NgFor, NgIf } from '@angular/common';
import { Observable } from 'rxjs';
import { FormsModule } from '@angular/forms';
import { Message } from './message';

@Component({
  selector: 'app-root',
  imports: [NgFor, NgIf, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ElizaInterface';
  userIn = '';

  // Array carrying the entire conversation on
  // On the client side.
  public conversation: Array<Message> = [];

  public postMessage(): void {
    this.conversation.push(new Message("user", this.userIn));
  }

}
