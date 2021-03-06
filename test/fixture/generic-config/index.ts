import {NgModule, Component} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {CommonModule} from '@angular/common';
import { AboutModule } from './about.module';

export class BasicViewProvider {}

@Component({
  selector: 'main-component',
  template: '<div *ngIf="visible">Hello world</div>',
  viewProviders: [BasicViewProvider]
})
export class MainComponent {
  visible: boolean;
}

export class BasicProvider {}

@NgModule({
  imports: [CommonModule, BrowserModule, AboutModule],
  exports: [MainComponent],
  declarations: [MainComponent],
  bootstrap: [MainComponent],
  providers: [BasicProvider]
})
export class AppModule {}
