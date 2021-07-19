import { assert } from 'chai';
import { binding, given, when, then } from 'cucumber-tsflow';
import homepage from '../pages/Homepage';

@binding()
export class pkSteps {
    @given(/^I am on the PK product offering page$/)
    public async givenOnHomepage() {
        browser.url(
            'https://pt.sc.com/onboarding/rtob-dev/multi-country/apply.html'
        );
        browser.maximizeWindow();
    }

    @when(/^I select the "([^"]*)" as a product/)
    public whenIEnterSearchText(text: string) {
        $("//*[text()='Standard Chartered Visa Platinum']").click();
        browser.pause(10000);
    }
}
