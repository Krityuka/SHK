import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';

import { RequestService } from '../../services/request.service';
import { AuthService } from '../../services/auth.service';

import { Request } from '../../entities/request';

@Component({
  selector: 'request-edit',
  templateUrl: './request-edit.component.html',
  styleUrls: ['./request-edit.component.css']
})
export class RequestEditComponent implements OnInit {

  id: number = null;
  request: Request = new Request();
  title = 'New request';

  constructor(
    private route: ActivatedRoute,
    private requestService: RequestService,
    private location: Location,
    private router: Router,
    private authService: AuthService
  ) { }

  async ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.id = +id;
      this.request = await this.requestService.getRequest(this.id);
      this.title = 'Edit order';
    }
  }

  async onFormSave(request: Request) {
    console.log("HITTING");
    if (this.id) {
      await this.requestService.updateRequest(request)
      this.location.back();
    } else {
      await this.requestService.createRequest(request);
      this.router.navigate(['/requests']);
    }
  }

}