import { NgClass } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { TabsModule } from 'primeng/tabs';
import { InputTextModule } from 'primeng/inputtext';
import { Checkbox } from 'primeng/checkbox';
import { UserService } from '../../../services/user.service';

@Component({
  selector: 'app-registration',
  imports: [NgClass, FormsModule, ButtonModule, TabsModule, InputTextModule, Checkbox],
  templateUrl: './registration.component.html',
  styleUrl: './registration.component.scss',
})
export class RegistrationComponent implements OnInit {
  login: string;
  password: string;
  repeatPassword: string;
  cardNumber: string;
  email: string;
  isRemember: boolean;
  labelText = 'Save password in storage';

  constructor(private userService: UserService) {}

  onAuth(ev: Event): void {
    console.log('ev', ev);
    this.userService.addUser({login: this.login, password: this.password})
  }

  ngOnInit(): void {
  }
}
