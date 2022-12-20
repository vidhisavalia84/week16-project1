package com.nopcommerce.demo.cucumber.steps;

import com.nopcommerce.demo.pages.BuildYourOwnComputerPage;
import com.nopcommerce.demo.pages.ComputerPage;
import com.nopcommerce.demo.pages.DesktopsPage;
import com.nopcommerce.demo.pages.HomePage;
import cucumber.api.PendingException;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Then;
import org.testng.Assert;

public class ComputerSteps {
    @And("^I click on Top Menu Tab \"([^\"]*)\"$")
    public void iClickOnTopMenuTab(String menu) {
        new HomePage().clickOnMenuTab(menu);
    }

    @Then("^I should navigate to Computers page successfully$")
    public void iShouldNavigateToComputersPageSuccessfully() {

        String expectedMessage = "Computers";
        String actualMessage = new ComputerPage().getPageTitleText();
        Assert.assertEquals(expectedMessage, actualMessage, "Computers page not displayed");
    }

    @Then("^I should navigate to Desktop page successfully$")
    public void iShouldNavigateToDesktopPageSuccessfully() {
        String expectedMessage = "Desktops";
        String actualMessage = new DesktopsPage().getPageTitleText();
        Assert.assertEquals(expectedMessage, actualMessage, "Desktops page not displayed");

    }

    @And("^I click on sub Menu Tab \"([^\"]*)\"$")
    public void iClickOnSubMenuTab(String menu)  {
      new   ComputerPage().clickOnSubMenu("Desktops");
    }

    @And("^I click on select product \"([^\"]*)\"$")
    public void iClickOnSelectProduct(String name)  {
        new DesktopsPage().selectProduct(name);

    }

    @And("^I click on select processor \"([^\"]*)\"$")
    public void iClickOnSelectProcessor(String precessor)  {
        new BuildYourOwnComputerPage().selectProcessor(precessor);
    }

    @And("^I click on select Ram \"([^\"]*)\"$")
    public void iClickOnSelectRam(String ram)  {
       new BuildYourOwnComputerPage().selectRam(ram);
    }

    @And("^I click on select HDD \"([^\"]*)\"$")
    public void iClickOnSelectHDD(String hdd)  {
        new BuildYourOwnComputerPage().selectHDD(hdd);
    }

    @And("^I click on select OS \"([^\"]*)\"$")
    public void iClickOnSelectOS(String operatingSystem)  {
        new BuildYourOwnComputerPage().selectOS(operatingSystem);
    }

    @And("^I click on select Software \"([^\"]*)\"$")
    public void iClickOnSelectSoftware(String software)  {
        new BuildYourOwnComputerPage().selectSoftware(software);
    }

    @And("^I click on addTOCatr button$")
    public void iClickOnAddTOCatrButton() {
        new BuildYourOwnComputerPage().clickOnAddToCartButton();
    }

    @Then("^I shold see the product successfully added to the cart$")
    public void iSholdSeeTheProductSuccessfullyAddedToTheCart() {
        String expectedMessage = "The product has been added to your shopping cart";
        String actualMessage =new  BuildYourOwnComputerPage().getProductAddedMessage();
        Assert.assertEquals( actualMessage,expectedMessage, "Product does not added to cart");
    }
}
