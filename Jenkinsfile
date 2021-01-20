pipeline {

  agent any

  tools { nodejs "node" }
 
  stages {

    stage('Install') {
      steps {
        sh 'npm install'
      }
    }

    stage('Test & Publish Verification') {
      steps {
        sh 'npm run test-provider'
      }
    }

    stage('Can I deploy?') {
      steps {
        sh 'npm run can-i-deploy'
      }
    }

  }
}