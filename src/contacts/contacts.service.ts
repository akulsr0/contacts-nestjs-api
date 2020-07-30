import { Injectable, NotFoundException } from '@nestjs/common';
import { Contact } from './contact.model';

@Injectable()
export class ContactsService {
  private contacts: Contact[] = [];

  getContacts() {
    return [...this.contacts];
  }

  getContact(id: string) {
    let contact = this.contacts.find(c => c.id === id);
    if (!contact) {
      throw new NotFoundException('Contact not found');
    }
    return { ...contact };
  }

  addContact(contact: Contact) {
    this.contacts.push(contact);
    return contact;
  }
}
