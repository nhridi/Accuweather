Feature: Download articles as PDF from Wikipedia

  Scenario Outline: Download the PDF of an article from Wikipedia
    Given I open the main page of Wikipedia
    When I input "<article>" in the search field and click the submit button to go to the article page
    And I click the Tools menu button and select the "Download as PDF" option and it opens a new page for download
    And I navigate to the download page
    And I click the Download button to download the file
    Then I should see "<file>" in the downloads folder

    Examples:
     article         | file               
     Albert Einstein | Albert_Einstein.pdf
