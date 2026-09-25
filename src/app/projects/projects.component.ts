import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
    selector: 'app-projects',
    templateUrl: './projects.component.html',
    changeDetection: ChangeDetectionStrategy.Eager
})
export class ProjectsComponent {
  scrollToContact() {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  }
}
