import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-success-info',
  templateUrl: './success-info.component.html',
  styleUrls: ['./success-info.component.scss']
})
export class SuccessInfoComponent {

  constructor(private router: Router) { }

  goHome() {
    this.router.navigate(['/']);
  }

}
