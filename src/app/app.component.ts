import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { TitleComponent } from './title/title.component';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, TitleComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public currentLang!: string;
  constructor(private translate: TranslateService){
    this.currentLang = translate.currentLang || translate.getDefaultLang();
  }

  public changeLang(){
    this.currentLang === 'es' ? this.translate.use('en') : this.translate.use('es');
    this.currentLang = this.translate.currentLang;
  }
}
