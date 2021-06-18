<img src="https://github.com/koaning/pytest-duration-insights/blob/main/logo.png" width="175" height="175" align="right" />

# Pytest Duration Insights 

This python package offers a small dashboard that helps you investigate
long running pytest runs. It's built on top of the report that is generated 
by [pytest-reportlog](https://github.com/pytest-dev/pytest-reportlog). 

## Instructions. 

### 1. Install.

```
pip install pytest-reportlog pytest-duration-insights
```

### 2. Make a report. 

```
pytest --report-log reportlog.jsonl
```

### 3. Explore!

```
pytest-duration-insights explore reportlog.jsonl
```

This will start up a service that tries to help you find areas in your
testing code base that are worth investigating.

## Preview 

We're hosting a demo of this service on GitHub pages. You can view it 
[here](https://koaning.github.io/pytest-duration-insights/).

## Roadmap 

We're only scratching the surface of what the `reportlog.jsonl` file gives us. We might, for
example, also explore how long it takes to setup/teardown tests. Feedback is appreciated, 
especially if somebody has a keen insight that has helped in the past.

That said, this project is very much an experiment as well. See it as a thing you could
try rather than a best practice.
