from setuptools import setup

setup(
    name='back-end',
    packages=['back_end'],
    include_package_data=True,
    install_requires=[
        'flask',
    ],
)