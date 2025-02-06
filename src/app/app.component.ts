import { Component, inject } from '@angular/core';
import { ElizaService } from './eliza.service';
import { NgFor } from '@angular/common';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  imports: [NgFor],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ElizaInterface';

  // Array carrying the entire conversation on
  // On the client side.
  public conversation: Array<String> = [];

  public postMessage(): void {
    this.conversation.push("something2")
  }

}
