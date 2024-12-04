import { Component, OnInit } from '@angular/core';
import { Router,RouterOutlet, NavigationEnd, ActivatedRoute } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { filter, map } from 'rxjs/operators';
import { IconSetService } from '@coreui/icons-angular';
import { iconSubset } from './icons/icon-subset';



@Component({
  selector: 'app-root',
  template: '<router-outlet></router-outlet>',
  standalone: true,
  imports: [RouterOutlet]
})
export class AppComponent implements OnInit {
  title = 'IT Admin Dashboard';

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private titleService: Title,
    public iconSet: IconSetService
  ) {
    iconSet.icons = { ...iconSubset };
  }

  ngOnInit() {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd),
      map(() => {
        let child = this.activatedRoute.firstChild;
        while (child?.firstChild) {
          child = child.firstChild;
        }
        return child;
      }),
      filter(route => route?.outlet === 'primary'),
      map(route => route?.snapshot.data['title'])
    ).subscribe((title: string) => {
      this.titleService.setTitle(title);
    });
  }
}