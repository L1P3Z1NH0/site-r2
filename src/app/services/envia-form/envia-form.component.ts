import { Component, OnInit } from '@angular/core';
import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-envia-form',
  templateUrl: './envia-form.component.html',
  styleUrls: ['./envia-form.component.scss']
})
@Injectable()
export class EnviaFormComponent implements OnInit {

  constructor(private http:HttpClient) { }

  performGetEx():Observable<any>{
    return this.http.get<any>('../assets/enviaForm.php');
}

  ngOnInit(): void {
  }

}
