Feature: AccuWeather Management

Background: 
    Given I open the Main Page
    When I consent data Usage

Scenario:  Search for a specific city for weather forecast
    And I input "<city>" in the search field
    Then I see a list of city
    When I click on the first search result
    Then I see that city weather page header contains city name from the search

    Examples:
    | city     |
    | New York |

Scenario: Recent Location's weather forecast
    And I input "<city>" in the search field
    And I click on the first search result
    Then I see that city weather page header contains city name from the search
    When I go back to the main page
    Then I see that main page is displayed
    And I choose the first city in Recent locations.
    Then I see that city weather page header contains city name from the search

    Examples:
    | city    |
    | London |

Scenario Outline: Current Locations Label
    When I click search field 
    Then I see the current location label
