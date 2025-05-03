import { NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

const newPages = [5, 4, 3, 2, 1];

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgIf, NgFor],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'mentoring-first-project';

  menu(menuItem: string) {
    return menuItem;
  }
  menuAlert = this.menu('О компании');

  readonly headerItem1 = 'Главная';
  readonly headerItem2 = 'О компании';
  readonly headerItem3 = 'Каталог';
  readonly header2Item2 = 'Стройматериалы';
  readonly header2Item3 = 'Инструменты';
  readonly header2Item4 = 'Электрика';
  readonly header2Item5 = 'Интерьер и одежда';
  readonly AboutCompany = this.menuAlert;

  readonly newPages = newPages;
  isShowMenu = true;

  isUpperCase = true;

  menuUpperHeader = [
    this.headerItem1,
    this.headerItem2,
    this.headerItem3,
  ];

  menuLowerHeader = [
    this.header2Item2,
    this.header2Item3,
    this.header2Item4,
    this.header2Item5,
    this.menuAlert,
  ]

  changeText() {
    this.menuUpperHeader = this.menuUpperHeader.map((menuUpperHeader) =>
      this.isUpperCase ? menuUpperHeader.toUpperCase() : menuUpperHeader.toLowerCase()
  );
    this.menuLowerHeader = this.menuLowerHeader.map((menuLowerHeader) =>
      this.isUpperCase ? menuLowerHeader.toUpperCase() : menuLowerHeader.toLowerCase() );

    this.isUpperCase = !this.isUpperCase;
  }
}


