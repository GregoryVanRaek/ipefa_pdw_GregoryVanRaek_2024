import { Component, Input } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';
import { faArrowUpFromBracket, faChartSimple, faHouse, faUser } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-dashboard-router',
  standalone: true,
  imports: [
    RouterOutlet,
    FaIconComponent,
  ],
  templateUrl: './dashboard-router.component.html',
  styleUrl: './dashboard-router.component.scss'
})
export class DashboardRouterComponent {
  username:string = "Gregory Van Raek";
  state:string = "Student";
  protected readonly faUser = faUser;

  protected readonly faChartSimple = faChartSimple;
  protected readonly faHouse = faHouse;
  protected readonly faArrowUpFromBracket = faArrowUpFromBracket;
}
