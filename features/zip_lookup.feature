Feature: We want to use a zip lookup service to make life easier for users
         and prevent mistakes

  @wip
  Scenario: Invalid zip code
    Given that "00000" is an invalid zip code
    When the user provides a zip code of "00000"
    Then the system prompts the user for a valid zip code

