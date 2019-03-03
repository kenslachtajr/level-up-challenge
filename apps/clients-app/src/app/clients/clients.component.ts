import { Component, OnInit } from '@angular/core';
import { Observable, empty } from 'rxjs';
import { Client, ClientsService } from '@workspace/core-data';

@Component({
  selector: 'workspace-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.scss']
})
export class ClientsComponent implements OnInit {
  client: Client;
  clients$: Observable<Client[]>;

  constructor(private clientsService: ClientsService) {}

  ngOnInit() {
    this.getClients();
  }

  selectClient(client: Client) {
    this.client = client;
  }

  getClients() {
    this.clients$ = this.clientsService.get();
  }

  saveClient(client: Client) {
    client.id ? this.updateClient(client) : this.createClient(client);
  }

  createClient(client: Client) {
    this.clientsService.create(client).subscribe(res => {
      this.reset();
      this.getClients();
    });
  }

  updateClient(client: Client) {
    this.clientsService.update(client).subscribe(res => {
      this.reset();
      this.getClients();
    });
  }

  deleteClient(clientId: number) {
    this.clientsService.delete(clientId).subscribe(res => {
      this.reset();
      this.getClients();
    });
  }

  reset() {
    const emptyClient: Client = {
      id: null,
      isActive: null,
      age: null,
      name: '',
      gender: '',
      company: '',
      email: '',
      phone: '',
      address: ''
    };
    this.selectClient(emptyClient);
  }
}
