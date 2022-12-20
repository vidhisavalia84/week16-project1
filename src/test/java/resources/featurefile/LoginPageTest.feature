Feature: LoginPageTest
  As a user I want to login into nop commerce website
  @sanity
  @regression
  Scenario: I should navigate to Login Page successfully
    Given I am on home page
    When  I click on Login link
    Then I should navigate to login page successfully
  @smoke
  @regression
  Scenario: I should verify message with invalid credential
    Given I am on home page
    When  I click on Login link
    And I enter email id "Prime123@gmail.com"
    And I enter password "abc123"
    And I click on Login button
    Then I am unable to login with invalid credential
  @regression
  Scenario:I should login with valid credential successfully
    Given I am on home page
    When  I click on Login link
    And I enter email id "Prime123@gmail.com"
    And I enter password "abc123"
    And I click on Login button
    Then I should login successfully and i should see logout button
  @regression
  Scenario: I should Logout successfully
    Given I am on home page
    When  I click on Login link
    And I enter email id "Prime123@gmail.com"
    And I enter password "abc123"
    And I click on Login button
    And I click on logout link
    Then I should successfully log out and i should see login link