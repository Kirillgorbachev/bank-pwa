import { beforeEach, describe, expect, test, vi } from 'vitest';

import type { INavigatorExtended } from '../typs/types';

import { getContacts, getOldContacts, isContactsApiAvailable } from './contactsApi';

describe('contactsApi', () => {
    beforeEach(() => {
        vi.resetAllMocks();
        const extendedNavigator = navigator as INavigatorExtended;
        delete extendedNavigator.contacts;
        delete extendedNavigator.mozContact;
    });

    describe('isContactsApiAvailable', () => {
        test('проверка нового Chrome API', () => {
            const extendedNavigator = navigator as INavigatorExtended;
            extendedNavigator.contacts = { select: vi.fn() };
            extendedNavigator.mozContact = undefined;
            expect(isContactsApiAvailable()).toBe(true);
        });
        test('проверка старого Firefox OS API', () => {
            const extendedNavigator = navigator as INavigatorExtended;
            extendedNavigator.mozContact = { find: vi.fn() };
            extendedNavigator.contacts = undefined;
            expect(isContactsApiAvailable()).toBe(true);
        });
        test('API не поддерживается', () => {
            const extendedNavigator = navigator as INavigatorExtended;
            extendedNavigator.mozContact = undefined;
            extendedNavigator.contacts = undefined;
            expect(isContactsApiAvailable()).toBe(false);
        });
    });
    describe('getContacts', () => {
        test('вызов нового Chrome API и возвращение контакта', async () => {
            const mockSelect = vi.fn().mockResolvedValue([{ name: 'Василиса', tel: '+79999999999' }]);
            const extendedNavigator = navigator as INavigatorExtended;
            extendedNavigator.contacts = { select: mockSelect };
            extendedNavigator.mozContact = undefined;

            const contacts = await getContacts();
            expect(mockSelect).toHaveBeenCalledWith(['name', 'tel'], { multiple: false });
            expect(contacts).toEqual([{ name: 'Василиса', tel: '+79999999999' }]);
        });

        test('вызов нового Chrome API с двумя номерами и возвращение одного номера', async () => {
            const mockSelect = vi.fn().mockResolvedValue([{ name: 'Василиса', tel: ['+79999999999', '+79999999991'] }]);
            const extendedNavigator = navigator as INavigatorExtended;
            extendedNavigator.contacts = { select: mockSelect };
            extendedNavigator.mozContact = undefined;

            const contacts = await getContacts();
            expect(mockSelect).toHaveBeenCalledWith(['name', 'tel'], { multiple: false });
            expect(contacts).toEqual([{ name: 'Василиса', tel: '+79999999999' }]);
        });

        test('вызов нового Chrome API без контактов в телефоне', async () => {
            const mockSelect = vi.fn().mockResolvedValue([]);
            const extendedNavigator = navigator as INavigatorExtended;
            extendedNavigator.contacts = { select: mockSelect };
            extendedNavigator.mozContact = undefined;

            const contacts = await getContacts();
            expect(mockSelect).toHaveBeenCalledWith(['name', 'tel'], { multiple: false });
            expect(contacts).toEqual([]);
        });

        test('вызов нового Chrome API и возвращение контакта без телефона', async () => {
            const mockSelect = vi.fn().mockResolvedValue([{ name: 'Василиса', tel: '' }]);
            const extendedNavigator = navigator as INavigatorExtended;
            extendedNavigator.contacts = { select: mockSelect };
            extendedNavigator.mozContact = undefined;

            const contacts = await getContacts();
            expect(mockSelect).toHaveBeenCalledWith(['name', 'tel'], { multiple: false });
            expect(contacts).toEqual([{ name: 'Василиса', tel: '' }]);
        });
    });
    describe('getOldContacts', () => {
        test('вызов старого Firefox OS API и возвращение контакта', async () => {
            const mockSelect = vi.fn().mockResolvedValue([{ familyName: 'Василиса', tel: '+79999999999' }]);
            const extendedNavigator = navigator as INavigatorExtended;
            extendedNavigator.contacts = undefined;
            extendedNavigator.mozContact = { find: mockSelect };

            const contacts = await getOldContacts();
            expect(mockSelect).toHaveBeenCalledWith({ sortBy: 'familyName', sortOrder: 'ascending' });
            expect(contacts).toEqual([{ familyName: 'Василиса', tel: '+79999999999' }]);
        });
        test('вызов старого Firefox OS API с двумя номерами и возвращение одного номера', async () => {
            const mockSelect = vi
                .fn()
                .mockResolvedValue([{ familyName: 'Василиса', tel: ['+79999999999', '+79999999991'] }]);
            const extendedNavigator = navigator as INavigatorExtended;
            extendedNavigator.contacts = undefined;
            extendedNavigator.mozContact = { find: mockSelect };

            const contacts = await getOldContacts();
            expect(mockSelect).toHaveBeenCalledWith({ sortBy: 'familyName', sortOrder: 'ascending' });
            expect(contacts).toEqual([{ familyName: 'Василиса', tel: '+79999999999' }]);
        });
        test('вызов старого Firefox OS API без контактов в телефоне', async () => {
            const mockSelect = vi.fn().mockResolvedValue([{ familyName: 'Василиса' }]);
            const extendedNavigator = navigator as INavigatorExtended;
            extendedNavigator.contacts = undefined;
            extendedNavigator.mozContact = { find: mockSelect };

            const contacts = await getOldContacts();
            expect(mockSelect).toHaveBeenCalledWith({ sortBy: 'familyName', sortOrder: 'ascending' });
            expect(contacts).toEqual([{ familyName: 'Василиса' }]);
        });
    });
});
