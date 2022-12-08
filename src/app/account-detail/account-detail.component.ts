import { Component, OnInit, Input, } from '@angular/core';
import { Account } from '../account';
import { AccountService } from '../account.service';
import { AccountComponent } from '../account/account.component';

@Component({
  selector: 'app-account-detail',
  templateUrl: './account-detail.component.html',
  styleUrls: ['./account-detail.component.css']
})


export class AccountDetailComponent {
  @Input() account?: Account;

  constructor(private accountService: AccountService,
    private accountComponent: AccountComponent) { }

  ngOnInit(): void { }

  onDelete(): void {
    if (this.account) {
      this.accountService.deleteAccount(this.account.id)
        .subscribe();
      this.accountComponent.loadAccounts();
      this.reset();
    }
  }

  onSave(balance: number): void {
    if (this.account) {
      this.accountService.updateAccount(this.account.id, this.account.nama, balance, this.account.norek)
        .subscribe();
    }
    this.accountComponent.loadAccounts();
  }

  reset(): void {
    this.account = undefined;
  }
}
