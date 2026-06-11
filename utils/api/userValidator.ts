import { expect } from '@playwright/test';
import { ApiUserModel } from '../../models/apiUserModel';

export function validateApiUser(actual: ApiUserModel, expected: ApiUserModel) {
    const fields: (keyof ApiUserModel)[] = [
        'name',
        'email',
        'title',
        'dayOfBirth',
        'monthOfBirth',
        'yearOfBirth',
        'firstName',
        'lastName',
        'company',
        'address',
        'address2',
        'country',
        'state',
        'city',
        'zipcode',
        'mobileNumber'
    ];

    const skipFields = ['dayOfBirth', 'mobileNumber']; // API never returns these

    for (const field of fields) {

        if (skipFields.includes(field)) continue;

        if (actual[field] === undefined) continue;

        // Special handling for title field (removing dots for comparison, e.g., "Mr." vs "Mr")
        // UI and API might have slight formatting differences, so we normalize them before comparison
        if (field === 'title') {
            expect(actual[field]?.replace('.', '')).toBe(expected[field]?.replace('.', ''));
            continue;
        }

        expect(actual[field]).toBe(expected[field]);
    }
}
