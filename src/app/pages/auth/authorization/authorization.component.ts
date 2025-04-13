import { NgClass } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { TabsModule } from 'primeng/tabs';
import { InputTextModule } from 'primeng/inputtext';
import { Checkbox } from 'primeng/checkbox';

@Component({
  selector: 'app-authorization',
  imports: [NgClass, FormsModule, ButtonModule, TabsModule, InputTextModule, Checkbox],
  templateUrl: './authorization.component.html',
  styleUrl: './authorization.component.scss',
})
export class AuthorizationComponent implements OnInit{
  login: string;
  password: string;
  repeatPassword: string;
  cardNumber: string;
  email: string;
  isRemember: boolean;
  labelText = 'Remember me';

  constructor(){}

  onAuth(): void{}
  ngOnInit(): void {
  }
}
