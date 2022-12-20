package com.nopcommerce.demo.pages;

import com.aventstack.extentreports.Status;
import com.nopcommerce.demo.utility.Utility;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.CacheLookup;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import org.testng.Reporter;

import java.util.List;


public class RegisterPage extends Utility {
    private static final Logger log = LogManager.getLogger(RegisterPage.class.getName());

    public RegisterPage() {
        PageFactory.initElements(driver, this);
    }

    @CacheLookup
    @FindBy(css = "div[class='page-title'] h1")
    WebElement registerText;

    @CacheLookup
    @FindBy(xpath = "//div[@id='gender']//label")
    List<WebElement> genderRadios;

    @CacheLookup
    @FindBy(id = "FirstName")
    WebElement firstNameField;

    @CacheLookup
    @FindBy(id = "LastName")
    WebElement lastNameField;

    @CacheLookup
    @FindBy(name = "DateOfBirthDay")
    WebElement dateOfBirthDay;

    @CacheLookup
    @FindBy(name = "DateOfBirthMonth")
    WebElement dateOfBirthMonth;

    @CacheLookup
    @FindBy(name = "DateOfBirthYear")
    WebElement dateOfBirthYear;

    @CacheLookup
    @FindBy(name = "Email")
    WebElement emailField;

    @CacheLookup
    @FindBy(id = "Password")
    WebElement passwordField;

    @CacheLookup
    @FindBy(id = "ConfirmPassword")
    WebElement confirmPasswordField;

    @CacheLookup
    @FindBy(css = "#register-button")
    WebElement registerBtn;

    @CacheLookup
    @FindBy(className = "field-validation-error")
    List<WebElement> fieldValidationErrors;

    @CacheLookup
    @FindBy(css = ".result")
    WebElement yourRegCompletedText;

    @CacheLookup
    @FindBy(css = ".button-1.register-continue-button")
    WebElement continueBtn;


    public String getRegisterText() {
        String message = getTextFromElement(registerText);
        log.info("Click on register link :" + registerText.toString());
        return message;
    }

    public void selectGender(String gender) {
        for (WebElement radio : genderRadios) {
            if (radio.getText().contains(gender)) {
                clickOnElement(radio);
                log.info("Select gender " + radio.toString());
                break;
            }
        }
    }

    public void enterFirstName(String firstName) {
        sendTextToElement(firstNameField, firstName);
        log.info("Enetr first name " + firstNameField.toString());
    }

    public void enterLastName(String lastName) {
        sendTextToElement(lastNameField, lastName);
        log.info("Enter last name" + lastName.toString());
    }

    public void selectDateOfBirth(String day, String month, String year) {
        selectByVisibleTextFromDropDown(dateOfBirthDay, day);
        log.info("Select date of birth" + dateOfBirthDay.toString());
        selectByVisibleTextFromDropDown(dateOfBirthMonth, month);
        log.info("Select month of birth" + dateOfBirthDay.toString());
        selectByVisibleTextFromDropDown(dateOfBirthYear, year);
        log.info("Select year of birth" + dateOfBirthDay.toString());
    }

    public void enterEmail(String email) {
        sendTextToElement(emailField, email);
        log.info("Enter email address" + emailField.toString());

    }

    public void enterPassword(String password) {
        sendTextToElement(passwordField, password);
        log.info("Enter password" + passwordField.toString());
    }

    public void enterConfirmPassword(String confPassword) {
        sendTextToElement(confirmPasswordField, confPassword);
        log.info("Enter conform password " + confirmPasswordField.toString());
    }

    public void clickOnRegisterButton() {
        clickOnElement(registerBtn);
        log.info("Click on register button " + registerBtn.toString());
    }

    public String getValidationErrorMessageForField(String fieldName) {
        String validationMessage = null;
        for (WebElement message : fieldValidationErrors) {
            if (message.getAttribute("data-valmsg-for").equals(fieldName)) {
                validationMessage = message.getText();
                log.info("Error message is : " + validationMessage.toString());
                break;
            }
        }
        return validationMessage;
    }

    public String getYourRegCompletedText() {
        String message = getTextFromElement(yourRegCompletedText);
        log.info("Get text " + yourRegCompletedText.toString());
        return message;
    }

    public void clickOnContinueButton() {
        clickOnElement(continueBtn);
        log.info("Click on continue button"+continueBtn.toString());
    }

}
