import {} from 'jasmine';

export class TestUtilities {
    
    public static VerifyElementText(nativeElement: any, elementName: string, expectedText: string) : void {
        expect(nativeElement.querySelector(elementName).innerHTML).toContain(expectedText);
    }

    public static VerifyDOM(nativeElement: any, selector: string) : void {
        expect(nativeElement.querySelector(selector)).toBeTruthy();
    }

    public static Verify(nativeElement: any, selector: string, predicate : (selectorResult: any) => boolean) : void
    {
        var result = nativeElement.querySelectorAll(selector);
        expect(predicate(result)).toBeTruthy();
    }
}
