import { NgModule } from "@angular/core";
import { HttpClient, HttpClientModule } from "@angular/common/http";

import { DataService } from "./data.services";


@NgModule({
    imports: [HttpClientModule],
    providers: [DataService]
})
export class CoreModule{}