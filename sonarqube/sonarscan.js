
const scanner = require('sonarqube-scanner');

scanner(
    {
        serverUrl: 'http://localhost:9000',
        token: "sqp_23af27c540c35aaa78f405e20f81e5e7e57c82af",
        options: {
            'sonar.projectName': 'sparrowmart',
            'sonar.projectDescription': 'Here I can add a description of my project',
            'sonar.projectKey': 'sparrowmart',
            'sonar.projectVersion': '0.0.1',
            'sonar.exclusions': '',
            'sonar.sourceEncoding': 'UTF-8',
        }
    },
    () => process.exit()
)