import { BasePage } from "../pageObjects/basePage"
import { AutomationPracticeFormPage } from "../pageObjects/automationPracticeFormPage";

describe("Final Task", () => {
  context("Practice Form", () => {
    beforeEach(() => {
      AutomationPracticeFormPage.visit(); 
    })
    it.only("Practice Form Fill", () => {
      //b. Input all the necessary information in the text fields, buttons, etc, where it is not stated otherwise.
      AutomationPracticeFormPage.firstNameField.type("Kintija");
      AutomationPracticeFormPage.lastNameField.type("Mūrniece");
      AutomationPracticeFormPage.emailField.type("s22murnkint@venta.lv");
      AutomationPracticeFormPage.clickOnGender.contains("Female").click();
      AutomationPracticeFormPage.mobileNumberField.type("28803380");
      //c. Set the - Date of Birth - with Calendar widget to - 28th of February, 1930.
      /*
      AutomationPracticeFormPage.clickOnDateOfBirthInput.click();
      AutomationPracticeFormPage.chooseMonth.select("February");
      AutomationPracticeFormPage.chooseYear.select("1930");
      AutomationPracticeFormPage.dateSelect.contains("28").click();
      */
      AutomationPracticeFormPage.dateSelect(28);
      //d. Set Subjects to Economics.
      AutomationPracticeFormPage.typeSubjects.type("Economics{enter}");
      //e. Set Hobbies to Music.
      AutomationPracticeFormPage.clickOnHobbies.contains("Music").click();
      //f. Upload an image of your choice.
      AutomationPracticeFormPage.clickOnChooseFile.selectFile("cypress/files/norway.jpg");
      //i. Create folder “files” and put the image there
      //ii. Might come in handy: https://docs.cypress.io/api/commands/selectfile
      //g. Set State to NCR.
      AutomationPracticeFormPage.typeAddress.type("Talsi");
      AutomationPracticeFormPage.optionsState.click();
      AutomationPracticeFormPage.optionsState.contains("div","NCR").click();
      //h. Set City to Delhi.
      AutomationPracticeFormPage.optionsCity.click();
      AutomationPracticeFormPage.optionsCity.contains("div","Delhi").click();
      //i. Click Submit.
      AutomationPracticeFormPage.submitButton.click();
      //j. Validate that each Labeled row contains the correct information
      AutomationPracticeFormPage.correctValues.should("contain.text","Kintija Mūrniece")
      .and ("contain.text", "s22murnkint@venta.lv")
      .and ("contain.text", "Female")
      .and ("contain.text", "28803380")
      .and ("contain.text", "28 February,1930")
      .and ("contain.text", "Economics")
      .and ("contain.text", "Music")
      .and ("contain.text", "norway.jpg")
      .and ("contain.text", "Talsi")
      .and ("contain.text", "NCR Delhi")

    });
  });
});