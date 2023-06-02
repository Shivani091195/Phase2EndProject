@Login
Feature: This feature will be used to test Login functionality in Swag Labs

  Background: 
    Given User has launched the application

  Scenario: Validate the Login success scenario using Parameters
    When user enter username as "standard_user"
    And user enter password as "secret_sauce"
    And user click on Login button
    Then user should be able to login successfully

  Scenario Outline: Validate Login Failure scenarios using Outline
    When user enter username as "<username>"
    And user enter password as "<password>"
    And user click on Login button
    Then user should get error as "<error>"

    Examples: 
      | username        | password     | error                                                                     |
      | standard_user   | Testing@123  | Epic sadface: Username and password do not match any user in this service |
      | locked_out_user | secret_sauce | Epic sadface: Sorry, this user has been locked out.                       |
