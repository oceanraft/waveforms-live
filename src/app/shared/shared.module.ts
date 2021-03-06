import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from 'ionic-angular';
import { TooltipModule } from '../../directives/tooltip/tooltip.module';

import { GenPopover } from '../../components/gen-popover/gen-popover.component';
import { DropdownPopoverComponent } from '../../components/dropdown-popover/dropdown-popover.component';
import { DropDownMenu } from '../../libs/digilent-ionic2-utilities/drop-down-menu/drop-down-menu.component';
import { UnitFormatPipe } from '../../pipes/unit-format.pipe';
import { ProgressBarComponent } from '../../components/progress-bar/progress-bar.component';
import { DigilentChartModule } from 'digilent-chart-angular2/modules'; 
import { FormatInputDirective } from '../../directives/format-input/format-input.directive';
import { PinoutPopover } from '../../components/pinout-popover/pinout-popover.component';
import { MathPopoverComponent } from '../../components/math-popover/math-popover.component';
import { CursorPopoverComponent } from '../../components/cursor-popover/cursor-popover.component';
 
@NgModule({
    imports: [
        CommonModule,
        IonicModule.forRoot(GenPopover),
        IonicModule.forRoot(DropDownMenu),
        IonicModule.forRoot(DropdownPopoverComponent),
        IonicModule.forRoot(ProgressBarComponent),
        IonicModule.forRoot(PinoutPopover),
        IonicModule.forRoot(MathPopoverComponent),
        IonicModule.forRoot(CursorPopoverComponent)
    ],
    declarations: [
        GenPopover,
        DropDownMenu,
        DropdownPopoverComponent,
        UnitFormatPipe,
        ProgressBarComponent,
        FormatInputDirective,
        MathPopoverComponent,
        CursorPopoverComponent,
        PinoutPopover
    ],
    exports: [
        GenPopover,
        UnitFormatPipe,
        DropDownMenu,
        DropdownPopoverComponent,
        CommonModule,
        FormsModule,
        TooltipModule,
        ProgressBarComponent,
        DigilentChartModule,
        FormatInputDirective,
        MathPopoverComponent,
        CursorPopoverComponent,
        PinoutPopover
    ]
})
export class SharedModule { }