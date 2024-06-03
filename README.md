# reaction-viewer-gadget

## What does the stuff do ?

This gadget displays SMARTS/SMIRKS renderings for chemical reactions or patterns on Wikidata. In other words it renders an image for item contains statements for [P12491](https://www.wikidata.org/wiki/Property:P12491) or [P8533](https://www.wikidata.org/wiki/Property:P8533).

### Render a SMIRKS reaction 

Example item: https://www.wikidata.org/wiki/Q898501 (Claisen condensation)

<img width="924" alt="image" src="https://github.com/commons-research/reaction-viewer-gadget/assets/2760049/e0fae94c-cbf0-44ef-a2b6-6d645783d532">

### Render a SMARTS pattern

Example item: https://www.wikidata.org/wiki/Q101497 (Aldehydes)

<img width="931" alt="image" src="https://github.com/commons-research/reaction-viewer-gadget/assets/2760049/e2d57121-9dad-408e-b67a-c1389101ffa5">

## What does the stuff use ?

This script uses the SMARTS.plus API (https://smarts.plus/) to generate SVG images of SMARTS/SMIRKS notations.

Script is versionned at https://github.com/commons-research/reaction-viewer-gadget/

Inspired by Magnus's SMILES gadget: https://www.wikidata.org/wiki/User:Magnus_Manske/smiles_gadget.js

## How do I install the stuff ?

To add this gadget, navigate to your commons.js User subpage (`https://www.wikidata.org/wiki/<YourWikiUserName>/common.js`)

Add the following line

```js
importScript( 'User:GrndStt/reaction-viewer.js' );
```

Note: After publishing, you may have to bypass your browser's cache to see the changes.

- Firefox / Safari: Hold Shift while clicking Reload, or press either Ctrl-F5 or Ctrl-R (⌘-R on a Mac)
- Google Chrome: Press Ctrl-Shift-R (⌘-Shift-R on a Mac)
- Edge: Hold Ctrl while clicking Refresh, or press Ctrl-F5.

