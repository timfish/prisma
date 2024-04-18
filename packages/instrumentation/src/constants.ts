import { readFileSync } from 'fs'
import * as path from 'path'

function getVersion(): string | undefined {
  try {
    const json = readFileSync(path.resolve('..', 'package.json'), 'utf-8')
    const pkgJson = JSON.parse(json) as { version: string }
    return pkgJson.version
  } catch (e) {
    return undefined
  }
}

export const GLOBAL_KEY = 'PRISMA_INSTRUMENTATION'

export const VERSION = getVersion() as string

export const NAME = '@prisma/instrumentation'

export const MODULE_NAME = 'prisma'
