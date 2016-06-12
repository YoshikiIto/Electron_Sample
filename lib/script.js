var mdEditor = CodeMirror.fromTextArea(document.getElementById('editor_textarea'), {
    mode: "markdown",
    autofocus: true,
    lineNumbers: true,
    indentUnit: 4,
    extraKeys: {
        "Enter": "newlineAndIndentContinueMarkdownList"
    },
});

var editorVm, toolbarVm, footerVm;

$(function() {
    $('div.split-pane').splitPane();
    $(window).on('resize', function() {
        setTimeout(function(){adjustWindow()}, 50);
    });

    mdEditor.on(
        'change',
        function() {
            mdEditor.save();
            editorVm.input = $('#editor_textarea').val();
        }
    );

});
