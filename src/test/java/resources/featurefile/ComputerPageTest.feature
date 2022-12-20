Feature: ComputerPageTest

  @sanity
  @regression
  Scenario: I should navigate to Computer page successfully
    When I am on home page
    And I click on Top Menu Tab "Computers"
    Then I should navigate to Computers page successfully
  @smoke
  @regression
  Scenario: I should navigate to Desktop page successfully
    When I am on home page
    And I click on Top Menu Tab "Computers"
    And I click on sub Menu Tab "Desktop"
    Then I should navigate to Desktop page successfully
  @regression
  Scenario Outline: I should build my own computer and add it to cart successfully
    When I am on home page
    And I click on Top Menu Tab "Computers"
    And I click on sub Menu Tab "Desktop"
    And I click on select product "Build your own computer"
    And  I click on select processor "<processor>"
    And  I click on select Ram "<ram>"
    And  I click on select HDD "<hdd>"
    And  I click on select OS "<os>"
    And  I click on select Software "<software>"
    And  I click on addTOCatr button
    Then I shold see the product successfully added to the cart
    Examples:
      | processor                                       | ram           | hdd               | os                      | software                   |
      | 2.2 GHz Intel Pentium Dual-Core E2200           | 2 GB          | 320 GB            | Vista Home [+$50.00]    | Microsoft Office [+$50.00] |
      | 2.5 GHz Intel Pentium Dual-Core E2200 [+$15.00] | 4GB [+$20.00] | 400 GB [+$100.00] | Vista Premium [+$60.00] | Acrobat Reader [+$10.00]   |
      | 2.5 GHz Intel Pentium Dual-Core E2200 [+$15.00] | 8GB [+$60.00] | 320 GB            | Vista Home [+$50.00]    | Total Commander [+$5.00]   |

