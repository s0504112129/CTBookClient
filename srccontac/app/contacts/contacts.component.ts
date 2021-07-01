import { Component, OnInit } from '@angular/core';
import { ContactService } from '../contact.service';
import { Contact } from '../contact';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {

  constructor(private contactService: ContactService) { }

  arrContacts: Contact[]

  getContacts() {
    this.contactService.getContacts().subscribe(c => this.arrContacts = c);
  }

  ngOnInit() {
    this.getContacts();
  }

  save(contact: Contact) {
    this.contactService.updateContact(contact);
  }

  delete(contact: Contact) {
    this.contactService.deleteContact(contact);
    this.arrContacts = this.arrContacts.filter(c => c.id !== contact.id);
  }

}
