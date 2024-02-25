run:
	lsof -i :5173 | awk 'NR!=1 {print $$2}' | xargs -r kill -9
	npm run dev

upgrade-modules:
	npx npm-check-updates -u

delete-branch:
	git branch -D $(branch)
	git push origin --delete $(branch)

reinstall-modules:
	rm -rf node_modules && npm install

# make delete-branch branch=your-branch-name