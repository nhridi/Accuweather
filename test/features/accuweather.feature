Feature: AccuWeather Management

Background: 
    Given I open the Main Page
    When I consent data Usage

Scenario Outline:  Search for a specific city for weather forecast
    And I input "<city>" in the search field
    And I click on the first search result
    Then I see that city weather page header contains city name from the search

        Examples:
      | city     |
      | New York |

Scenario Outline: Recent Location's weather forecast
    And I input "<city>" in the search field
    And I click on the first search result
    And I see that city weather page header contains city name from the search
    And I go back to the main page
    And I choose the first city in Recent locations.
    Then I see that city weather page header contains city name from the search

        Examples:
      | city     |
      | London |

Scenario Outline: Current Locations Label
    Then I click search field to show current location label
