import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { TemplateDrivenFormsComponent } from './components/template-driven-forms/template-driven-forms.component';
import { ModelDrivenFormsComponent } from './components/model-driven-forms/model-driven-forms.component';

@Component({
  selector: 'app-root',
  imports: [ModelDrivenFormsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'contact-us';
}
