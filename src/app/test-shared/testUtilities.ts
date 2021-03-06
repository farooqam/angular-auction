import {} from 'jasmine';

export class Expect {
    
    public static IsTrue(
        nativeElement: any, 
        selector: string, 
        predicate : (selectorResult: any) => boolean) : void
    {
        var result = nativeElement.querySelectorAll(selector);
        expect(predicate(result)).toBeTruthy();
    }

    public static ElementExists(nativeElement: any, elementId: string)
    {
        Expect.IsTrue(nativeElement, `#${elementId}`, (nodes) => nodes.length == 1);
    }

    public static DirectiveExists(nativeElement: any, name: string)
    {
        Expect.IsTrue(nativeElement, name, (nodes) => nodes.length == 1);
    }
}
