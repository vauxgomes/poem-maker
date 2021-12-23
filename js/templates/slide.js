let slideTemplate = `
{{#questions}}
	<section class="slide fade">
		<p class="title">{{text}}</p>

		<div class="options">
			{{#options}}
				<div>
					<input value="{{value}}" type="radio" name="qt-{{pId}}-{{qId}}" id="qt-{{pId}}-{{qId}}-{{oId}}"/>
					<label for="qt-{{pId}}-{{qId}}-{{oId}}">{{text}}</label>
				</div>
			{{/options}}

			{{^options}}
				<input type="text" name="qt-{{pId}}-{{qId}}">
			{{/options}}
		</div>
	</section>
{{/questions}}`;
