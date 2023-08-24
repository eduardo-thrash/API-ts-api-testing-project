pipeline {
    agent any 
    stages {
        stage('Stage 1') {
            steps {
                echo 'Hello world from API-ts-api-testing-project' 
            }
        }
        stage('Git') {
      steps {
        git 'https://github.com/eduardo-thrash/API-ts-api-testing-project.git'
      }
    }
     
    stage('Build') {
      steps {
        sh 'npm install'
      }
    }  
    
            
    stage('Test') {
      steps {
        sh 'npm clean'
      }
    }
}
