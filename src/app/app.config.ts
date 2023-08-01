import { BrowserAnimationsModule, provideAnimations } from "@angular/platform-browser/animations";
import { TuiAlertModule, TuiDialogModule, TuiRootModule } from "@taiga-ui/core";
import { ApplicationConfig, importProvidersFrom } from '@angular/core';

export const appConfig: ApplicationConfig = {
  providers: [importProvidersFrom(TuiRootModule, TuiDialogModule, TuiAlertModule, BrowserAnimationsModule), provideAnimations()]
};
