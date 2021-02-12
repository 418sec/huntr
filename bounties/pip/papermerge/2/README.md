# :star2: Description
- Papermerge is an open source document management system (DMS) primarily designed for archiving and retrieving your digital documents. Instead of having piles of paper documents all over your desk, office or drawers. In The Admin Upload Function. Users Are Able To Trigger Cross-Site Scripting (XSS) Via XSS Payload On The Filename Due To Lack Of User Input Filter While Viewing Error Messages.

## :bust_in_silhouette: Steps To Reproduce:
- Open Papermerge [Demo Instance](https://demo.papermerge.com/#5) Or You Own Instance With `/#{ANY-NUMBER}`
- You Will Find a Button With `Upload` Word On It.
- Create a Simple File On Your Machine With XSS Payload: `<img src=x onerror=confirm(1)>.jpeg`
- Try To Upload That File To The Instance. And The XSS Will Be Triggered.

## :boom: Proof Of Concept:
![ProofOfConcept](https://i.imgur.com/2AfJaA6.gif)

Regards.
