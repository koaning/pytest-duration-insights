from setuptools import setup, find_packages
from pytest_duration_insights import VERSION

base_packages = ["pytest-reportlog>=0.1.2", "clumper>=0.2.12", "parse>=1.19.0", "typer>=0.3.2"]


setup(
    name="pytest-duration-insights",
    version=VERSION,
    packages=find_packages(exclude=['notebooks']),
    install_requires=base_packages,
    entry_points={
        'console_scripts': ['pytest-duration-insights=pytest_duration_insights.__main__:app']
    },
    package_data={"pytest-duration-insights": ["static/**/*"]},
)
