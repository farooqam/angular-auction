import {} from 'jasmine';

export class TestUtilities {
    
    public static Verify(
        nativeElement: any, 
        selector: string, 
        predicate : (selectorResult: any) => boolean) : void
    {
        var result = nativeElement.querySelectorAll(selector);
        expect(predicate(result)).toBeTruthy();
    }

    public static VerifyElementById(nativeElement: any, id: string)
    {
        this.Verify(nativeElement, `#${id}`, (nodes) => nodes.length == 1);
    }
}
