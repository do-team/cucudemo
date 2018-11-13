Feature: Does calculator works?
  Simple test, if basic math is doing what expectedAnswer
  
  Scenario: easy maths
    Given a variable set to 1
    When I increment the variable by 1
    Then the variable should contain 2
