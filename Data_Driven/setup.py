"""
Setup script pour le système Data-Driven Dolibarr BTP
"""

from setuptools import setup, find_packages

with open("README.md", "r", encoding="utf-8") as fh:
    long_description = fh.read()

with open("requirements.txt", "r", encoding="utf-8") as fh:
    requirements = [line.strip() for line in fh if line.strip() and not line.startswith("#")]

setup(
    name="dolibarr-data-driven",
    version="1.0.0",
    author="Dolibarr BTP Team",
    author_email="admin@company.com",
    description="Système Data-Driven pour Dolibarr BTP avec DataLake, Warehouse et Smart Analytics",
    long_description=long_description,
    long_description_content_type="text/markdown",
    url="https://github.com/your-org/dolibarr-data-driven",
    packages=find_packages(),
    classifiers=[
        "Development Status :: 4 - Beta",
        "Intended Audience :: Developers",
        "License :: OSI Approved :: MIT License",
        "Operating System :: OS Independent",
        "Programming Language :: Python :: 3",
        "Programming Language :: Python :: 3.8",
        "Programming Language :: Python :: 3.9",
        "Programming Language :: Python :: 3.10",
        "Programming Language :: Python :: 3.11",
        "Topic :: Scientific/Engineering :: Artificial Intelligence",
        "Topic :: Database :: Database Engines/Servers",
        "Topic :: Office/Business :: Enterprise Resource Planning",
    ],
    python_requires=">=3.8",
    install_requires=requirements,
    extras_require={
        "dev": [
            "pytest>=7.0",
            "black>=23.0",
            "flake8>=6.0",
            "mypy>=1.0",
        ],
        "gpu": [
            "tensorflow-gpu>=2.15.0",
            "torch>=2.1.0",
        ]
    },
    entry_points={
        "console_scripts": [
            "dolibarr-data-driven=src.main:cli",
        ],
    },
    include_package_data=True,
    package_data={
        "": ["*.md", "*.txt", "*.yml", "*.yaml"],
    },
    keywords="dolibarr btp data-lake data-warehouse machine-learning analytics",
    project_urls={
        "Bug Reports": "https://github.com/your-org/dolibarr-data-driven/issues",
        "Source": "https://github.com/your-org/dolibarr-data-driven",
        "Documentation": "https://docs.your-org.com/dolibarr-data-driven",
    },
)