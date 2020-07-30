import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { ContactsService } from './contacts.service';
import { Contact } from './contact.model';
import { v4 as uuid } from 'uuid';

@Controller('contacts')
export class ContactsController {
  constructor(private readonly contactsService: ContactsService) {}

  @Get()
  getContacts(): Contact[] {
    return this.contactsService.getContacts();
  }

  @Get(':id')
  getContact(@Param('id') id: string): Contact {
    return this.contactsService.getContact(id);
  }

  @Post()
  addContact(
    @Body('name') name: string,
    @Body('phone') phone: number,
  ): Contact {
    const contact = new Contact(uuid(), name, phone);
    return this.contactsService.addContact(contact);
  }
}
