Feature: Wikipedia Article Management

  Background:
    Given I open the main page of Wikipedia

  Scenario Outline: Download the PDF of an article from Wikipedia
    When I input "<article>" in the search field 
    And I click the submit button to go to the article page
    And I click the Tools menu button and select the Download as PDF option
    And I click the Download button to download the file
    Then I should see "<file>" in the downloads folder

    Examples:
      | article         | file                |
      | Albert Einstein | Albert_Einstein.pdf |

  Scenario Outline: Access the page information for a Wikipedia article
    When I input "<article>" in the search field 
    And I click the submit button to go to the article page
    And I click the Tools menu button and select the Page information option
    Then The information page is displayed

    Examples:
      | article      |
      | Bengal tiger |

  Scenario Outline: Search for an article in a specific language on Wikipedia
    When I input "<article>" in the search field
    And I change the search language to "<language>" 
    And I click the submit button to go to the article page
    Then The article page is displayed

    Examples:
      | article                | language |
      | Gabriel García Márquez | Español  |
