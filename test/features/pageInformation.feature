Feature: Page Information

Scenario: Access the page information for a Wikipedia article
  Given I open the main page of Wikipedia
  When I input "<article>" in the search field and click the submit button
  And I click the Tools menu button and select the Page information option
  Then the information page for the Bengal tiger article is displayed

    Examples:
     article          
     Bengal tiger
