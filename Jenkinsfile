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
        git branch: 'main', url: 'https://github.com/eduardo-thrash/API-ts-api-testing-project.git'
      }
    }
     
    stage('Build') {
      steps {
        bat 'npm install'
      }
    }  
    
            
    stage('Clean') {
      steps {
        bat 'npm run clean'
      }
    }

stage('Test') {
      steps {
        bat 'npm run test:api'
      }
    }
        


}

}
