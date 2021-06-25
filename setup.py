import os
from setuptools import setup, find_packages

from pytest_duration_insights import __version__

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
    version=__version__,
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
    long_description_content_type="text/markdown",
    project_urls={
        "Bug Tracker": "https://github.com/koaning/pytest-duration-insights/issues",
        "Documentation": "https://github.com/koaning/pytest-duration-insights",
        "Source Code": "https://github.com/koaning/pytest-duration-insights",
    },
    classifiers=[
        "Intended Audience :: Developers",
        "Programming Language :: Python :: 3",
        "Programming Language :: Python :: 3.6",
        "Programming Language :: Python :: 3.7",
        "Programming Language :: Python :: 3.8",
        "License :: OSI Approved :: MIT License",
    ],
)
