# reaction-viewer-gadget

## What does the stuff do ?

This gadget displays SMARTS/SMIRKS renderings for chemical reactions or patterns on Wikidata. In other words it renders an image for item containing statements for [P12491](https://www.wikidata.org/wiki/Property:P12491) or [P8533](https://www.wikidata.org/wiki/Property:P8533).

You can use two modes of the gadget, full or compact, depending on wether you would like to display the legend or not.

### Render a SMIRKS reaction 

#### Compact mode

Example item: https://www.wikidata.org/wiki/Q898501 (Claisen condensation)

<img width="924" alt="image" src="https://github.com/commons-research/reaction-viewer-gadget/assets/2760049/e0fae94c-cbf0-44ef-a2b6-6d645783d532">

#### Full mode

Example item: https://www.wikidata.org/wiki/Q21109559 (L-leucine transaminase activity )

<img width="1141" alt="image" src="https://github.com/commons-research/reaction-viewer-gadget/assets/2760049/05502b3a-70b5-4980-b829-3f3510d4ab76">


### Render a SMARTS pattern

#### Compact mode

Example item: https://www.wikidata.org/wiki/Q101497 (Aldehydes)

<img width="931" alt="image" src="https://github.com/commons-research/reaction-viewer-gadget/assets/2760049/e2d57121-9dad-408e-b67a-c1389101ffa5">


#### Full mode

Example item: https://www.wikidata.org/wiki/Q101497 (Aldehydes)

<img width="939" alt="image" src="https://github.com/commons-research/reaction-viewer-gadget/assets/2760049/19492131-ee18-429f-be74-516329f4ac52">


## What does the stuff use ?

This script uses the SMARTS.plus API (https://smarts.plus/) to generate SVG images of SMARTS/SMIRKS notations.

Script is versionned at https://github.com/commons-research/reaction-viewer-gadget/

Inspired by Magnus's SMILES gadget: https://www.wikidata.org/wiki/User:Magnus_Manske/smiles_gadget.js

## How do I install the stuff ?

To add this gadget, navigate to your commons.js User subpage (`https://www.wikidata.org/wiki/<YourWikiUserName>/common.js`)

Add the following line

- for the full mode

```js
importScript( 'User:GrndStt/reaction-viewer.js' );
```

- for the compact mode

```js
importScript( 'User:GrndStt/reaction-viewer-compact.js' );
```

Note: After publishing, you may have to bypass your browser's cache to see the changes.

- Firefox / Safari: Hold Shift while clicking Reload, or press either Ctrl-F5 or Ctrl-R (⌘-R on a Mac)
- Google Chrome: Press Ctrl-Shift-R (⌘-Shift-R on a Mac)
- Edge: Hold Ctrl while clicking Refresh, or press Ctrl-F5.

