import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    changeDetection: ChangeDetectionStrategy.Eager
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