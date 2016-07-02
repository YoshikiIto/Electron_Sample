/*
どうもここで定義しているmdEditorとその後のfunctionがうまくうごいていない。
varMdEditorの先をコピペして<script></script>で囲んで、index.htmlにベタ書きしたら、想定どおり、monokaiが適用されたしmarkdownとしてシンタックスハイライトもされた。
*/
/*
var mdEditor = CodeMirror.fromTextArea(document.getElementById('editor_textarea'), {
    mode: "markdown",
    autofocus: true,
    lineNumbers: true,
    indentUnit: 4,
		theme: "monokai",
    extraKeys: {
        "Enter": "newlineAndIndentContinueMarkdownList"
    },
});
*/

var editorVm, toolbarVm, footerVm;

function ToRight() {
	document.getElementById('preview_area').textContent = document.getElementById('editor_textarea').textContent;
}

function ToLeft() {
	window.alert(document.getElementById('preview_area').textContent);
}

$(function() {

    mdEditor.on(
        'change',
        function() {
            mdEditor.save();
            editorVm.input = $('#editor_textarea').val();
        }
    );

});
