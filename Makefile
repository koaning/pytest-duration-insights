web:
	cd svelte-app; npm run build
	cp -r svelte-app/public/* pytest_duration_insights/static

pages: web
	# WARNING! You will need to manually make the paths relative.
	#
	# Change the retreival via; 
	#
	# let mapPromise = getData("pytest-duration-insights/data.json");
	# let treePromise = getData("pytest-duration-insights/treedata.json");
	cp -r svelte-app/public/* docs
	python -m http.server 8000 --directory docs

demo-scikit: web
	python -m pytest_duration_insights explore tests/data/scikit-lego-reportlog.jsonl

demo-rasa: web
	python -m pytest_duration_insights explore tests/data/rasa-reportlog.jsonl

install: 
	python -m pip install -e . 
	python -m pip install wheel twine

clean:
	rm -rf .pytest_cache
	rm -rf .ipynb_checkpoints
	rm -rf **/.pytest_cache
	rm -rf **/.ipynb_checkpoints
	rm -rf .coverage*
	rm -rf **/.DS_Store

pypi: clean
	python setup.py sdist
	python setup.py bdist_wheel --universal
	twine upload dist/*
