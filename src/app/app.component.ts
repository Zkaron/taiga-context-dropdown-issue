import { NgDompurifySanitizer } from "@tinkoff/ng-dompurify";
import { TuiRootModule, TuiDialogModule, TuiAlertModule, TUI_SANITIZER, TuiDropdownModule, TuiSvgModule, TuiButtonModule } from "@taiga-ui/core";
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule, TuiRootModule, TuiDialogModule, TuiAlertModule,
    TuiDropdownModule, TuiSvgModule, TuiButtonModule
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
        providers: [{provide: TUI_SANITIZER, useClass: NgDompurifySanitizer}]
    })
export class AppComponent {
  title = 'taiga-standalone';
}
