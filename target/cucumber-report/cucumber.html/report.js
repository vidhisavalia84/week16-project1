$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("ComputerPageTest.feature");
formatter.feature({
  "line": 1,
  "name": "ComputerPageTest",
  "description": "",
  "id": "computerpagetest",
  "keyword": "Feature"
});
formatter.before({
  "duration": 4623178300,
  "status": "passed"
});
formatter.scenario({
  "line": 5,
  "name": "I should navigate to Computer page successfully",
  "description": "",
  "id": "computerpagetest;i-should-navigate-to-computer-page-successfully",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 3,
      "name": "@sanity"
    },
    {
      "line": 4,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "I am on home page",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I click on Top Menu Tab \"Computers\"",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I should navigate to Computers page successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "Loginsteps.iAmOnHomePage()"
});
formatter.result({
  "duration": 144943500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Computers",
      "offset": 25
    }
  ],
  "location": "ComputerSteps.iClickOnTopMenuTab(String)"
});
formatter.result({
  "duration": 1027495200,
  "status": "passed"
});
formatter.match({
  "location": "ComputerSteps.iShouldNavigateToComputersPageSuccessfully()"
});
formatter.result({
  "duration": 61268000,
  "status": "passed"
});
formatter.after({
  "duration": 824132000,
  "status": "passed"
});
formatter.before({
  "duration": 2489387600,
  "status": "passed"
});
formatter.scenario({
  "line": 11,
  "name": "I should navigate to Desktop page successfully",
  "description": "",
  "id": "computerpagetest;i-should-navigate-to-desktop-page-successfully",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 9,
      "name": "@smoke"
    },
    {
      "line": 10,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 12,
  "name": "I am on home page",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "I click on Top Menu Tab \"Computers\"",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I click on sub Menu Tab \"Desktop\"",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I should navigate to Desktop page successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "Loginsteps.iAmOnHomePage()"
});
formatter.result({
  "duration": 35800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Computers",
      "offset": 25
    }
  ],
  "location": "ComputerSteps.iClickOnTopMenuTab(String)"
});
formatter.result({
  "duration": 979571000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Desktop",
      "offset": 25
    }
  ],
  "location": "ComputerSteps.iClickOnSubMenuTab(String)"
});
formatter.result({
  "duration": 467858400,
  "status": "passed"
});
formatter.match({
  "location": "ComputerSteps.iShouldNavigateToDesktopPageSuccessfully()"
});
formatter.result({
  "duration": 64714000,
  "status": "passed"
});
formatter.after({
  "duration": 743960200,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 17,
  "name": "I should build my own computer and add it to cart successfully",
  "description": "",
  "id": "computerpagetest;i-should-build-my-own-computer-and-add-it-to-cart-successfully",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 16,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 18,
  "name": "I am on home page",
  "keyword": "When "
});
formatter.step({
  "line": 19,
  "name": "I click on Top Menu Tab \"Computers\"",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "I click on sub Menu Tab \"Desktop\"",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "I click on select product \"Build your own computer\"",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "I click on select processor \"\u003cprocessor\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "I click on select Ram \"\u003cram\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "I click on select HDD \"\u003chdd\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "I click on select OS \"\u003cos\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "I click on select Software \"\u003csoftware\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "I click on addTOCatr button",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "I shold see the product successfully added to the cart",
  "keyword": "Then "
});
formatter.examples({
  "line": 29,
  "name": "",
  "description": "",
  "id": "computerpagetest;i-should-build-my-own-computer-and-add-it-to-cart-successfully;",
  "rows": [
    {
      "cells": [
        "processor",
        "ram",
        "hdd",
        "os",
        "software"
      ],
      "line": 30,
      "id": "computerpagetest;i-should-build-my-own-computer-and-add-it-to-cart-successfully;;1"
    },
    {
      "cells": [
        "2.2 GHz Intel Pentium Dual-Core E2200",
        "2 GB",
        "320 GB",
        "Vista Home [+$50.00]",
        "Microsoft Office [+$50.00]"
      ],
      "line": 31,
      "id": "computerpagetest;i-should-build-my-own-computer-and-add-it-to-cart-successfully;;2"
    },
    {
      "cells": [
        "2.5 GHz Intel Pentium Dual-Core E2200 [+$15.00]",
        "4GB [+$20.00]",
        "400 GB [+$100.00]",
        "Vista Premium [+$60.00]",
        "Acrobat Reader [+$10.00]"
      ],
      "line": 32,
      "id": "computerpagetest;i-should-build-my-own-computer-and-add-it-to-cart-successfully;;3"
    },
    {
      "cells": [
        "2.5 GHz Intel Pentium Dual-Core E2200 [+$15.00]",
        "8GB [+$60.00]",
        "320 GB",
        "Vista Home [+$50.00]",
        "Total Commander [+$5.00]"
      ],
      "line": 33,
      "id": "computerpagetest;i-should-build-my-own-computer-and-add-it-to-cart-successfully;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 2386851200,
  "status": "passed"
});
formatter.scenario({
  "line": 31,
  "name": "I should build my own computer and add it to cart successfully",
  "description": "",
  "id": "computerpagetest;i-should-build-my-own-computer-and-add-it-to-cart-successfully;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 16,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 18,
  "name": "I am on home page",
  "keyword": "When "
});
formatter.step({
  "line": 19,
  "name": "I click on Top Menu Tab \"Computers\"",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "I click on sub Menu Tab \"Desktop\"",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "I click on select product \"Build your own computer\"",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "I click on select processor \"2.2 GHz Intel Pentium Dual-Core E2200\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "I click on select Ram \"2 GB\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "I click on select HDD \"320 GB\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "I click on select OS \"Vista Home [+$50.00]\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "I click on select Software \"Microsoft Office [+$50.00]\"",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "I click on addTOCatr button",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "I shold see the product successfully added to the cart",
  "keyword": "Then "
});
formatter.match({
  "location": "Loginsteps.iAmOnHomePage()"
});
formatter.result({
  "duration": 36200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Computers",
      "offset": 25
    }
  ],
  "location": "ComputerSteps.iClickOnTopMenuTab(String)"
});
formatter.result({
  "duration": 1065717600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Desktop",
      "offset": 25
    }
  ],
  "location": "ComputerSteps.iClickOnSubMenuTab(String)"
});
formatter.result({
  "duration": 403792900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Build your own computer",
      "offset": 27
    }
  ],
  "location": "ComputerSteps.iClickOnSelectProduct(String)"
});
formatter.result({
  "duration": 944682000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2.2 GHz Intel Pentium Dual-Core E2200",
      "offset": 29
    }
  ],
  "location": "ComputerSteps.iClickOnSelectProcessor(String)"
});
formatter.result({
  "duration": 116915600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2 GB",
      "offset": 23
    }
  ],
  "location": "ComputerSteps.iClickOnSelectRam(String)"
});
formatter.result({
  "duration": 109275500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "320 GB",
      "offset": 23
    }
  ],
  "location": "ComputerSteps.iClickOnSelectHDD(String)"
});
formatter.result({
  "duration": 76907400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Vista Home [+$50.00]",
      "offset": 22
    }
  ],
  "location": "ComputerSteps.iClickOnSelectOS(String)"
});
formatter.result({
  "duration": 70907600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Microsoft Office [+$50.00]",
      "offset": 28
    }
  ],
  "location": "ComputerSteps.iClickOnSelectSoftware(String)"
});
formatter.result({
  "duration": 63375400,
  "status": "passed"
});
formatter.match({
  "location": "ComputerSteps.iClickOnAddTOCatrButton()"
});
formatter.result({
  "duration": 56931700,
  "status": "passed"
});
formatter.match({
  "location": "ComputerSteps.iSholdSeeTheProductSuccessfullyAddedToTheCart()"
});
formatter.result({
  "duration": 289583800,
  "status": "passed"
});
formatter.after({
  "duration": 672257500,
  "status": "passed"
});
formatter.before({
  "duration": 2378509100,
  "status": "passed"
});
formatter.scenario({
  "line": 32,
  "name": "I should build my own computer and add it to cart successfully",
  "description": "",
  "id": "computerpagetest;i-should-build-my-own-computer-and-add-it-to-cart-successfully;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 16,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 18,
  "name": "I am on home page",
  "keyword": "When "
});
formatter.step({
  "line": 19,
  "name": "I click on Top Menu Tab \"Computers\"",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "I click on sub Menu Tab \"Desktop\"",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "I click on select product \"Build your own computer\"",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "I click on select processor \"2.5 GHz Intel Pentium Dual-Core E2200 [+$15.00]\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "I click on select Ram \"4GB [+$20.00]\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "I click on select HDD \"400 GB [+$100.00]\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "I click on select OS \"Vista Premium [+$60.00]\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "I click on select Software \"Acrobat Reader [+$10.00]\"",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "I click on addTOCatr button",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "I shold see the product successfully added to the cart",
  "keyword": "Then "
});
formatter.match({
  "location": "Loginsteps.iAmOnHomePage()"
});
formatter.result({
  "duration": 67700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Computers",
      "offset": 25
    }
  ],
  "location": "ComputerSteps.iClickOnTopMenuTab(String)"
});
formatter.result({
  "duration": 984965800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Desktop",
      "offset": 25
    }
  ],
  "location": "ComputerSteps.iClickOnSubMenuTab(String)"
});
formatter.result({
  "duration": 418979800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Build your own computer",
      "offset": 27
    }
  ],
  "location": "ComputerSteps.iClickOnSelectProduct(String)"
});
formatter.result({
  "duration": 878431800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2.5 GHz Intel Pentium Dual-Core E2200 [+$15.00]",
      "offset": 29
    }
  ],
  "location": "ComputerSteps.iClickOnSelectProcessor(String)"
});
formatter.result({
  "duration": 79602800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "4GB [+$20.00]",
      "offset": 23
    }
  ],
  "location": "ComputerSteps.iClickOnSelectRam(String)"
});
formatter.result({
  "duration": 102226300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "400 GB [+$100.00]",
      "offset": 23
    }
  ],
  "location": "ComputerSteps.iClickOnSelectHDD(String)"
});
formatter.result({
  "duration": 97468300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Vista Premium [+$60.00]",
      "offset": 22
    }
  ],
  "location": "ComputerSteps.iClickOnSelectOS(String)"
});
formatter.result({
  "duration": 91292100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Acrobat Reader [+$10.00]",
      "offset": 28
    }
  ],
  "location": "ComputerSteps.iClickOnSelectSoftware(String)"
});
formatter.result({
  "duration": 94527000,
  "status": "passed"
});
formatter.match({
  "location": "ComputerSteps.iClickOnAddTOCatrButton()"
});
formatter.result({
  "duration": 66028100,
  "status": "passed"
});
formatter.match({
  "location": "ComputerSteps.iSholdSeeTheProductSuccessfullyAddedToTheCart()"
});
formatter.result({
  "duration": 284268000,
  "status": "passed"
});
formatter.after({
  "duration": 641313700,
  "status": "passed"
});
formatter.before({
  "duration": 2080743100,
  "status": "passed"
});
formatter.scenario({
  "line": 33,
  "name": "I should build my own computer and add it to cart successfully",
  "description": "",
  "id": "computerpagetest;i-should-build-my-own-computer-and-add-it-to-cart-successfully;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 16,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 18,
  "name": "I am on home page",
  "keyword": "When "
});
formatter.step({
  "line": 19,
  "name": "I click on Top Menu Tab \"Computers\"",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "I click on sub Menu Tab \"Desktop\"",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "I click on select product \"Build your own computer\"",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "I click on select processor \"2.5 GHz Intel Pentium Dual-Core E2200 [+$15.00]\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "I click on select Ram \"8GB [+$60.00]\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "I click on select HDD \"320 GB\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "I click on select OS \"Vista Home [+$50.00]\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "I click on select Software \"Total Commander [+$5.00]\"",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "I click on addTOCatr button",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "I shold see the product successfully added to the cart",
  "keyword": "Then "
});
formatter.match({
  "location": "Loginsteps.iAmOnHomePage()"
});
formatter.result({
  "duration": 31300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Computers",
      "offset": 25
    }
  ],
  "location": "ComputerSteps.iClickOnTopMenuTab(String)"
});
formatter.result({
  "duration": 535756800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Desktop",
      "offset": 25
    }
  ],
  "location": "ComputerSteps.iClickOnSubMenuTab(String)"
});
formatter.result({
  "duration": 413721100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Build your own computer",
      "offset": 27
    }
  ],
  "location": "ComputerSteps.iClickOnSelectProduct(String)"
});
formatter.result({
  "duration": 755674400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2.5 GHz Intel Pentium Dual-Core E2200 [+$15.00]",
      "offset": 29
    }
  ],
  "location": "ComputerSteps.iClickOnSelectProcessor(String)"
});
formatter.result({
  "duration": 86236900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "8GB [+$60.00]",
      "offset": 23
    }
  ],
  "location": "ComputerSteps.iClickOnSelectRam(String)"
});
formatter.result({
  "duration": 108799400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "320 GB",
      "offset": 23
    }
  ],
  "location": "ComputerSteps.iClickOnSelectHDD(String)"
});
formatter.result({
  "duration": 80234900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Vista Home [+$50.00]",
      "offset": 22
    }
  ],
  "location": "ComputerSteps.iClickOnSelectOS(String)"
});
formatter.result({
  "duration": 69522300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Total Commander [+$5.00]",
      "offset": 28
    }
  ],
  "location": "ComputerSteps.iClickOnSelectSoftware(String)"
});
formatter.result({
  "duration": 106978300,
  "status": "passed"
});
formatter.match({
  "location": "ComputerSteps.iClickOnAddTOCatrButton()"
});
formatter.result({
  "duration": 70559600,
  "status": "passed"
});
formatter.match({
  "location": "ComputerSteps.iSholdSeeTheProductSuccessfullyAddedToTheCart()"
});
formatter.result({
  "duration": 746850000,
  "status": "passed"
});
formatter.after({
  "duration": 743839800,
  "status": "passed"
});
formatter.uri("LoginPageTest.feature");
formatter.feature({
  "line": 1,
  "name": "LoginPageTest",
  "description": "As a user I want to login into nop commerce website",
  "id": "loginpagetest",
  "keyword": "Feature"
});
formatter.before({
  "duration": 2517842900,
  "status": "passed"
});
formatter.scenario({
  "line": 5,
  "name": "I should navigate to Login Page successfully",
  "description": "",
  "id": "loginpagetest;i-should-navigate-to-login-page-successfully",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 3,
      "name": "@sanity"
    },
    {
      "line": 4,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "I am on home page",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I click on Login link",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I should navigate to login page successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "Loginsteps.iAmOnHomePage()"
});
formatter.result({
  "duration": 22300,
  "status": "passed"
});
formatter.match({
  "location": "Loginsteps.iClickOnLoginLink()"
});
formatter.result({
  "duration": 923053900,
  "status": "passed"
});
formatter.match({
  "location": "Loginsteps.iShouldNavigateToLoginPageSuccessfully()"
});
formatter.result({
  "duration": 43996200,
  "status": "passed"
});
formatter.after({
  "duration": 677432000,
  "status": "passed"
});
formatter.before({
  "duration": 2467715200,
  "status": "passed"
});
formatter.scenario({
  "line": 11,
  "name": "I should verify message with invalid credential",
  "description": "",
  "id": "loginpagetest;i-should-verify-message-with-invalid-credential",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 9,
      "name": "@smoke"
    },
    {
      "line": 10,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 12,
  "name": "I am on home page",
  "keyword": "Given "
});
formatter.step({
  "line": 13,
  "name": "I click on Login link",
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "I enter email id \"Prime123@gmail.com\"",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I enter password \"abc123\"",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I click on Login button",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I am unable to login with invalid credential",
  "keyword": "Then "
});
formatter.match({
  "location": "Loginsteps.iAmOnHomePage()"
});
formatter.result({
  "duration": 33400,
  "status": "passed"
});
formatter.match({
  "location": "Loginsteps.iClickOnLoginLink()"
});
formatter.result({
  "duration": 476365300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Prime123@gmail.com",
      "offset": 18
    }
  ],
  "location": "Loginsteps.iEnterEmailId(String)"
});
formatter.result({
  "duration": 102724800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "abc123",
      "offset": 18
    }
  ],
  "location": "Loginsteps.iEnterPassword(String)"
});
formatter.result({
  "duration": 86995300,
  "status": "passed"
});
formatter.match({
  "location": "Loginsteps.iClickOnLoginButton()"
});
formatter.result({
  "duration": 335390300,
  "status": "passed"
});
formatter.match({
  "location": "Loginsteps.iAmUnableToLoginWithInvalidCredential()"
});
formatter.result({
  "duration": 45724500,
  "status": "passed"
});
formatter.after({
  "duration": 769575800,
  "status": "passed"
});
formatter.before({
  "duration": 2177160700,
  "status": "passed"
});
formatter.scenario({
  "line": 19,
  "name": "I should login with valid credential successfully",
  "description": "",
  "id": "loginpagetest;i-should-login-with-valid-credential-successfully",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 18,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 20,
  "name": "I am on home page",
  "keyword": "Given "
});
formatter.step({
  "line": 21,
  "name": "I click on Login link",
  "keyword": "When "
});
formatter.step({
  "line": 22,
  "name": "I enter email id \"Prime123@gmail.com\"",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "I enter password \"abc123\"",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "I click on Login button",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "I should login successfully and i should see logout button",
  "keyword": "Then "
});
formatter.match({
  "location": "Loginsteps.iAmOnHomePage()"
});
formatter.result({
  "duration": 33600,
  "status": "passed"
});
formatter.match({
  "location": "Loginsteps.iClickOnLoginLink()"
});
formatter.result({
  "duration": 898864400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Prime123@gmail.com",
      "offset": 18
    }
  ],
  "location": "Loginsteps.iEnterEmailId(String)"
});
formatter.result({
  "duration": 115807100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "abc123",
      "offset": 18
    }
  ],
  "location": "Loginsteps.iEnterPassword(String)"
});
formatter.result({
  "duration": 86279100,
  "status": "passed"
});
formatter.match({
  "location": "Loginsteps.iClickOnLoginButton()"
});
formatter.result({
  "duration": 326665100,
  "status": "passed"
});
formatter.match({
  "location": "Loginsteps.iShouldLoginSuccessfullyAndIShouldSeeLogoutButton()"
});
formatter.result({
  "duration": 20036974000,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//a[normalize-space()\u003d\u0027Log out\u0027]\"}\n  (Session info: chrome\u003d108.0.5359.125)\nFor documentation on this error, please visit: https://selenium.dev/exceptions/#no_such_element\nBuild info: version: \u00274.6.0\u0027, revision: \u002779f1c02ae20\u0027\nSystem info: os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_121\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCommand: [6100fa5c07c8d8d1ff5d8ccf7837395f, findElement {using\u003dxpath, value\u003d//a[normalize-space()\u003d\u0027Log out\u0027]}]\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 108.0.5359.125, chrome: {chromedriverVersion: 108.0.5359.71 (1e0e3868ee06..., userDataDir: C:\\Users\\VIDHIP~1\\AppData\\L...}, goog:chromeOptions: {debuggerAddress: localhost:61002}, networkConnectionEnabled: false, pageLoadStrategy: normal, platformName: WINDOWS, proxy: Proxy(), se:cdp: ws://localhost:61002/devtoo..., se:cdpVersion: 108.0.5359.125, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: 6100fa5c07c8d8d1ff5d8ccf7837395f\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:200)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:133)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:53)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:184)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.invokeExecute(DriverCommandExecutor.java:167)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:142)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:541)\r\n\tat org.openqa.selenium.remote.ElementLocation$ElementFinder$2.findElement(ElementLocation.java:162)\r\n\tat org.openqa.selenium.remote.ElementLocation.findElement(ElementLocation.java:60)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:365)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:357)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:70)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:39)\r\n\tat com.sun.proxy.$Proxy23.isDisplayed(Unknown Source)\r\n\tat com.nopcommerce.demo.pages.HomePage.isLogOutLinkDisplay(HomePage.java:78)\r\n\tat com.nopcommerce.demo.cucumber.steps.Loginsteps.iShouldLoginSuccessfullyAndIShouldSeeLogoutButton(Loginsteps.java:58)\r\n\tat ✽.Then I should login successfully and i should see logout button(LoginPageTest.feature:25)\r\n",
  "status": "failed"
});
formatter.after({
  "duration": 894859800,
  "status": "passed"
});
formatter.before({
  "duration": 2694561200,
  "status": "passed"
});
formatter.scenario({
  "line": 27,
  "name": "I should Logout successfully",
  "description": "",
  "id": "loginpagetest;i-should-logout-successfully",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 26,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 28,
  "name": "I am on home page",
  "keyword": "Given "
});
formatter.step({
  "line": 29,
  "name": "I click on Login link",
  "keyword": "When "
});
formatter.step({
  "line": 30,
  "name": "I enter email id \"Prime123@gmail.com\"",
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "I enter password \"abc123\"",
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "I click on Login button",
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "I click on logout link",
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "I should successfully log out and i should see login link",
  "keyword": "Then "
});
formatter.match({
  "location": "Loginsteps.iAmOnHomePage()"
});
formatter.result({
  "duration": 36600,
  "status": "passed"
});
formatter.match({
  "location": "Loginsteps.iClickOnLoginLink()"
});
formatter.result({
  "duration": 459355800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Prime123@gmail.com",
      "offset": 18
    }
  ],
  "location": "Loginsteps.iEnterEmailId(String)"
});
formatter.result({
  "duration": 97434200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "abc123",
      "offset": 18
    }
  ],
  "location": "Loginsteps.iEnterPassword(String)"
});
formatter.result({
  "duration": 84057400,
  "status": "passed"
});
formatter.match({
  "location": "Loginsteps.iClickOnLoginButton()"
});
formatter.result({
  "duration": 343951100,
  "status": "passed"
});
formatter.match({
  "location": "Loginsteps.iClickOnLogoutLink()"
});
formatter.result({
  "duration": 20049363900,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//a[normalize-space()\u003d\u0027Log out\u0027]\"}\n  (Session info: chrome\u003d108.0.5359.125)\nFor documentation on this error, please visit: https://selenium.dev/exceptions/#no_such_element\nBuild info: version: \u00274.6.0\u0027, revision: \u002779f1c02ae20\u0027\nSystem info: os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_121\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCommand: [f82805a88e38dc91d7e7a12421266f81, findElement {using\u003dxpath, value\u003d//a[normalize-space()\u003d\u0027Log out\u0027]}]\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 108.0.5359.125, chrome: {chromedriverVersion: 108.0.5359.71 (1e0e3868ee06..., userDataDir: C:\\Users\\VIDHIP~1\\AppData\\L...}, goog:chromeOptions: {debuggerAddress: localhost:61020}, networkConnectionEnabled: false, pageLoadStrategy: normal, platformName: WINDOWS, proxy: Proxy(), se:cdp: ws://localhost:61020/devtoo..., se:cdpVersion: 108.0.5359.125, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: f82805a88e38dc91d7e7a12421266f81\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:200)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:133)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:53)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:184)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.invokeExecute(DriverCommandExecutor.java:167)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:142)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:541)\r\n\tat org.openqa.selenium.remote.ElementLocation$ElementFinder$2.findElement(ElementLocation.java:162)\r\n\tat org.openqa.selenium.remote.ElementLocation.findElement(ElementLocation.java:60)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:365)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:357)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:70)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:39)\r\n\tat com.sun.proxy.$Proxy23.click(Unknown Source)\r\n\tat com.nopcommerce.demo.utility.Utility.clickOnElement(Utility.java:53)\r\n\tat com.nopcommerce.demo.pages.HomePage.clickOnLogOutLink(HomePage.java:72)\r\n\tat com.nopcommerce.demo.cucumber.steps.Loginsteps.iClickOnLogoutLink(Loginsteps.java:63)\r\n\tat ✽.And I click on logout link(LoginPageTest.feature:33)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "Loginsteps.iShouldSuccessfullyLogOutAndIShouldSeeLoginLink()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 831463200,
  "status": "passed"
});
formatter.uri("RegisterPageTest.feature");
formatter.feature({
  "line": 1,
  "name": "RegisterPageTest",
  "description": "",
  "id": "registerpagetest",
  "keyword": "Feature"
});
formatter.before({
  "duration": 2197535300,
  "status": "passed"
});
formatter.scenario({
  "line": 5,
  "name": "User should navigate to register page successfully",
  "description": "",
  "id": "registerpagetest;user-should-navigate-to-register-page-successfully",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 3,
      "name": "@sanity"
    },
    {
      "line": 4,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "User is on register page",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "User click on register link",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I should navigate to Register page successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "RegisterStep.userIsOnRegisterPage()"
});
formatter.result({
  "duration": 101700,
  "status": "passed"
});
formatter.match({
  "location": "RegisterStep.userClickOnRegisterLink()"
});
formatter.result({
  "duration": 428363300,
  "status": "passed"
});
formatter.match({
  "location": "RegisterStep.iShouldNavigateToRegisterPageSuccessfully()"
});
formatter.result({
  "duration": 52296100,
  "status": "passed"
});
formatter.after({
  "duration": 710501800,
  "status": "passed"
});
formatter.before({
  "duration": 2405047500,
  "status": "passed"
});
formatter.scenario({
  "line": 12,
  "name": "Verify the Firstname,Lastname,Email password and Conform password fields are mandatory",
  "description": "",
  "id": "registerpagetest;verify-the-firstname,lastname,email-password-and-conform-password-fields-are-mandatory",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 10,
      "name": "@smoke"
    },
    {
      "line": 11,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 13,
  "name": "User is on register page",
  "keyword": "Given "
});
formatter.step({
  "line": 14,
  "name": "User click on register link",
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "User click on register button",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "User should get the error message",
  "keyword": "Then "
});
formatter.match({
  "location": "RegisterStep.userIsOnRegisterPage()"
});
formatter.result({
  "duration": 31900,
  "status": "passed"
});
formatter.match({
  "location": "RegisterStep.userClickOnRegisterLink()"
});
formatter.result({
  "duration": 848876400,
  "status": "passed"
});
formatter.match({
  "location": "RegisterStep.userClickOnRegisterButton()"
});
formatter.result({
  "duration": 93957600,
  "status": "passed"
});
formatter.match({
  "location": "RegisterStep.userShouldGetTheErrorMessage()"
});
formatter.result({
  "duration": 369947200,
  "status": "passed"
});
formatter.after({
  "duration": 751332400,
  "status": "passed"
});
formatter.before({
  "duration": 2353374700,
  "status": "passed"
});
formatter.scenario({
  "line": 18,
  "name": "User should create account successfully",
  "description": "",
  "id": "registerpagetest;user-should-create-account-successfully",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 17,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 19,
  "name": "User is on register page",
  "keyword": "Given "
});
formatter.step({
  "line": 20,
  "name": "User click on register link",
  "keyword": "When "
});
formatter.step({
  "line": 21,
  "name": "User select gender \"Male\"",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "User enter first name \"Vidhi\"",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "User enter last name \"Patel\"",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "User select date of birth \"20\",\"August\",\"2010\"",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "User enter email \"Prime123@gmail.com\"",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "User enter password \"abc123\"",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "User enter conform password \"abc123\"",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "User click on register button",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "User shold register successfully",
  "keyword": "Then "
});
formatter.step({
  "line": 30,
  "name": "User should click on continue button",
  "keyword": "And "
});
formatter.match({
  "location": "RegisterStep.userIsOnRegisterPage()"
});
formatter.result({
  "duration": 24200,
  "status": "passed"
});
formatter.match({
  "location": "RegisterStep.userClickOnRegisterLink()"
});
formatter.result({
  "duration": 473159400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Male",
      "offset": 20
    }
  ],
  "location": "RegisterStep.userSelectGender(String)"
});
formatter.result({
  "duration": 85504100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Vidhi",
      "offset": 23
    }
  ],
  "location": "RegisterStep.userEnterFirstName(String)"
});
formatter.result({
  "duration": 83901500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Patel",
      "offset": 22
    }
  ],
  "location": "RegisterStep.userEnterLastName(String)"
});
formatter.result({
  "duration": 91536000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "20",
      "offset": 27
    },
    {
      "val": "August",
      "offset": 32
    },
    {
      "val": "2010",
      "offset": 41
    }
  ],
  "location": "RegisterStep.userSelectDateOfBirth(String,String,String)"
});
formatter.result({
  "duration": 303514500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Prime123@gmail.com",
      "offset": 18
    }
  ],
  "location": "RegisterStep.userEnterEmail(String)"
});
formatter.result({
  "duration": 104265800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "abc123",
      "offset": 21
    }
  ],
  "location": "RegisterStep.userEnterPassword(String)"
});
formatter.result({
  "duration": 90614900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "abc123",
      "offset": 29
    }
  ],
  "location": "RegisterStep.userEnterConformPassword(String)"
});
formatter.result({
  "duration": 102296300,
  "status": "passed"
});
formatter.match({
  "location": "RegisterStep.userClickOnRegisterButton()"
});
formatter.result({
  "duration": 567586800,
  "status": "passed"
});
formatter.match({
  "location": "RegisterStep.userSholdRegisterSuccessfully()"
});
formatter.result({
  "duration": 34344200,
  "status": "passed"
});
formatter.match({
  "location": "RegisterStep.userShouldClickOnContinueButton()"
});
formatter.result({
  "duration": 17200,
  "status": "passed"
});
formatter.after({
  "duration": 660208500,
  "status": "passed"
});
});