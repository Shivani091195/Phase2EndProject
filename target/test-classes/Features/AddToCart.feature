@Cart
Feature: This feature will be used to test add to cart functionality in swag labs.

  Background: 
    Given User has launched the application and logged in successfully

  Scenario: 
    When User clicks on Add to cart button
    And User goes to cart
    Then The product should be present in cart
