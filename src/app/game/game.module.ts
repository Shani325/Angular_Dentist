import { NgModule } from "@angular/core";
import { BoolGameComponent } from "./bool-game/bool-game.component";
import { QueueComponent } from "./queue/queue.component";
import { ShowGuessessComponent } from "./show-guessess/show-guessess.component";
import { CommonModule } from '@angular/common';


@NgModule({
    declarations: [
        BoolGameComponent,
        ShowGuessessComponent,
        QueueComponent
    ],
    imports: [
        CommonModule
    ],
    exports: [
        BoolGameComponent
    ],
    providers: []
})
export class GameModule { }