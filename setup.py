from setuptools import setup, find_packages

base_packages = ["pytest-reportlog", "clumper", "parse"]


setup(
    name="pytest-duration-insights",
    version="0.0.1",
    packages=find_packages(exclude=['notebooks']),
    install_requires=base_packages,
)
