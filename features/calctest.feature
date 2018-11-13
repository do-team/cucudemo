Feature: Does calculator works?
  Simple test, if basic math is doing what expectedAnswer
  
  Scenario Outline: easy maths
    Given a variable set to <var>
    When I increment the variable by <increment>
    Then the variable should contain <result>

    Examples:
      | var | increment | result |
      | 100 |         5 |    105 |
      |  99 |      1234 |   1333 |
      |  12 |         5 |     17 |
