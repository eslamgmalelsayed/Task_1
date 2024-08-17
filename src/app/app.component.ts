import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'Task_1';
  userName: string = 'Eslam';
  showPara = true;
  clicksArr: string[] = [];
  count = 0;


  public reset(): void {
    this.userName = ''
  }
  public displayDetails(): void {
    this.showPara = !this.showPara
    // this.count++
    this.clicksArr.push(++this.count + 'click')
  }
}
