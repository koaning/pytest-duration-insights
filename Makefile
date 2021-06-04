web:
	cd svelte-app; npm run build
	cp -r svelte-app/public/* pytest-duration-insights/static

demo: web
	python -m pytest-duration-insights tests/data/scikit-lego-reportlog.jsonl
