import { NgClass } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { TabsModule } from 'primeng/tabs';
import { InputTextModule } from 'primeng/inputtext';
import { Checkbox } from 'primeng/checkbox';

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
  constructor() {}

  onAuth(): void {

  }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
}
