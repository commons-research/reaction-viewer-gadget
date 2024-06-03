/*
 This gadget displays SMIRKS renderings for chemical reactions, 
 where the item contains statements for P12491.
 Example item: https://www.wikidata.org/wiki/Q898501 (Claisen condensation)

 NOTE: This script uses the SMARTS.plus API (https://smarts.plus/) to generate SVG images of SMARTS/SMIRKS notations.
 Script is versionned at https://github.com/commons-research/reaction-viewer-gadget/
 Inspired by Magnus's SMILES gadget: https://www.wikidata.org/wiki/User:Magnus_Manske/smiles_gadget.js


 To add this gadget, put the following line on your common.js User subpage (https://www.wikidata.org/wiki/User:<YourWikiUserName>/common.js)
 
 importScript( 'User:GrndStt/reaction-viewer.js' );

*/

function renderSMIRKS(prop) {
    $('#'+prop+' div.wikibase-statementview').each(function(dummy, element) {
        let id = 'smirks_'+$(element).attr('id');
        let smirks_string = $(element).find('div.wikibase-snakview-value').eq(0).text();
        let smirks_url = 'https://smarts.plus/smartsview/download_rest?smarts=' 
                         + encodeURIComponent(smirks_string) 
                         + ';filetype=png;vmode=0;textdesc=0;depsymbols=0;smartsheading=0';
        
        let html = '<div style="width: 100%; height: 300px; display: flex; justify-content: center; align-items: center;">'
                 + '<img class="smirks_image" id="'+id+'" src="'+smirks_url+'" style="width: 100%; height: auto; object-fit: contain; clip-path: inset(40% 0 40% 0);">'
                 + '</div>';
        $(element).append(html);
    });
}

if ($('#P12491').length > 0) {
    $('img.smirks_image').remove();
    renderSMIRKS('P12491');
}
