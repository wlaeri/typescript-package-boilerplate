import { execSync } from 'child_process'
import * as path from 'path'

const PACKAGE_DIRECTORY = path.join(process.cwd(), './package')

function main() {
  const packageName = process.env.npm_package_name
  const version = process.env.npm_package_version
  const tarFile = `${packageName}-${version}.tgz`

  console.log(`Creating a new package directory...`)
  execSync(`rm -rf ${PACKAGE_DIRECTORY}`)
  execSync(`mkdir ${PACKAGE_DIRECTORY}`)

  console.log(`Packing the npm package...`)
  execSync(`npm pack`)
  execSync(`mv ${tarFile} ${PACKAGE_DIRECTORY}`)

  console.log(`Unzipping the TAR file...`)
  execSync(`tar -xvf ${PACKAGE_DIRECTORY}/${tarFile}`)

  console.log(`Package ready for inspection at: ${PACKAGE_DIRECTORY}`)
}

main()
