web:
	cd svelte-app; npm run build
	cp -r svelte-app/public/* pytest_duration_insights/static

demo-scikit: web
	python -m pytest_duration_insights explore tests/data/scikit-lego-reportlog.jsonl

demo-rasa: web
	python -m pytest_duration_insights explore tests/data/rasa-reportlog.jsonl
