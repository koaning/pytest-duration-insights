import os
from setuptools import setup, find_packages

from pytest_duration_insights import VERSION

base_packages = [
    "pytest-reportlog>=0.1.2",
    "clumper>=0.2.12",
    "parse>=1.19.0",
    "typer>=0.3.2",
]


def read(fname):
    return open(os.path.join(os.path.dirname(__file__), fname)).read()


setup(
    name="pytest-duration-insights",
    version=VERSION,
    packages=find_packages(),
    include_package_data=True,
    install_requires=base_packages,
    entry_points={
        "console_scripts": [
            "pytest-duration-insights=pytest_duration_insights.__main__:app"
        ]
    },
    package_data={"pytest_duration_insights": ["static/*", "static/**/*"]},
    long_description=read("readme.md"),
    project_urls={
        "Bug Tracker": "https://github.com/koaning/pytest-duration-insights/issues",
        "Documentation": "https://github.com/koaning/pytest-duration-insights",
        "Source Code": "https://github.com/koaning/pytest-duration-insights",
    },
)
