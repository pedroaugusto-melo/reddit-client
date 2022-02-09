import { formatDate } from "./utilities";

describe('formatDate function', () => {
    describe('when the input is the current date', () => {
        it('return the time difference of 0', () => {
            const input = new Date();
            const expectOutput = '0 minutes ago';

            expect(formatDate(input)).toEqual(expectOutput);
        })
    });

    describe('when the input is less than 24 hours ago', () => {
        it('return the time difference in hours', () => {
            const currDate = new Date();
            const input = currDate - 20*3600*1000;

            expect(formatDate(input)).toMatch(/hours ago/i);
        })
    });

    describe('when the input is more than 24 hours ago', () => {
        it('return the time difference in days', () => {
            const currDate = new Date();
            const input = currDate - 25*3600*1000;

            expect(formatDate(input)).toMatch(/days ago/i);
        })
    });
});