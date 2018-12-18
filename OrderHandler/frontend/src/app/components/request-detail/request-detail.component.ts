import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from "@angular/router";
import { Request } from "../../entities/request";
import { RequestService } from "../../services/request.service";

@Component({
  selector: 'app-request-detail',
  templateUrl: './request-detail.component.html',
  styleUrls: ['./request-detail.component.css']
})
export class RequestDetailComponent implements OnInit {

  request: Request = new Request();

  constructor(
    private route: ActivatedRoute,
    private requestService: RequestService
  ) { }

  async ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.request = await this.requestService.getRequest(id);
  }

}
