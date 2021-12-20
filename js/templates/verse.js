let verseTempalte = `
{{#verses}}
    <div class="verse active">
        {{#.}}
            <span>{{.}}</span>
        {{/.}}
    </div>
{{/verses}}`;
