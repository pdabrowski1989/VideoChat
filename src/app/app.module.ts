import {NgModule} from '@angular/core';
import {BrowserModule}  from '@angular/platform-browser';

// Components
import {MainComponent} from './components/Main/main.component';

@NgModule({
    imports: [
        BrowserModule
    ],
    declarations: [
        MainComponent
    ],
    bootstrap: [
        MainComponent
    ]
})
export class AppModule {}