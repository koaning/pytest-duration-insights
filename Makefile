web:
	cd svelte-app; npm run build
	cp -r svelte-app/public pytest-duration-insights/static
