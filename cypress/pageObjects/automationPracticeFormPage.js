import { BasePage } from "./basePage";

export class AutomationPracticeFormPage extends BasePage {
    static get url(){
        return"automation-practice-form";
    }

    static get firstNameField() {
        return cy.get("#firstName");

    }
    
    static get lastNameField() {
        return cy.get("#lastName");
    }

    static get emailField() {
        return cy.get("#userEmail");
    }

    static get clickOnGender() {
        return cy.get("#genterWrapper");
    }

    static get mobileNumberField() {
        return cy.get("#userNumber");
    }
    /*
    static get clickOnDateOfBirthInput() {
        return cy.get("#dateOfBirthInput");
    }

    static get chooseMonth() {
        return cy.get("[class='react-datepicker__month-select']");
    }

    static get chooseYear() {
        return cy.get("[class='react-datepicker__year-select']");
    }
     
    static get dateSelect() {
        return cy.get("[class='react-datepicker__month']");
    }
    */

    static dateSelect(date) {
        cy.get("#dateOfBirthInput").click();
        cy.get("[class='react-datepicker__month-select']").select("2");
        cy.get("[class='react-datepicker__year-select']").select("1930");
        cy.get("[class='react-datepicker__month']").contains(date).click();
    }

    static get typeSubjects() {
        return cy.get("#subjectsContainer");
    }
    
    static get clickOnHobbies() {
        return cy.get("[class='col-md-9 col-sm-12']");
    }


    static get clickOnChooseFile() {
        return cy.get("#uploadPicture");
    }

    static get typeAddress() {
        return cy.get("#currentAddress");
    }

    static get optionsState() {
        return cy.get("#state");
    }

    static get optionsCity() {
        return cy.get("#city");
    }

    static get submitButton() {
        return cy.get("#submit");
    }

    static get correctValues() {
        return cy.get("[class='table-responsive']");
    }

}