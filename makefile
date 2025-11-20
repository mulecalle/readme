default: create-resume

create-resume:
	rm -rf ./resume/resume.pdf && npm run generate
