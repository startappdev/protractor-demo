describe('slow calculator', function () {
    beforeEach(function () {
        browser.get('http://localhost:3456');
    });

    it('should add numbers', function () {
        element(by.model('first')).sendKeys(4);
        element(by.model('second')).sendKeys(5);
        element(by.id('gobutton')).click();
        expect(element(by.binding('latest')).getText()).
            toEqual('9');
    });

    it('should verify all simple math operations exist in the dropdown menu (+,-,*,/)', function () {

    });

    describe('memory', function () {
        it('should start out with an empty memory', function () {

        });

        it('should fill the memory with past results', function () {

        });

        it('should only display the last 5 results window', function () {

        })

    });

    describe('check special functions', function () {

        it('should test that results that equal 42 are colored red', function () {

        });

        it('should print NaN with link to wikipedia (https://en.wikipedia.org/wiki/NaN) if result is NaN', function () {

        });
    })
});
