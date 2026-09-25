import { Component, ChangeDetectionStrategy } from '@angular/core';
import { NgClass } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { ExperienceComponent } from './experience/experience.component';
import { ProjectsComponent } from './projects/projects.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    changeDetection: ChangeDetectionStrategy.Eager,
    imports: [NgClass, HomeComponent, ExperienceComponent, ProjectsComponent, AboutComponent, ContactComponent]
})
export class AppComponent {
  currentYear: number = new Date().getFullYear();
  isMenuOpen: boolean = false;

  openMenu() {
    this.isMenuOpen = true;
  }

  closeMenu() {
    this.isMenuOpen = false;
  }

  scrollToSection(section: string) {
    document.getElementById(section)?.scrollIntoView({ behavior: 'smooth' });
  }

}
