#!/bin/bash
set -e

repo='https://github.com/lua/lua.git'
. tests/thirdparty/thirdpartycommon
git reset --hard 6443185167c77adcc8552a3fee7edab7895db1a9  # v5.4.6

CFLAGS="-Dl_signalT=int"
sed -i.bak 's/-DLUA_USE_LINUX//' makefile

$make clean
$make -j1 CC="$xcc $CFLAGS"

# all.lua not work
cd testes && ../lua locals.lua
