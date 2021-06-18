<img src="logo.png" width="125" height="125" align="right" />

# Pytest Duration Insights 

This python package offers a small dashboard on top of the report that is 
generated by `pytest-reportlog`. 

## Instructions. 

1. Install.

```
pip install pytest-reportlog pytest-duration-insights
```

2. Make a report. 

```
pytest --report-log reportlog.jsonl
```

3. Run this app.

```
python-duration-insights explore reportlog.jsonl
```

This will start up a service that tries to help you find areas in your
testing code base that are worth investigating.

## Preview 

We're hosting a demo of this service on GitHub pages. You can view it [here]().