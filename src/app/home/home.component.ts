import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  ngOnInit() {
    this.obfuscateEmail();
  }

  // an attempt at obfuscating my email against bots
  obfuscateEmail() {
    const emailLink = document.getElementById('email-link');
    const email = 'brianrclow' + '@' + 'gmail.com';
    if (emailLink) {
      emailLink.setAttribute('href', 'mailto:' + email);
    }
  }
}