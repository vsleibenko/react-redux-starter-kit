import { routes } from '../../../src/router';

given('Visit root page', () => {
  cy.server();
  cy.visit(routes.root);
});

then('I should see login button', () => {
  cy.get('button').should('exist');
});
