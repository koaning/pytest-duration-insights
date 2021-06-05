from setuptools import setup, find_packages
from pytest_duration_insights import VERSION

base_packages = ["pytest-reportlog", "clumper", "parse"]


setup(
    name="pytest-duration-insights",
    version=VERSION,
    packages=find_packages(exclude=['notebooks']),
    install_requires=base_packages,
)
