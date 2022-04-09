import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreModule } from '../core/core.module';
import { FormsModule } from '@angular/forms';




import { People } from './people.component'
import { FilterTextboxComponent } from './filter-textbox.component';



@NgModule({
  imports: [CommonModule, CoreModule, FormsModule],
  declarations: [People , FilterTextboxComponent],
  exports: [People, CoreModule]
})
export class PeopleModule { }
