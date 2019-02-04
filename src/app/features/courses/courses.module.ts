import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CoursesListComponent } from './courses-list/courses-list.component';
import { CoursesListItemComponent } from './courses-list-item/courses-list-item.component';
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';
import { PaintBorderDirective } from './directives/paint-border.directive';
import { DurationPipe } from './pipes/duration.pipe';
import { OrderByPipe } from './pipes/order-by.pipe';
import { FilterPipe } from './pipes/filter.pipe';
import { CourseService } from './services/course.service';

@NgModule({
  declarations: [
    CoursesListComponent,
    CoursesListItemComponent,
    BreadcrumbsComponent,
    PaintBorderDirective,
    DurationPipe,
    OrderByPipe,
    FilterPipe
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    CoursesListComponent
  ],
  providers: [
    FilterPipe,
    CourseService
  ]
})
export class CoursesModule { }
