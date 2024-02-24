#! /usr/bin/env node

'use strict'

const fs = require('fs')
const fsPromises = require('fs').promises
const path = require('path')
const { WASI } = require('@wasmer/wasi')

async function getRealpaths(map) {
  const promises = Object.keys(map).map(async key => {
    try {
      map[key] = await fsPromises.realpath(map[key])
    } catch (e) {
      if (e.code === 'ENOENT') {
        console.error(`Error: "${map[key]}" not exist`)
      } else {
        console.error(e)
      }
      process.exit(1)
    }
  })
  await Promise.all(promises)
  return map
}

;(async () => {
  const preopens = {}
  function handleDir(value) {
    preopens[value] = value
  }
  function handleMapDir(value) {
    const [virt, actual] = value.split('::', 2)
    preopens[virt] = actual
  }

  const program = require('commander')
  program
    .option('--dir <directory>', 'Make a directory accessible', handleDir)
    .option('--mapdir <virtual-path::actual-path>', 'Map actual as virtual path', handleMapDir)
    .parse(process.argv)
    .usage('[.wasm] <arguments...>')

  if (program.args.length <= 0) {
    program.help()
    process.exit(1)
  }

  const wasmFileName = program.args[0]
  const wasi = new WASI({
    args: program.args,
    env: process.env,
    bindings: {
      ...WASI.defaultBindings,
      fs,
      path,
    },
    preopens: await getRealpaths(preopens),
  })

  try {
    const wasmBin = await fsPromises.readFile(wasmFileName)
    const wasmModule = await WebAssembly.compile(wasmBin)
    const importObject = Object.assign({}, wasi.getImports(wasmModule))
    const instance = await WebAssembly.instantiate(wasmModule, importObject)
    wasi.start(instance)
  } catch (e) {
    console.error(e)
    process.exit(1)
  }
})()
