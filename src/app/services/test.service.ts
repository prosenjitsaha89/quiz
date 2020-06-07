import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TestService {

  constructor() { }

  data = [
    { fName: 'Prosenjit', lName: 'Saha' },
    { fName: 'Souvik', lName: 'Dey' },
    { fName: 'Nabanita', lName: 'Roy' },
    { fName: 'Estilo', lName: 'Chatterjee' },
  ]
}
