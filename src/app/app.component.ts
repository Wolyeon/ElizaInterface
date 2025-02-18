import { Component } from '@angular/core';
import { ElizaService } from './eliza.service';
import { NgFor, NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Message } from './message';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  imports: [NgFor, NgIf, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  constructor(private es: ElizaService, private http: HttpClient) {};

  title = 'ElizaInterface';
  userIn = '';
  resp = '';

  // Array carrying the entire conversation on
  // On the client side.
  public conversation: Array<Message> = [];

  public postMessage(): void {
    this.es.postResponse(this.userIn).subscribe(
      data => this.resp = data,
    );
  }
}
