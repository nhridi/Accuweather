Feature: Search Language

Scenario: Search for an article in a specific language on Wikipedia
  Given I open the main page of Wikipedia
  When I input "<article>" in the search field, change the search language to "<language>", and click the submit button
  Then the article page for Gabriel García Márquez in Spanish is displayed


    Examples:
     article                | language              
     Gabriel García Márquez | Español