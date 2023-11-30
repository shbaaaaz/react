# Notes

## Q. What is npm?

npm is a package manager but it doesn't stand for 'node package manager', it doesn't have a full form. It is basically a repository where JavaScript packages are hosted.

## Q. What is the difference between dev dependency and normal dependency?

If the package is needed only for development purpose, it can be added as dev dependency and if it is required in production as well then it needs to be added as normal dependency.

## Q. What is a bundler?

A bundler is library that does the minification, chunking.

## Q. What is the ^ carat and ~ tilde symbol in package.json?

^ allows the minor version upgrade, ~ allows the major version upgrade.

## What is the differece between package.json and package.lock.json?

package.json allows the latest version to be installed however, package.lock.json keeps the exact track of the version installed.

## What is transitive dependencies?

When we install a package or dependency, it can have its own set of dependencies which can have further dependencies, this is called transitive dependencies.
