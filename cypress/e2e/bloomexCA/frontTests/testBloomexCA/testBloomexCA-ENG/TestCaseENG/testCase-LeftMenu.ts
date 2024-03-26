import MenuSectionAndCategories from '../steps-ENG/MenuSectionAndCategories.steps'
describe ("Test case №5", () => {

    it('Check Left Menu', () => {
        MenuSectionAndCategories.checkLeftMenuByNameAndClick('RED TAG SPECIALS')
    })
})