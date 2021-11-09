const PastePage= require('../pageobjects/paste.page');


describe('My Paste application', () => {
    it('should set values', async () => {
        await browser.maximizeWindow();
        await PastePage.open();

        await PastePage.newPasteTextArea.setValue('git config --global user.name  "New Sheriff in Town"\n' +
            'git reset $(git commit-tree HEAD^{tree} -m "Legacy code")\n' +
            'git push origin master --force');
        await browser.pause(2000);
        await PastePage.syntaxHighlighting.scrollIntoView({block:"center"});
        await PastePage.syntaxHighlighting.click();
        //await PastePage.syntaxHighLightUl.$$('li')[0].click()
        await browser.keys('ArrowDown');
         await browser.keys('Enter');
        await browser.pause(2000);

        await PastePage.pasteExpiration.click();
        await PastePage.ul.$$('li')[2].click();

        await PastePage.pasteNameTitle.setValue("how to gain dominance among developers");
        await PastePage.savePasteBtn.scrollIntoView({block:"center"});
        await PastePage.savePasteBtn.click();
        await browser.pause(3000);

        await browser.waitUntil(
             async () =>await (browser.getTitle() === PastePage.pasteNameTitle, {timeout: 5000,}))
      const title=browser.getTitle();
     expect(title).toHaveText('how to gain dominance among developers');

    });
    it('syntax should be bash ', async ()=>{
        PastePage.bash.toHaveText('bash');

    })

    it('pasted text should be ths same that was typed ', async ()=>{
        PastePage.pastedText.toBe(PastePage.newPasteTextArea.getValue());

    })
});


