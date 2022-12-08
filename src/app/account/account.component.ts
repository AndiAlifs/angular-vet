import { Component, OnInit  } from '@angular/core';
import { Account } from '../account';
import { AccountDetailComponent } from '../account-detail/account-detail.component';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent {
  accounts: Account[] = [{
    nama: 'John Doe',
    saldo: 1000000,
    norek: '1234567890'
  }, {
    nama: 'Jane Doe',
    saldo: 2000000,
    norek: '0987654321'}]
  ;

  constructor() { }

  ngOnInit(): void { }

  selectedAccount?: Account;

  onSelect(account: Account): void {
    this.selectedAccount = account;
    console.log(this.selectedAccount);
  }
}
