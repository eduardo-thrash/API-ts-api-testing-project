pipeline {
    agent any

    stages {
        stage('Clonar Repositorio') {
            steps {
                script {
                    // Clonar el repositorio de GitHub
                    checkout([
                        $class: 'GitSCM',
                        branches: [[name: '*/main']], // Cambia 'main' por la rama que desees
                        userRemoteConfigs: [[url: 'https://github.com/eduardo-thrash/API-ts-api-testing-project.git']] // Cambia la URL por la del repositorio que deseas clonar
                    ])
                }
            }
        }

        stage('Instalar Dependencias') {
            steps {
                // Instalar las dependencias utilizando npm
                bat 'npm install'
            }
        }

        stage('Ejecutar Comando desde package.json') {
            steps {
                // Ejecutar el comando definido en el archivo package.json
                bat 'npm run clean' // Cambia 'nombre-del-comando' por el comando que deseas ejecutar
            }
        }
    }
}
