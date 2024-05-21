describe('DemoBlaze E2E Tests', () => {
  const username = 'testuser';
  const password = 'testpass';
  const newUsername = `newuser${Date.now()}`;
  const newPassword = 'newpass';

  before(() => {
    cy.visit('https://www.demoblaze.com/');
  });

  it('should register a new user', () => {
    cy.get('#signin2').click();
    cy.get('#sign-username').type(newUsername);
    cy.get('#sign-password').type(newPassword);
    cy.get('button[onclick="register()"]').click();

    cy.wait(2000);
    cy.on('window:alert', (str) => {
      expect(str).to.equal('Sign up successful.');
    });
  });

  it('should login with the registered user', () => {
    cy.get('#login2').click();
    cy.get('#loginusername').type(newUsername);
    cy.get('#loginpassword').type(newPassword);
    cy.get('button[onclick="logIn()"]').click();

    cy.get('#logout2').should('be.visible');
  });

  it('should add Samsung Galaxy S6 to the cart', () => {

    cy.contains('Phones').click();
    cy.contains('Samsung galaxy s6').click();

    cy.contains('Add to cart').click();

    cy.on('window:alert', (str) => {
      expect(str).to.equal('Product added.');
    });

    cy.get('#cartur').click();
    cy.contains('Samsung galaxy s6').should('be.visible');
  });
});
