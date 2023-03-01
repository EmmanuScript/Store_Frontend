import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss'],
})
export class UserDetailsComponent {
  firstName: string = '';
  address: string = '';
  creditCard: string = '';

  @Output() addUser: EventEmitter<any> = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  submitForm(): void {
    const userDetails = {
      firstName: this.firstName,
      address: this.address,
      creditCard: this.creditCard,
    };

    this.addUser.emit(userDetails);

    this.firstName = '';
    this.address = '';
    this.creditCard = '';
  }
}
