// / <reference types="cypress" />

describe('AuthForm Component', () => {
    beforeEach(() => {
        cy.visit('/login');
    });

    it('should render all elements correctly', () => {
        cy.get('form').should('exist');
        cy.get('h2').should('contain.text', 'Добрый день!');
        cy.get('input[type="password"]').should('exist');
        cy.get('button').contains('Войти').should('exist');
    });

    it('should display mobile-specific text in mobile view', () => {
        cy.viewport(414, 896);
        cy.get('#iconContainer').should('be.visible');
    });

    it('should not enable the submit button until a password is entered', () => {
        cy.get('button[type="submit"]').should('be.disabled');
        const testPassword = 'my_password';
        cy.get('input[type="password"]').type(testPassword);
        cy.get('button[type="submit"]').should('not.be.disabled');
    });

    it('should allow typing a password', () => {
        const testPassword = 'my_password';
        cy.get('input[type="password"]').type(testPassword);
        cy.get('input[type="password"]').should('have.value', testPassword);
    });

    it('should highlight the password field in red and show an error message when an invalid password is entered', () => {
        const invalidPassword = 'wrong_password';
        cy.get('input[type="password"]').type(invalidPassword);
        cy.get('button[type="submit"]').click();
        cy.get('#error').should('be.visible').and('contain.text', 'Неверный пароль');
    });

    it('should toggle password visibility when icons are clicked', () => {
        const testPassword = 'password';
        cy.get('input[type="password"]').type(testPassword);
        cy.get('input[type="password"]').should('have.value', testPassword);
        cy.get('input[type="password"]').should('have.attr', 'type', 'password');
        cy.get('#eye-close-icon').click();
        cy.get('input[type="text"]').should('have.value', testPassword);
        cy.get('#eye-open-icon').click();
        cy.get('input[type="password"]').should('have.value', testPassword);
    });

    it('hint', () => {
        const testPassword = 'password';
        cy.get('#hint').should('exist');
        cy.get('input[type="password"]').type(testPassword);
        cy.get('#hint').should('not.exist');
    });
});
