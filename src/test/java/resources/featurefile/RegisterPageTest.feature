Feature: RegisterPageTest

  @sanity
  @regression
  Scenario:User should navigate to register page successfully
    Given User is on register page
    When User click on register link
    Then I should navigate to Register page successfully

  @smoke
  @regression
  Scenario: Verify the Firstname,Lastname,Email password and Conform password fields are mandatory
    Given User is on register page
    When User click on register link
    And  User click on register button
    Then User should get the error message
  @regression
  Scenario: User should create account successfully
    Given User is on register page
    When User click on register link
    And User select gender "Male"
    And User enter first name "Vidhi"
    And User enter last name "Patel"
    And User select date of birth "20","August","2010"
    And User enter email "Prime123@gmail.com"
    And User enter password "abc123"
    And User enter conform password "abc123"
    And User click on register button
    Then User shold register successfully
    And User should click on continue button
