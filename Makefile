.PHONY: lint test package ci

lint:
	npm run lint

test:
	npm test

package: test
	npm pack

ci: lint test package
