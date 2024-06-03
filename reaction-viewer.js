/*
 This gadget displays SMIRKS and SMARTS renderings for chemical reactions, 
 where the item contains statements for P12491 (SMIRKS) and/or P8533 (SMARTS).
 Example items: 
 - SMIRKS: https://www.wikidata.org/wiki/Q898501 (Claisen condensation)
 - SMARTS: https://www.wikidata.org/wiki/Q101497 (Aldehydes)

 NOTE: This script uses the SMARTS.plus API (https://smarts.plus/) to generate SVG images of SMARTS/SMIRKS notations.
 Script is versioned at https://github.com/commons-research/reaction-viewer-gadget/
 Inspired by Magnus's SMILES gadget: https://www.wikidata.org/wiki/User:Magnus_Manske/smiles_gadget.js

 To add this gadget, put the following line on your common.js User subpage (https://www.wikidata.org/wiki/User:<YourWikiUserName>/common.js)
 
 importScript( 'User:GrndStt/reaction-viewer.js' );
*/

function renderChemicalNotation(prop) {
    $('#'+prop+' div.wikibase-statementview').each(function(dummy, element) {
        let id = 'chemical_'+$(element).attr('id');
        let notation_string = $(element).find('div.wikibase-snakview-value').eq(0).text();
        let notation_url = 'https://smarts.plus/smartsview/download_rest?smarts=' 
                         + encodeURIComponent(notation_string) 
                         + ';filetype=svg;vmode=0;textdesc=0;depsymbols=0;smartsheading=0';
        
        let html = '<div style="width: 100%; height: 300px; display: flex; justify-content: center; align-items: center;">'
                 + '<img class="chemical_image" id="'+id+'" src="'+notation_url+'" style="width: 100%; height: auto; object-fit: contain;">'
                 + '</div>';
        $(element).append(html);
    });
}

function renderAllNotations() {
    if ($('#P12491').length > 0) {
        $('img.chemical_image').remove();
        renderChemicalNotation('P12491');
    }
    if ($('#P8533').length > 0) {
        $('img.chemical_image').remove();
        renderChemicalNotation('P8533');
    }
}

renderAllNotations();
