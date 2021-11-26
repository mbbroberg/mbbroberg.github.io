---
author: mbbroberg
blog: true
date: "2020-02-29T00:00:00Z"
description: Tracking down Python install errors can be a mess. Here's one I hunted
  down so you don't have to.
tag:
- python
title: Mac error on pip install ends up being clang and xcode
slug: ../clang-error-in-pip/
---

I have been having intermittent installation errors with Python packages on my Mac. They occur on anything Python 3.7.x or 3.8.x after I set up a virtual environment and `pip install` after that (note that I manage my Python versions with [pyenv](https://github.com/pyenv/pyenv)).

```python 
~/Develop/chaoss
❯ which python
/Users/mbbroberg/.pyenv/shims/python

~/Develop/chaoss
❯ python -V
Python 3.7.3

~/Develop/chaoss
❯ python -m venv venv

~/Develop/chaoss
❯ activate

~/Develop/chaoss
venv ❯ pip install --upgrade pip
Collecting pip
  Using cached https://files.pythonhosted.org/packages/54/0c/d01aa759fdc501a58f431eb594a17495f15b88da142ce14b5845662c13f3/pip-20.0.2-py2.py3-none-any.whl
Installing collected packages: pip
  Found existing installation: pip 19.0.3
    Uninstalling pip-19.0.3:
      Successfully uninstalled pip-19.0.3
Successfully installed pip-20.0.2

~/Develop/chaoss
venv ❯ pip install perceval
Collecting perceval
  Downloading perceval-0.12.24-py3-none-any.whl (183 kB)
     |████████████████████████████████| 183 kB 1.2 MB/s
Collecting feedparser>=5.1.3
  Downloading feedparser-5.2.1.tar.bz2 (192 kB)
     |████████████████████████████████| 192 kB 3.3 MB/s
Collecting python-dateutil>=2.6.0
  Using cached python_dateutil-2.8.1-py2.py3-none-any.whl (227 kB)
Collecting grimoirelab-toolkit>=0.1.4
  Downloading grimoirelab_toolkit-0.1.10-py3-none-any.whl (19 kB)
Collecting beautifulsoup4>=4.3.2
  Downloading beautifulsoup4-4.8.2-py3-none-any.whl (106 kB)
     |████████████████████████████████| 106 kB 4.4 MB/s
Collecting dulwich<0.19,>=0.18.5
  Downloading dulwich-0.18.6.tar.gz (331 kB)
     |████████████████████████████████| 331 kB 3.2 MB/s
Collecting urllib3>=1.22
  Using cached urllib3-1.25.8-py2.py3-none-any.whl (125 kB)
Collecting requests>=2.7.0
  Using cached requests-2.23.0-py2.py3-none-any.whl (58 kB)
Collecting six>=1.5
  Using cached six-1.14.0-py2.py3-none-any.whl (10 kB)
Collecting soupsieve>=1.2
  Downloading soupsieve-2.0-py2.py3-none-any.whl (32 kB)
Collecting certifi>=2017.4.17
  Using cached certifi-2019.11.28-py2.py3-none-any.whl (156 kB)
Collecting chardet<4,>=3.0.2
  Using cached chardet-3.0.4-py2.py3-none-any.whl (133 kB)
Collecting idna<3,>=2.5
  Using cached idna-2.9-py2.py3-none-any.whl (58 kB)
Installing collected packages: feedparser, six, python-dateutil, grimoirelab-toolkit, soupsieve, beautifulsoup4, dulwich, urllib3, certifi, chardet, idna, requests, perceval
    Running setup.py install for feedparser ... done
    Running setup.py install for dulwich ... error
    ERROR: Command errored out with exit status 1:
     command: /Users/mbbroberg/Develop/chaoss/venv/bin/python -u -c 'import sys, setuptools, tokenize; sys.argv[0] = '"'"'/private/var/folders/5l/c1y1gcw97szdywgf9rk1100m0000gn/T/pip-install-py8u_n_f/dulwich/setup.py'"'"'; __file__='"'"'/private/var/folders/5l/c1y1gcw97szdywgf9rk1100m0000gn/T/pip-install-py8u_n_f/dulwich/setup.py'"'"';f=getattr(tokenize, '"'"'open'"'"', open)(__file__);code=f.read().replace('"'"'\r\n'"'"', '"'"'\n'"'"');f.close();exec(compile(code, __file__, '"'"'exec'"'"'))' install --record /private/var/folders/5l/c1y1gcw97szdywgf9rk1100m0000gn/T/pip-record-3dd124km/install-record.txt --single-version-externally-managed --compile --install-headers /Users/mbbroberg/Develop/chaoss/venv/include/site/python3.7/dulwich
         cwd: /private/var/folders/5l/c1y1gcw97szdywgf9rk1100m0000gn/T/pip-install-py8u_n_f/dulwich/
    Complete output (274 lines):
    running install
    running build
    running build_py
    creating build
    creating build/lib.macosx-10.14-x86_64-3.7
    # ... skipping 100 lines of compiling output ...
    clang -Wno-unused-result -Wsign-compare -Wunreachable-code -DNDEBUG -g -fwrapv -O3 -Wall -I/Users/mbbroberg/Develop/chaoss/venv/include -I/Users/mbbroberg/.pyenv/versions/3.7.3/include/python3.7m -c dulwich/_objects.c -o build/temp.macosx-10.14-x86_64-3.7/dulwich/_objects.o
    xcrun: error: invalid active developer path (/Library/Developer/CommandLineTools), missing xcrun at: /Library/Developer/CommandLineTools/usr/bin/xcrun
    error: command 'clang' failed with exit status 1
    ----------------------------------------
ERROR: Command errored out with exit status 1: /Users/mbbroberg/Develop/chaoss/venv/bin/python -u -c 'import sys, setuptools, tokenize; sys.argv[0] = '"'"'/private/var/folders/5l/c1y1gcw97szdywgf9rk1100m0000gn/T/pip-install-py8u_n_f/dulwich/setup.py'"'"'; __file__='"'"'/private/var/folders/5l/c1y1gcw97szdywgf9rk1100m0000gn/T/pip-install-py8u_n_f/dulwich/setup.py'"'"';f=getattr(tokenize, '"'"'open'"'"', open)(__file__);code=f.read().replace('"'"'\r\n'"'"', '"'"'\n'"'"');f.close();exec(compile(code, __file__, '"'"'exec'"'"'))' install --record /private/var/folders/5l/c1y1gcw97szdywgf9rk1100m0000gn/T/pip-record-3dd124km/install-record.txt --single-version-externally-managed --compile --install-headers /Users/mbbroberg/Develop/chaoss/venv/include/site/python3.7/dulwich Check the logs for full command output.
```

I tried to find the logs mentioned, but gave up on them and decided to cycle through some sane troubleshooting steps. 

My default assumption is that I am (a) on an outdated version of Python, so I cycled through every one I can think through. My second assumption is that my shell is causing an issue, so I hopped out of `fish` shell into `bash` and `zsh`, both of which had the same issue. I finally centered in on the exit command: `clang`, the C language compiler pip appears to use by default. So I gave that a spin: 

```bash
~/Develop/chaoss
venv ❯ which clang
/usr/bin/clang

~/Develop/chaoss
venv ❯ clang
xcrun: error: invalid active developer path (/Library/Developer/CommandLineTools), missing xcrun at: /Library/Developer/CommandLineTools/usr/bin/xcrun
```

Ah-ha! There's something off with `clang`'s dependencies that gets bundled into the ever-important xcode-select installation. Let's run a fresh install:

```bash
~/Develop/chaoss
venv ❯ xcode-select --install
xcode-select: note: install requested for command line developer tools
```

And see if `clang` still errors. 

```bash
~/Develop/chaoss
venv ❯ clang
clang: error: no input files
```

Nope. Then I tried to install my package through pip again. 

```bash
~/Develop/chaoss
venv ❯ pip install perceval
Collecting perceval
  Using cached perceval-0.12.24-py3-none-any.whl (183 kB)
Requirement already satisfied: grimoirelab-toolkit>=0.1.4 in ./venv/lib/python3.7/site-packages (from perceval) (0.1.10)
Requirement already satisfied: python-dateutil>=2.6.0 in ./venv/lib/python3.7/site-packages (from perceval) (2.8.1)
Collecting dulwich<0.19,>=0.18.5
  Using cached dulwich-0.18.6.tar.gz (331 kB)
Requirement already satisfied: feedparser>=5.1.3 in ./venv/lib/python3.7/site-packages (from perceval) (5.2.1)
Collecting urllib3>=1.22
  Using cached urllib3-1.25.8-py2.py3-none-any.whl (125 kB)
Requirement already satisfied: beautifulsoup4>=4.3.2 in ./venv/lib/python3.7/site-packages (from perceval) (4.8.2)
Collecting requests>=2.7.0
  Using cached requests-2.23.0-py2.py3-none-any.whl (58 kB)
Requirement already satisfied: six>=1.5 in ./venv/lib/python3.7/site-packages (from python-dateutil>=2.6.0->perceval) (1.14.0)
Requirement already satisfied: soupsieve>=1.2 in ./venv/lib/python3.7/site-packages (from beautifulsoup4>=4.3.2->perceval) (2.0)
Collecting idna<3,>=2.5
  Using cached idna-2.9-py2.py3-none-any.whl (58 kB)
Collecting certifi>=2017.4.17
  Using cached certifi-2019.11.28-py2.py3-none-any.whl (156 kB)
Collecting chardet<4,>=3.0.2
  Using cached chardet-3.0.4-py2.py3-none-any.whl (133 kB)
Installing collected packages: dulwich, urllib3, idna, certifi, chardet, requests, perceval
    Running setup.py install for dulwich ... done
Successfully installed certifi-2019.11.28 chardet-3.0.4 dulwich-0.18.6 idna-2.9 perceval-0.12.24 requests-2.23.0 urllib3-1.25.8
```

Installation happened with no error. There we go ✅

## Improving the Python pip user experience 

The layers of technology we depend on to run software can humble anyone new to programming. With Python becoming more and more the first language for developers (from software engineer to hobbyist), my hope is that the install, upgrade, and environment management tooling can become friendlier and hide some of this complexity by default. 

If I were to redesign this experience, I would show this level of detail in a `--verbose` output of pip while it defaults to something more like: 

```
~/Develop/chaoss
❯ pip install perceval
Checking for virtual environments. Don't see one: do you want to set one up to contain dependencies to this folder (Recommended): Y/N 
Y
What would you like to name the virtual environment (default: venv)? 
venv
  Setting up virtual environment. Python version is 3.7.3
  Upgrading local pip to latest version, pip-20.0.2
Installing perceval
     |████████████████████████ |
```

More on what that means to the user experience:

- An interactive prompt helps new user by default. This could be introduced gradually, first with an `--interactive` flag, then slowly adopted as the default with additonal alternative flags and sane behaviors to avoid interactivity. For example:
  - `--venv` to name the environment.
  - `-f` to override any interactivity and install to the system Python.
  - No prompt comes up if there is already an activated environment.
- Less information is sufficient for most Python users. Let them see a package as a single package, and start to learn the libraries when they get into the source code, not during installation. 
  - Make `-v`/`--verbose` to be the current level of output. 
  - Introduce a `-vv` to replace what is currently `-v` given its additional details.

Again this can be introduced slowly since it will break behavior people have used for many years. Include Warn prompts and update statuses for at least a few versions before the switch.

## Wrapping up

Dependencies can be tricky. I hope this helps others get out of a similar situation in the future. 

Thinking more broadly: Python has become the predominate beginner language outside of a speciality in front-end development. I hope to see more progress in it being an easy-to-use language in future releases, and I intend to participate where I can to do so. 

