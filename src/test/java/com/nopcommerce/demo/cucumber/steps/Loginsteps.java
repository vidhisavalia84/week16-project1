package com.nopcommerce.demo.cucumber.steps;

import com.nopcommerce.demo.pages.HomePage;
import com.nopcommerce.demo.pages.LoginPage;
import com.nopcommerce.demo.pages.RegisterPage;
import cucumber.api.PendingException;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.testng.Assert;

public class Loginsteps {
    @Given("^I am on home page$")
    public void iAmOnHomePage() {

    }

    @When("^I click on Login link$")
    public void iClickOnLoginLink() {
        new HomePage().clickOnLoginLink();
    }

    @Then("^I should navigate to login page successfully$")
    public void iShouldNavigateToLoginPageSuccessfully() {
        String expectedMessage = "Welcome, Please Sign In!";
        String actualMessage = new LoginPage().getWelcomeText();
        Assert.assertEquals(expectedMessage, actualMessage, "Login page not displayed");
    }


    @And("^I enter email id \"([^\"]*)\"$")
    public void iEnterEmailId(String email)  {
        new LoginPage().enterEmailId(email);
    }

    @And("^I enter password \"([^\"]*)\"$")
    public void iEnterPassword(String password)  {
        new LoginPage().enterPassword(password);
    }

    @And("^I click on Login button$")
    public void iClickOnLoginButton() {
        new LoginPage().clickOnLoginButton();
    }

    @Then("^I am unable to login with invalid credential$")
    public void iAmUnableToLoginWithInvalidCredential() {
        String expectedErrorMessage = "Login was unsuccessful. Please correct the errors and try again.\n"
                + "No customer account found";
        String actualErrorMessage = new LoginPage().getErrorMessage();
        Assert.assertEquals(expectedErrorMessage, actualErrorMessage, "Error message not displayed");
    }

    @Then("^I should login successfully and i should see logout button$")
    public void iShouldLoginSuccessfullyAndIShouldSeeLogoutButton() {

        Assert.assertTrue(new HomePage().isLogOutLinkDisplay(), "Logout link is not displayed");
    }

    @And("^I click on logout link$")
    public void iClickOnLogoutLink() {
        new HomePage().clickOnLogOutLink();
    }

    @Then("^I should successfully log out and i should see login link$")
    public void iShouldSuccessfullyLogOutAndIShouldSeeLoginLink() {
        Assert.assertTrue( new HomePage().isLogInLinkDisplay(), "Login link is not displayed");
    }



}
