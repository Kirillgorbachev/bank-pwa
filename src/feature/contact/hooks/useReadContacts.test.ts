import { renderHook, waitFor } from '@testing-library/react';
import type { Mock } from 'vitest';
import { describe, expect, test, vi } from 'vitest';

import { getContacts, isContactsApiAvailable } from '../api/contactsApi';

import { useReadContacts } from './useReadContacts';

vi.mock('../api/contactsApi', () => ({
    getContacts: vi.fn(),
    isContactsApiAvailable: vi.fn(),
}));

describe('useReadContacts', () => {
    test('должен устанавливать доступность API', () => {
        (isContactsApiAvailable as Mock).mockReturnValue(true);

        const { result } = renderHook(() => useReadContacts());

        expect(result.current.isAvailable).toBe(true);
    });

    test('должен загружать контакты', async () => {
        const mockContacts = [
            { name: ['Иван', 'Иванов'], tel: '+79999999999' },
            { name: ['Анна', 'Смирнова'], tel: ['+79876543210', '+79879876543'] },
        ];

        (getContacts as Mock).mockResolvedValue(mockContacts);

        const { result } = renderHook(() => useReadContacts());

        await waitFor(() => {
            result.current.readContacts();
        });

        expect(result.current.contact).toEqual(mockContacts);
    });

    test('должен обрабатывать ошибки', async () => {
        (getContacts as Mock).mockRejectedValue(new Error('Ошибка API'));

        const { result } = renderHook(() => useReadContacts());

        await waitFor(() => {
            result.current.readContacts();
        });

        expect(result.current.contact).toEqual([]);
    });
});
