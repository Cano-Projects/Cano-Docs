---
title: CanoOS
sidebar_position: 6
---

# CanoOS
CanoOS is a Unix-inpired operationg system that makes use of the set of Cano suite. The OS intents to be packaged with the [TIM](https://github.com/CobbCoding1/tim) virtual machine built by [CobbCoding1](https://github.com/CobbCoding1) as an environment to run programs, [Canoscript](https://github.com/CobbCoding1/canoscript) for writting programs, and [Cano](https://github.com/CobbCoding1/Cano) as the text editor, and [Cano-sh](https://github.com/CobbCoding1/cano-sh) as the shell!


## Installing and Building CanoOS

### Requirements

CanoOS can bt built using [Make](https://www.gnu.org/software/make/). The `Makerfile` assumes the following tools are installed:

- nasm
- i686-elf-gcc
- i686-elf-binutils
- qemu for i386

You can install the i686-elf and binutils using your favorite package manager or build them from source using the [setup script](https://github.com/nbarger/CanoOS/blob/main/setup.sh)


The `setup.sh` script will download and build both GCC and Binutils using by using the following command:

```sh
./setup.sh -i
```

The following command will tell the `setup.sh` script to add `i686-gcc` and `i686-binutils` to your PATH by making a new entry in your `.bashrc` file.

```sh
./setup.sh -p
```

### Building

To build CanoOS, run the following command:

```sh
make
```

Then run the following command to run the OS:

```sh
make run
```
