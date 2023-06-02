$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/java/features/AddToCart.feature");
formatter.feature({
  "name": "This feature will be used to test add to cart functionality in swag labs.",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@Cart"
    }
  ]
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User has launched the application and logged in successfully",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinations.AddToCartStepDef.user_has_launched_the_application_and_logged_in_successfully()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Cart"
    }
  ]
});
formatter.step({
  "name": "User clicks on Add to cart button",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinations.AddToCartStepDef.user_clicks_on_Add_to_cart_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User goes to cart",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinations.AddToCartStepDef.user_goes_to_cart()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The product should be present in cart",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinations.AddToCartStepDef.the_product_should_be_present_in_cart()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.uri("file:src/test/java/features/LoginSwagLab.feature");
formatter.feature({
  "name": "This feature will be used to test Login functionality in Swag Labs",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@Login"
    }
  ]
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User has launched the application",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinations.LoginSwagLabsStepDef.user_has_launched_the_application()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Validate the Login success scenario using Parameters",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Login"
    }
  ]
});
formatter.step({
  "name": "user enter username as \"standard_user\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinations.LoginSwagLabsStepDef.user_enter_username_as(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enter password as \"secret_sauce\"",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinations.LoginSwagLabsStepDef.user_enter_password_as(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user click on Login button",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinations.LoginSwagLabsStepDef.user_click_on_Login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should be able to login successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinations.LoginSwagLabsStepDef.user_should_be_able_to_login_successfully()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "Validate Login Failure scenarios using Outline",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "user enter username as \"\u003cusername\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "user enter password as \"\u003cpassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "user click on Login button",
  "keyword": "And "
});
formatter.step({
  "name": "user should get error as \"\u003cerror\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "username",
        "password",
        "error"
      ]
    },
    {
      "cells": [
        "standard_user",
        "Testing@123",
        "Epic sadface: Username and password do not match any user in this service"
      ]
    },
    {
      "cells": [
        "locked_out_user",
        "secret_sauce",
        "Epic sadface: Sorry, this user has been locked out."
      ]
    }
  ]
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User has launched the application",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinations.LoginSwagLabsStepDef.user_has_launched_the_application()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Validate Login Failure scenarios using Outline",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Login"
    }
  ]
});
formatter.step({
  "name": "user enter username as \"standard_user\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinations.LoginSwagLabsStepDef.user_enter_username_as(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enter password as \"Testing@123\"",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinations.LoginSwagLabsStepDef.user_enter_password_as(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user click on Login button",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinations.LoginSwagLabsStepDef.user_click_on_Login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should get error as \"Epic sadface: Username and password do not match any user in this service\"",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinations.LoginSwagLabsStepDef.user_should_get_error_as(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User has launched the application",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinations.LoginSwagLabsStepDef.user_has_launched_the_application()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Validate Login Failure scenarios using Outline",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Login"
    }
  ]
});
formatter.step({
  "name": "user enter username as \"locked_out_user\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinations.LoginSwagLabsStepDef.user_enter_username_as(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enter password as \"secret_sauce\"",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinations.LoginSwagLabsStepDef.user_enter_password_as(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user click on Login button",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinations.LoginSwagLabsStepDef.user_click_on_Login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should get error as \"Epic sadface: Sorry, this user has been locked out.\"",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinations.LoginSwagLabsStepDef.user_should_get_error_as(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});