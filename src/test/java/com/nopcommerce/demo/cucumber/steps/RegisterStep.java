package com.nopcommerce.demo.cucumber.steps;

import com.nopcommerce.demo.pages.HomePage;
import com.nopcommerce.demo.pages.RegisterPage;
import cucumber.api.PendingException;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.testng.Assert;

public class RegisterStep {
    @Given("^User is on register page$")
    public void userIsOnRegisterPage() {

    }

    @When("^User click on register link$")
    public void userClickOnRegisterLink() {
        new HomePage().clickOnRegisterLink();
    }

    @Then("^I should navigate to Register page successfully$")
    public void iShouldNavigateToRegisterPageSuccessfully() {
        Assert.assertEquals("Register", new RegisterPage().getRegisterText(), "Register page not displayed");
    }

    @When("^User click on register button$")
    public void userClickOnRegisterButton() {
        new RegisterPage().clickOnRegisterButton();
    }

    @Then("^User should get the error message$")
    public void userShouldGetTheErrorMessage() {
        org.junit.Assert.assertEquals("FirstName field error message not displayed",
                "First name is required.",new RegisterPage().getValidationErrorMessageForField("FirstName"));
        org.junit.Assert.assertEquals("LastName field error message not displayed","Last name is required.",
                new RegisterPage() .getValidationErrorMessageForField("LastName"));
        org.junit.Assert.assertEquals("Email field error message not displayed"
               ,"Email is required.", new RegisterPage().getValidationErrorMessageForField("Email"));
        org.junit.Assert.assertEquals("Password field error message not displayed","Password is required.",
                new RegisterPage().getValidationErrorMessageForField("Password")
        );
        org.junit.Assert.assertEquals("ConfirmPassword field error message not displayed","Password is required.",
                new RegisterPage().getValidationErrorMessageForField("ConfirmPassword"));


    }
    @And("^User select gender \"([^\"]*)\"$")
    public void userSelectGender(String gender)  {
        new RegisterPage().selectGender(gender);
    }

    @And("^User enter first name \"([^\"]*)\"$")
    public void userEnterFirstName(String name)  {
        new RegisterPage().enterFirstName(name);
    }

    @And("^User enter last name \"([^\"]*)\"$")
    public void userEnterLastName(String lastName)  {
        new RegisterPage().enterLastName(lastName);
    }

    @And("^User select date of birth \"([^\"]*)\",\"([^\"]*)\",\"([^\"]*)\"$")
    public void userSelectDateOfBirth(String day, String month, String year)  {
        new RegisterPage().selectDateOfBirth(day,month,year);
    }

    @And("^User enter email \"([^\"]*)\"$")
    public void userEnterEmail(String email)  {
        new RegisterPage().enterEmail(email);
    }

    @And("^User enter password \"([^\"]*)\"$")
    public void userEnterPassword(String password)  {
        new RegisterPage().enterPassword(password);
    }

    @And("^User enter conform password \"([^\"]*)\"$")
    public void userEnterConformPassword(String conformPassword)  {
        new RegisterPage().enterConfirmPassword(conformPassword);
    }

    @Then("^User shold register successfully$")
    public void userSholdRegisterSuccessfully() {

        org.junit.Assert.assertEquals("Registration not successful","Your registration completed",new RegisterPage().getYourRegCompletedText());
    }

    @And("^User should click on continue button$")
    public void userShouldClickOnContinueButton() {
    }
}
