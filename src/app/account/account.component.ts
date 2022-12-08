import { Component, OnInit  } from '@angular/core';
import { Account } from '../account';
import { AccountDetailComponent } from '../account-detail/account-detail.component';

import { AccountService } from '../account.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent {
  accounts: Account[] = [];

  constructor(private accountService: AccountService) { }

  ngOnInit(): void {
    this.loadAccounts();
  }

  selectedAccount?: Account;

  onSelect(account: Account): void {
    this.selectedAccount = account;
    console.log(this.selectedAccount);
  }

  loadAccounts(): void {
    this.accountService.getAccounts()
      .subscribe(accounts => this.accounts = accounts);
  }
}
