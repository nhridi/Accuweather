Feature: Wikipedia article PDF download

  Background:
    Given I am on the Wikipedia main page

  Scenario: Download PDF of an article
    When I search for "Albert Einstein"
    And I navigate to the "Albert Einstein" article
    And I click the "Tool" option to navigate to DownloadPDF
    And I click on the "Download as PDF" link
    Then the PDF download of the article should start
