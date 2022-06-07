import { NgModule } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { AppToolbarComponent } from './app-toolbar.component'

@NgModule({
    imports: [
        MatToolbarModule,
        MatIconModule,
        MatButtonModule,
    ],
    declarations: [AppToolbarComponent],
    exports: [AppToolbarComponent],
})
export class AppToolbarComponentModule { }
