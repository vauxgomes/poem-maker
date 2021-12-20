let slideTemplate = `
{{#sections}}
	<div class="slide fade">
		<span class="title">{{ header }}</span>
		<section>
			<p>{{text}}</p>

			<div class="options">
				{{#options}}
						<input value="0" type="radio" name="qt-{{qId}}" id="qt-{{qId}}-{{opId}}" />
						<label for="qt-{{qId}}-{{opId}}">{{text}}</label>
				{{/options}}
			</div>
		</section>
	</div>
{{/sections}}`;