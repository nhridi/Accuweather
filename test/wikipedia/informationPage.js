import BasePage from "../../framework/page/BasePage.js";
import { Label } from "../../framework/elements/index.js";

class InformationPage extends BasePage {
    constructor() {
        super(new Label('//*[@id="firstHeading"]', 'Information Page'));
    }
}

export default new InformationPage();
